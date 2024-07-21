import { publicProcedure } from "../../trpc";
import { generateOTP, sendOTP } from "~/server/utils";

export const sendOtpProcedure = publicProcedure.mutation(async ({ ctx }) => {
  if (!ctx.user) throw new Error("Login to continue");

  if (ctx.user.isEmailVerified) {
    throw new Error("Email already verified");
  }

  const otp = generateOTP();

  await ctx.db.signupRequest.deleteMany({
    where: {
      userId: ctx.user.id,
    },
  });

  await Promise.all([
    ctx.db.signupRequest.create({
      data: {
        userId: ctx.user.id,
        code: otp,
      },
    }),
    sendOTP(ctx.user.email, otp),
  ]);

  return {
    isSent: true,
  };
});
