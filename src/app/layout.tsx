import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "収納サイズ管理",
  description:
    "自宅の収納スペースのサイズを記録して、買い物中にサクッと確認できるアプリ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="border-b bg-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gray-900">
              📦 収納サイズ管理
            </Link>
            <nav className="flex gap-4 text-sm">
              <Link
                href="/spaces"
                className="text-gray-700 hover:text-gray-900"
              >
                場所一覧
              </Link>
              <Link
                href="/spaces/new"
                className="text-gray-700 hover:text-gray-900"
              >
                追加
              </Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
