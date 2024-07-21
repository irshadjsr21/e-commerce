const getEnv = (key: string) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

export const config = {
  JWT_SECRET: getEnv("JWT_SECRET"),
  JWT_EXPIRY: getEnv("JWT_EXPIRY"),
  MAIL_TRAP_API_KEY: getEnv("MAIL_TRAP_API_KEY"),
  SENDER_EMAIL: getEnv("SENDER_EMAIL"),
};
