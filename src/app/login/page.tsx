"use client";

import { useState } from "react";
import { Button, Card, Hr, Input, Link } from "../_components";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <main className="mt-10 flex justify-center">
      <Card title="Login">
        <form onSubmit={onSubmit}>
          <div className="text-center mb-8">
            <h3 className="m-0 mb-3 text-2xl font-medium">
              Welcome back to ECOMMERCE
            </h3>
            <p className="">The next gen business marketplace</p>
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
          />
          <Button text="Login" className="mb-8" type="submit" />
          <Hr className="mb-8" />
          <div className="text-center">
            Don&apos;t have an Account? <Link href="/">Sign up</Link>
          </div>
        </form>
      </Card>
    </main>
  );
}
