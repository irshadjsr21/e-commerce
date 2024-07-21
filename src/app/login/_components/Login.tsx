"use client";

import { useEffect, useState } from "react";
import { Button, Card, Hr, Input, Link } from "../../../components";
import { api } from "~/trpc/react";
import { useAuth } from "../../authContext";
import { setAuthTokens } from "~/utils";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuth();
  const router = useRouter();

  const mutation = api.user.login.useMutation();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({
      email,
      password,
    });
  };

  const validationErrors = mutation.error?.data?.zodError?.fieldErrors;
  const defaultError =
    Object.keys(validationErrors ?? {}).length === 0
      ? mutation.error?.message
      : undefined;

  useEffect(() => {
    if (mutation.isSuccess) {
      setAuthTokens(mutation.data);
      auth.onLogin({
        isEmailVerified: mutation.data.isEmailVerified,
        email: mutation.data.email,
        name: mutation.data.name,
        userId: mutation.data.id,
      });
      router.push("/category");
    }
  }, [mutation.isSuccess, mutation.data, auth.onLogin]);

  return (
    <main className="mt-10 flex justify-center">
      <Card title="Login">
        <form onSubmit={onSubmit}>
          <div className="mb-8 text-center">
            <h3 className="m-0 mb-3 text-2xl font-medium">
              Welcome back to ECOMMERCE
            </h3>
            <p>The next gen business marketplace</p>
          </div>
          <Input
            id="email"
            label="Email"
            name="email"
            placeholder="Enter"
            type="email"
            value={email}
            onValueChange={setEmail}
            className="mb-8"
            autoComplete="on"
            required
            error={validationErrors?.email?.[0]}
          />
          <Input
            id="password"
            label="Password"
            name="password"
            placeholder="Enter"
            type="password"
            value={password}
            onValueChange={setPassword}
            className="mb-10"
            autoComplete="on"
            required
            error={validationErrors?.password?.[0]}
          />
          <Button text="Login" type="submit" />
          {defaultError && (
            <p className="mb-1 text-xs text-red-500">{defaultError}</p>
          )}
          <Hr className="my-8" />
          <div className="text-center">
            Don&apos;t have an Account? <Link href="/">Sign up</Link>
          </div>
        </form>
      </Card>
    </main>
  );
}
