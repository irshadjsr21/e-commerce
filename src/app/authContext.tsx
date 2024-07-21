"use client";

import { useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { api } from "~/trpc/react";

export interface AuthContextInterface {
  isLoaded: boolean;
  isLoggedIn: boolean;
  email: string;
  userId: string;
  name: string;
  onLogin: (params: {
    isEmailVerified?: boolean;
    email: string;
    userId: string;
    name: string;
  }) => void;
  onLogout: () => void;
  isEmailVerified: boolean;
  setIsEmailVerified: (isEmailVerified: boolean) => void;
}

const AuthContext = createContext<AuthContextInterface | undefined>(undefined);

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const router = useRouter();

  const query = api.user.profile.useQuery(undefined, {
    retry: false,
    refetchInterval: false,
  });

  const onLogin = useCallback(
    (params: {
      isEmailVerified?: boolean;
      email: string;
      userId: string;
      name: string;
    }) => {
      setIsEmailVerified(params.isEmailVerified ?? false);
      setIsLoggedIn(true);
      setEmail(params.email);
      setUserId(params.userId);
      setName(params.name);

      if (!params.isEmailVerified) {
        router.push("/");
      }
    },
    []
  );

  const onLogout = useCallback(() => {
    setIsLoggedIn(false);
    setEmail("");
    setUserId("");
    setName("");
  }, []);

  useEffect(() => {
    if (query.isSuccess && query.data) {
      onLogin({
        email: query.data.email,
        userId: query.data.id,
        name: query.data.name,
        isEmailVerified: query.data.isEmailVerified,
      });
    }

    if (query.isError) {
      onLogout();
    }

    if (query.isSuccess || query.isError) {
      setIsLoaded(true);
    }
  }, [query.data, query.isSuccess, query.isError]);

  const value = useMemo(() => {
    return {
      isLoaded,
      isLoggedIn,
      email,
      userId,
      name,
      onLogin,
      onLogout,
      isEmailVerified,
      setIsEmailVerified,
    };
  }, [
    isLoaded,
    isLoggedIn,
    email,
    userId,
    name,
    onLogin,
    onLogout,
    isEmailVerified,
    setIsEmailVerified,
  ]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);

  if (!value) throw new Error("useAuth must be used within an AuthProvider");

  return value;
}
