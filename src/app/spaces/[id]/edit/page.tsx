import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { EditSpaceForm } from "./EditSpaceForm";

export default async function EditSpacePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const space = await prisma.space.findUnique({ where: { id } });
  if (!space) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
      <h1 className="text-2xl font-bold mb-4">{space.name}を編集する</h1>
      <EditSpaceForm space={space} />
    </main>
  );
}
