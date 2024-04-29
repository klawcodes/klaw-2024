import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

export const metadata: Metadata = {
  title: "klaw's page",
  description: "this is portfolio page bro",
};

interface RootLayoutPage {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({
  children,
  params: {locale},
}: Readonly<RootLayoutPage>) {
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/klawklaw.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
