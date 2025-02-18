"use client";

import { useEffect, useState } from "react";
import { Button, Card, Hr, Input, Link } from "../../components";
import { api } from "~/trpc/react";
import { setAuthTokens } from "~/utils";
import { useRouter } from "next/navigation";
import { useAuth } from "../authContext";

export function Signup() {
  const router = useRouter();
  const auth = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = api.user.signup.useMutation();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({
      name,
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
      setName("");
      setEmail("");
      setPassword("");

      setAuthTokens(mutation.data);

      if (mutation.data.isEmailVerified) {
        router.replace("/category");
      } else {
        auth.onLogin({
          isEmailVerified: mutation.data.isEmailVerified,
          email: mutation.data.email,
          name: mutation.data.name,
          userId: mutation.data.id,
        });
      }

      auth.setIsEmailVerified(mutation.data.isEmailVerified);
    }
  }, [mutation.isSuccess, mutation.data, auth.onLogin]);

  return (
    <main className="mt-10 flex justify-center">
      <Card title="Create your account">
        <form onSubmit={onSubmit}>
          <Input
            id="name"
            label="Name"
            name="name"
            placeholder="Enter"
            type="text"
            value={name}
            onValueChange={setName}
            className="mb-8"
            autoComplete="on"
            required
            disabled={mutation.isPending}
            error={validationErrors?.name?.[0]}
          />
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
            disabled={mutation.isPending}
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
            disabled={mutation.isPending}
            error={validationErrors?.password?.[0]}
          />
          <Button
            text="Create account"
            type="submit"
            disabled={mutation.isPending}
          />
          {defaultError && (
            <p className="mb-1 text-xs text-red-500">{defaultError}</p>
          )}
          <Hr className="my-8" />
          <div className="text-center">
            Have have an Account? <Link href="/login">Login</Link>
          </div>
        </form>
      </Card>
    </main>
  );
}
