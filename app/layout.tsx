import type { Metadata } from "next";
import { Manrope, IBM_Plex_Mono, Fredoka } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });
const display = Fredoka({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Yong Justice Numfor — IT & Digital Solutions Specialist", template: "%s — Yong Justice Numfor" },
  description: "IT and Digital Solutions Specialist combining web applications, technical support, customer service, data organisation, digitalisation, and operational experience.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${mono.variable} ${display.variable}`}>
        {process.env.NODE_ENV === "development" && <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async />}
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.dataset.theme='dark'}catch(e){}})()` }} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
