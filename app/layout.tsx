import type { Metadata } from "next";
import "./globals.css";
import { geistSans } from "@/ui/fonts";

export const metadata: Metadata = {
  title: "User search utility",
  description: "FE homework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${geistSans.className} antialiased p-6 md:p-12 bg-white`}>
        {children}
      </body>
    </html>
  );
}
