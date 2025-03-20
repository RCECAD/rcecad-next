import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "RCECAD",
  description: "placeholder",
};

const lato = Lato({
  subsets: ['latin'],
  weight: ["100", "300", "400", "700", "900"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} ${lato.style} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
