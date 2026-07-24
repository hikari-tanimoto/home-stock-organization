import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { CheckerForm } from "./CheckerForm";

export default async function CheckPage() {
  const session = await auth();
  if (!session?.user?.id) {
    redirect("/");
  }

  const spaces = await prisma.space.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
      <h1 className="text-2xl font-bold mb-4">家具サイズチェック</h1>
      <p className="text-sm text-gray-600 mb-6">
        買いたい家具のサイズを入力すると、どの場所に入るか分かります。
      </p>
      <CheckerForm spaces={spaces} />
    </main>
  );
}
