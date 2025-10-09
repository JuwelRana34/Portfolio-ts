import type { Metadata } from "next";
import {Bricolage_Grotesque} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";


const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md.Juwel Rana",
  description: "portfolio of Md.Juwel Rana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${bricolage.variable} antialiased max-w-[1440px] mx-auto`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
             <Toaster richColors position="top-center"  />
          </ThemeProvider>
      </body>
    </html>
  );
}
