import { useState } from "react";
import { Button, Card, OtpInput } from "../../components";

export function Verify() {
  const [otp, setOtp] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ otp });
  };

  return (
    <main className="mt-10 flex justify-center">
      <Card title="Verify your email">
        <form onSubmit={onSubmit}>
          <div className="mb-8 text-center">
            <p>Enter the 8 digit code you have received on</p>
            <p className="font-medium">swa***@gmail.com</p>
          </div>
          <div className="mb-16">
            <p className="mb-2">Code</p>
            <OtpInput value={otp} onChange={setOtp} numInputs={8} />
          </div>
          <Button text="Verify" type="submit" />
        </form>
      </Card>
    </main>
  );
}
