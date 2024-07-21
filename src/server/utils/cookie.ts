import { cookies } from "next/headers";

export const getAuthTokens = () => {
  return {
    accessToken: cookies().get("access_token")?.value,
    refreshToken: cookies().get("refresh_token")?.value,
  };
};

const getCookiesAsCollection = function (
  rawCookie: string
): Record<string, string> {
  const cookies: Record<string, string> = {};
  rawCookie &&
    rawCookie.split(";").forEach(function (cookie: string) {
      const parts: RegExpMatchArray | null = cookie.match(/(.*?)=(.*)$/);
      if (parts?.length) {
        cookies[parts[1].trim()] = (parts[2] ?? "").trim();
      }
    });
  return cookies;
};
