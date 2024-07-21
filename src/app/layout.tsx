import "~/styles/globals.css";

import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { Header } from "../components";
import { AuthContextProvider } from "./authContext";

export const metadata: Metadata = {
  title: "E-Commerce App",
  description: "E-Commerce Application",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <TRPCReactProvider>
          <AuthContextProvider>
            <Header />
            {children}
          </AuthContextProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
