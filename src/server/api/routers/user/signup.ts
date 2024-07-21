import { z } from "zod";
import { publicProcedure } from "../../trpc";
import {
  generateOTP,
  generateTokens,
  hashPassword,
  sendOTP,
  verifyPassword,
} from "~/server/utils";
import { Prisma } from "@prisma/client";

const schema = z.object({
  name: z.string({ message: "Name is required" }),
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Email is invalid" }),
  password: z
    .string({ message: "Password is required" })
    .min(8, "Password must be at least 8 characters long"),
});

export const signupProcedure = publicProcedure
  .input(schema)
  .mutation(async ({ input, ctx }) => {
    const hashedPassword = await hashPassword(input.password);

    let user = await ctx.db.user.findFirst({
      where: {
        email: input.email,
        isEmailVerified: false,
      },
    });

    if (!user) {
      try {
        user = await ctx.db.user.create({
          data: {
            email: input.email,
            name: input.name,
            password: hashedPassword,
          },
        });
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          if (error.code === "P2002") {
            throw new Error("Email already exists");
          }
        }

        throw error;
      }
    } else if (!(await verifyPassword(input.password, user?.password ?? ""))) {
      throw new Error("Incorrect password");
    }

    const accessToken = generateTokens({ email: user.email, userId: user.id });

    return {
      id: user.id,
      email: user.email,
      isEmailVerified: user.isEmailVerified,
      name: user.name,
      accessToken: accessToken,
    };
  });
