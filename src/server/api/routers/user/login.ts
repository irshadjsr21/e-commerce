import { z } from "zod";
import { publicProcedure } from "../../trpc";
import { generateTokens, verifyPassword } from "~/server/utils";

const schema = z.object({
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Email is invalid" }),
  password: z
    .string({ message: "Password is required" })
    .min(8, "Password must be at least 8 characters long"),
});

export const loginProcedure = publicProcedure
  .input(schema)
  .mutation(async ({ input, ctx }) => {
    const user = await ctx.db.user.findFirst({
      where: {
        email: input.email,
      },
    });

    if (!user) throw new Error("User not found");

    if (!(await verifyPassword(input.password, user.password))) {
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
