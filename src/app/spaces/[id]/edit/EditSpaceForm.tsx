"use client";

import FormField from "@/components/FormField";
import type { Space } from "@/generated/prisma/client";
import { spaceFormSchema, type SpaceFormValues } from "@/lib/schemas/space";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { updateSpace } from "../../actions";

type Props = {
  space: Space;
};

export function EditSpaceForm({ space }: Props) {
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
      note: space.note ?? undefined,
    },
  });

  const onSubmit = async (data: SpaceFormValues) => {
    await updateSpace(space.id, data);
  };

  return (
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
          更新する
        </button>
      </div>
    </form>
  );
}
