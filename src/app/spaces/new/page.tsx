"use client";

import { createSpace } from "@/app/spaces/actions";
import FormField from "@/components/FormField";
import { spaceFormSchema, type SpaceFormValues } from "@/lib/schemas/space";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function NewSpacePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SpaceFormValues>({
    resolver: zodResolver(spaceFormSchema),
  });

  const onSubmit = async (data: SpaceFormValues) => {
    await createSpace(data);
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <FormField
            label="場所の名前"
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
            label="幅（mm）"
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
            label="高さ（mm）"
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
            label="奥行き（mm）"
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
            label="メモ"
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
            追加する
          </button>
        </div>
      </form>
    </main>
  );
}
