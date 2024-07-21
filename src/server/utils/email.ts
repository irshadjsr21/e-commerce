import { MailtrapClient } from "mailtrap";
import { config } from "./config";

const SENDER_EMAIL = config.SENDER_EMAIL;

const client = new MailtrapClient({ token: config.MAIL_TRAP_API_KEY });

export const sendOTP = async (email: string, otp: string) => {
  const sender = { name: "No Reply", email: SENDER_EMAIL };

  await client.send({
    from: sender,
    to: [{ email }],
    subject: "OTP for Email Verification",
    text: `Your OTP is ${otp}.`,
  });
};
