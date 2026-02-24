import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import BackgroundTools from "@/components/BackgroundTools";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Usługi Remontowo-Budowlane | Nikos Dawid Porzeziński",
  description: "Profesjonalne usługi remontowo-budowlane w Siemiatyczach i okolicach. Solidność, terminowość i precyzja.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased bg-concrete text-ink`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        <BackgroundTools />
        {children}
      </body>
    </html>
  );
}
