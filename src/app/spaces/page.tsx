import { dummySpaces } from "@/lib/dummy-spaces";
import Link from "next/link";

export default function SpacesPage() {
  const spaces = [...dummySpaces].sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
  );

  return (
    <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">場所一覧</h1>
        <Link
          href="/spaces/new"
          className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600"
        >
          + 追加
        </Link>
      </div>
      {spaces.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-5xl mb-4">📦</p>
          <p className="text-lg font-semibold text-gray-900">
            まだ場所が登録されてません
          </p>
          <p className="mt-2 text-sm text-gray-600">
            最初の収納スペースを登録してみよう
          </p>
          <Link
            href="/spaces/new"
            className="inline-block mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600"
          >
            場所を追加する
          </Link>
        </div>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {spaces.map((space) => (
            <li key={space.id}>
              <Link
                href={`/spaces/${space.id}`}
                className="block rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition"
              >
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  {space.name}
                </p>
                <div className="flex flex-wrap gap-2">
                  <p className="bg-blue-50 text-blue-700 ring-1 ring-blue-200 inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-sm font-medium">
                    W:{space.width}cm
                  </p>
                  <p className="bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-sm font-medium">
                    D:{space.depth}cm
                  </p>
                  <p className="bg-purple-50 text-purple-700 ring-1 ring-purple-200 inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-sm font-medium">
                    H:{space.height}cm
                  </p>
                </div>
                {space.note && (
                  <p className="text-sm text-gray-500 mt-3">{space.note}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
