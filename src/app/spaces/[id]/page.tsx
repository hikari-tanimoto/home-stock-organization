import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { DeleteButton } from "./DeleteButton";

export default async function SpaceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();
  if (!session?.user?.id) {
    redirect("/");
  }

  const { id } = await params;
  const space = await prisma.space.findUnique({ where: { id } });
  if (!space || space.userId !== session.user.id) {
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
      <nav className="flex gap-2 mt-4">
        <Link
          href={`/spaces/${space.id}/edit`}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          編集する
        </Link>
        <Link
          href={`/spaces`}
          className="bg-olive-500 text-white px-4 py-2 rounded-md"
        >
          一覧ページに戻る
        </Link>
      </nav>
      <DeleteButton id={space.id} name={space.name} />
    </main>
  );
}
