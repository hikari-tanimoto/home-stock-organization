import { dummySpaces } from "@/lib/dummy-spaces";

export default function SpacesPage() {
  const spaces = [...dummySpaces].sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
  );
  return (
    <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
      <ul className="grid gap-4 sm:grid-cols-2">
        {spaces.map((space) => (
          <li
            key={space.id}
            className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition"
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
          </li>
        ))}
      </ul>
    </main>
  );
}
