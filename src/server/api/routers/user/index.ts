import { createTRPCRouter } from "~/server/api/trpc";
import { signupProcedure } from "./signup";
import { verifyProcedure } from "./verify";
import { loginProcedure } from "./login";
import { sendOtpProcedure } from "./sendOtp";
import { profileProcedure } from "./profile";

export const userRouter = createTRPCRouter({
  signup: signupProcedure,
  verifyEmail: verifyProcedure,
  login: loginProcedure,
  sendOtp: sendOtpProcedure,
  profile: profileProcedure,
});
