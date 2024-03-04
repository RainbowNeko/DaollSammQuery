import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "奇怪水酱的食堂查询器",
  description: "为奇怪水酱DaollSamm开发的《东方夜雀食堂》的游戏辅助查询器",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
