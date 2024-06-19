import type { Metadata } from "next";
import { Lato } from "next/font/google";

import "material-icons/iconfont/material-icons.css";
import "./globals.css";
import Navbar from "./components/Navbar";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Driven",
  description: "Real Estate for Dubai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className={lato.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
