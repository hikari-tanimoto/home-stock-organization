"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { spaceFormSchema, type SpaceFormValues } from "@/lib/schemas/space";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createSpace(formData: SpaceFormValues) {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("ログインが必要です");
  }

  const parsed = spaceFormSchema.parse(formData);
  await prisma.space.create({ data: { ...parsed, userId: session.user.id } });
  revalidatePath("/spaces");
  redirect("/spaces");
}

export async function updateSpace(id: string, formData: SpaceFormValues) {
  const parsed = spaceFormSchema.parse(formData);
  await prisma.space.update({ where: { id }, data: parsed });
  revalidatePath("/spaces");
  revalidatePath(`/spaces/${id}`);
  redirect(`/spaces/${id}`);
}

export async function deleteSpace(id: string) {
  await prisma.space.delete({ where: { id } });
  revalidatePath("/spaces");
  redirect("/spaces");
}
