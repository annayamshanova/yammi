import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import { SiteLoader } from "@/components/SiteLoader";
import "./globals.css";

const PRELOADER_CHECK = `try{if(sessionStorage.getItem('yammi-loaded')){document.documentElement.classList.add('no-preloader')}}catch(e){}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://yammi.me"),
};

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html className={`${sora.variable} ${mono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: PRELOADER_CHECK }} />
        <SiteLoader />
        {children}
      </body>
    </html>
  );
}
