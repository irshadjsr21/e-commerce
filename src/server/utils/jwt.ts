import jwt from "jsonwebtoken";
import { config } from "./config";

export interface TokenPayload {
  userId: string;
  email: string;
}

export const generateTokens = (payload: TokenPayload) => {
  return jwt.sign(payload, config.JWT_SECRET, {
    expiresIn: config.JWT_EXPIRY,
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, config.JWT_SECRET) as TokenPayload;
};
