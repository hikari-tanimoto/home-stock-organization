import { auth } from "@/auth";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { signInAction, signOutAction } from "./auth-action";
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* header 全体を出し分けた方が良さそう */}

        <header className="border-b bg-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gray-900">
              📦 収納サイズ管理
            </Link>
            {session?.user && (
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
            )}
            {session?.user ? (
              <div className="flex items-center gap-3">
                {session.user.image && (
                  <Image
                    src={session.user.image}
                    alt=""
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                )}
                <span className="text-gray-700">
                  {session.user.name ?? session.user.email}
                </span>
                <form action={signOutAction}>
                  <button
                    type="submit"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    ログアウト
                  </button>
                </form>
              </div>
            ) : (
              <form action={signInAction}>
                <button
                  type="submit"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Googleでログイン
                </button>
              </form>
            )}
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
