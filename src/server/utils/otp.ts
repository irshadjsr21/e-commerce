import crypto from "crypto";

export const generateOTP = () => {
  return crypto.randomInt(10000000, 99999999).toString();
};
