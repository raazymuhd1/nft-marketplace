import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header, RainbowProvider, Footer } from "@/components";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nft Marketplace",
  description: "build an NFT marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full overflow-x-auto`}
      >
        <RainbowProvider>
          <Header />
          {children}
          <Footer />
        </RainbowProvider>
      </body>
    </html>
  );
}
