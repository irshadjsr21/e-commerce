import { cookies } from "next/headers";

export const getAuthTokens = () => {
  return {
    accessToken: cookies().get("access_token")?.value,
    refreshToken: cookies().get("refresh_token")?.value,
  };
};
