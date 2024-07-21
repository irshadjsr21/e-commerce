"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "~/app/authContext";
import { setAuthTokens } from "~/utils";

export const Logout = () => {
  const auth = useAuth();
  const router = useRouter();

  const onClick = () => {
    if (auth.isLoggedIn) {
      setAuthTokens({ accessToken: "" });
      auth.onLogout();
    } else {
      router.push("/login");
    }
  };

  return (
    <button
      className="m-0 cursor-pointer border-none bg-white p-0 text-xs text-muted no-underline"
      onClick={onClick}
    >
      {auth.isLoggedIn ? "Logout" : "Login"}
    </button>
  );
};
