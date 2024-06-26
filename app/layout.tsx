import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "./footer/page";

const font = Poppins({ subsets: ["latin"] ,
                      weight: '400'});

export const metadata: Metadata = {
  title: "FanCentral",
  description: "Content creation sex blow jobs vidoe vexens fitness instructor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}
  
      </body>
    </html>
  );
}
