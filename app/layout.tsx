import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "klaw's page",
  description: "this is portfolio page bro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/klawklaw.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
