import { auth } from "@/auth";
import { SpaceForm } from "@/components/SpaceForm";
import { prisma } from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";
import { updateSpace } from "../../actions";

export default async function EditSpacePage({
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
      <h1 className="text-2xl font-bold mb-4">{space.name}を編集する</h1>
      <SpaceForm
        action={updateSpace.bind(null, space.id)}
        defaultValues={{
          name: space.name,
          width: space.width,
          depth: space.depth,
          height: space.height,
          note: space.note ?? undefined,
        }}
        submitLabel="更新する"
        submittingLabel="更新中..."
      />
    </main>
  );
}
