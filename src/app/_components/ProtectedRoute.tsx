"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "~/app/authContext";
import { Spinner } from "~/components";

export interface ProtectedRouteProps {
  children: React.ReactNode;
  type: "login" | "guest" | "unverified";
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  type,
}) => {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (auth.isLoaded && !auth.isLoggedIn && type !== "guest") {
      router.replace("/");
    }

    if (
      auth.isLoaded &&
      auth.isLoggedIn &&
      !auth.isEmailVerified &&
      type !== "unverified"
    ) {
      router.replace("/verify");
    }

    if (
      auth.isLoaded &&
      auth.isLoggedIn &&
      auth.isEmailVerified &&
      (type === "unverified" || type === "guest")
    ) {
      router.replace("/category");
    }
  }, [auth.isLoaded, auth.isLoggedIn, type]);

  if (!auth.isLoaded) {
    return (
      <div className="flex justify-center pt-20">
        <Spinner />
      </div>
    );
  }

  if (type === "login" && auth.isLoggedIn) {
    return children;
  }

  if (type === "guest" && !auth.isLoggedIn) {
    return children;
  }

  if (type === "unverified" && auth.isLoggedIn && !auth.isEmailVerified) {
    return children;
  }

  return null;
};
