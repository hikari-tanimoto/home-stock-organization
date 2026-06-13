import { auth } from "@/auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12">
      <section className="text-center">
        {session?.user ? (
          <>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              📐 収納サイズ管理
            </h1>
            <p className="mt-3 text-gray-600">
              家の収納スペースの寸法を記録して、買い物中に「これ入る？」をサクッと確認。
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/spaces"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600"
              >
                場所一覧を見る
              </Link>
              <Link
                href="/spaces/new"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50"
              >
                場所を追加する
              </Link>
            </div>
          </>
        ) : null}
      </section>
    </main>
  );
}
