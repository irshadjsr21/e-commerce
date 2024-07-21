"use client";

import { useEffect, useState } from "react";
import { Button, Card, OtpInput } from "../../components";
import { api } from "~/trpc/react";
import { useAuth } from "../authContext";
import { useRouter } from "next/navigation";

export function Verify() {
  const router = useRouter();
  const auth = useAuth();
  const { email } = auth;

  const [otp, setOtp] = useState("");

  const sendMutation = api.user.sendOtp.useMutation();
  const verifyMutation = api.user.verifyEmail.useMutation();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    verifyMutation.mutate({
      otp,
    });
  };

  useEffect(() => {
    sendMutation.mutate();
  }, []);

  useEffect(() => {
    if (verifyMutation.isSuccess) {
      auth.setIsEmailVerified(true);
      router.push("/category");
    }
  }, [verifyMutation.isSuccess, auth.setIsEmailVerified]);

  const maskEmail = () => {
    const emailParts = email.split("@");
    const username = emailParts[0];
    const domain = emailParts[1];

    if (!username || !domain) {
      return email;
    }

    const maskedEmail = `${username.slice(0, 3)}***`;
    return `${maskedEmail}@${domain}`;
  };

  return (
    <main className="mt-10 flex justify-center">
      <Card title="Verify your email">
        <form onSubmit={onSubmit}>
          <div className="mb-8 text-center">
            <p>Enter the 8 digit code you have received on</p>
            <p className="font-medium">{maskEmail()}</p>
          </div>
          <div className="mb-16">
            <p className="mb-2">Code</p>
            <OtpInput
              disabled={verifyMutation.isPending}
              value={otp}
              onChange={setOtp}
              numInputs={8}
            />
          </div>
          <Button text="Verify" type="submit" />
          {sendMutation.isError && (
            <p className="mt-1 text-xs text-red-500">
              {sendMutation.error.message}
            </p>
          )}
          {verifyMutation.isError && (
            <p className="mt-1 text-xs text-red-500">
              {verifyMutation.error.message}
            </p>
          )}
        </form>
      </Card>
    </main>
  );
}
