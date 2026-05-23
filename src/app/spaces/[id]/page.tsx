import { dummySpaces } from "@/lib/dummy-spaces";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function SpaceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const space = dummySpaces.find((space) => space.id === id);
  if (!space) {
    notFound();
  }
  return (
    <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
      <h1 className="text-2xl font-bold mb-4">{space.name}</h1>
      <p>Created At:{space.createdAt.toLocaleDateString("ja-JP")}</p>
      <p>Updated At:{space.updatedAt.toLocaleDateString("ja-JP")}</p>
      <p>W:{space.width}cm</p>
      <p>D:{space.depth}cm</p>
      <p>H:{space.height}cm</p>
      {space.note && <p>{space.note}</p>}
      <Link href={`/spaces`}>一覧ページに戻る</Link>
    </main>
  );
}
