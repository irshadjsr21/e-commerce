import { useState } from "react";
import { Button, Card, Hr, Input, Link } from "../../components";

export function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, password });
  };

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
          <Button text="Create account" className="mb-8" type="submit" />
          <Hr className="mb-8" />
          <div className="text-center">
            Have have an Account? <Link href="/login">Login</Link>
          </div>
        </form>
      </Card>
    </main>
  );
}
