import { z } from "zod";
import { publicProcedure } from "../../trpc";

const schema = z.object({
  otp: z.string({ message: "OTP is required" }),
});

export const verifyProcedure = publicProcedure
  .input(schema)
  .mutation(async ({ input, ctx }) => {
    if (!ctx.user) throw new Error("Login to verify your email");

    const request = await ctx.db.signupRequest.findFirst({
      where: {
        code: input.otp,
        userId: ctx.user.id,
        createdAt: {
          gte: new Date(Date.now() - 5 * 60 * 1000),
        },
      },
    });

    if (!request) {
      throw new Error("Invalid OTP or expired");
    }

    await ctx.db.signupRequest.delete({
      where: {
        id: request.id,
      },
    });

    await ctx.db.user.update({
      where: {
        id: ctx.user.id,
      },
      data: {
        isEmailVerified: true,
      },
    });

    return {
      isSuccess: true,
    };
  });
