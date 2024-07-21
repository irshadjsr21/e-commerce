"use client";

import { useAuth } from "~/app/authContext";
import { setAuthTokens } from "~/utils";

export const Logout = () => {
  const auth = useAuth();

  const onClick = () => {
    setAuthTokens({ accessToken: "" });
    auth.onLogout();
  };

  return (
    <button
      className="m-0 cursor-pointer border-none bg-white p-0 text-xs text-muted no-underline"
      onClick={onClick}
    >
      Logout
    </button>
  );
};
