import type { Metadata } from "next";
import "./globals.css";
import { yekanFonts } from "@/constant/yekanFont";
import Nav from "./_components/Nav";

export const metadata: Metadata = {
  title: {
    template: "زیترو | %s",
    default: "زیترو",
  },
  description: "فروشگاه آنلاین زیترو",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${yekanFonts.variable} `}>
        <Nav />
        {children}
        <footer className="hidden lg:block">2</footer>
      </body>
    </html>
  );
}
