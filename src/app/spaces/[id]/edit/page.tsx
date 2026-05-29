"use client";

import FormField from "@/components/FormField";
import { dummySpaces } from "@/lib/dummy-spaces";
import { spaceFormSchema, type SpaceFormValues } from "@/lib/schemas/space";
import { zodResolver } from "@hookform/resolvers/zod";
import { notFound, useRouter } from "next/navigation";
import { use } from "react";
import { useForm } from "react-hook-form";

export default function EditSpacePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const { id } = use(params);
  const space = dummySpaces.find((space) => space.id === id);
  if (!space) {
    notFound();
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SpaceFormValues>({
    resolver: zodResolver(spaceFormSchema),
    defaultValues: {
      name: space.name,
      width: space.width,
      depth: space.depth,
      height: space.height,
      note: space.note,
    },
  });

  const onSubmit = (data: SpaceFormValues) => {
    console.log(data);
    router.push(`/spaces/${id}`);
  };
  return (
    <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
      <h1 className="text-2xl font-bold mb-4">{space.name}を編集する</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <FormField
            label="Name"
            htmlFor="name"
            errorMessage={errors.name?.message}
          >
            <input
              type="text"
              id="name"
              {...register("name")}
              className="block w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-1"
            />
          </FormField>
          <FormField
            label="Width"
            htmlFor="width"
            errorMessage={errors.width?.message}
          >
            <input
              type="number"
              id="width"
              {...register("width", { valueAsNumber: true })}
              className="block w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-1"
            />
          </FormField>
          <FormField
            label="Depth"
            htmlFor="depth"
            errorMessage={errors.depth?.message}
          >
            <input
              type="number"
              id="depth"
              {...register("depth", { valueAsNumber: true })}
              className="block w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-1"
            />
          </FormField>
          <FormField
            label="Height"
            htmlFor="height"
            errorMessage={errors.height?.message}
          >
            <input
              type="number"
              id="height"
              {...register("height", { valueAsNumber: true })}
              className="block w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-1"
            />
          </FormField>
          <FormField
            label="Note"
            htmlFor="note"
            errorMessage={errors.note?.message}
          >
            <textarea
              id="note"
              {...register("note")}
              className="block w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-1"
            />
          </FormField>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
