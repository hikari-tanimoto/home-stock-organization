"use client";

import FormField from "@/components/FormField";
import { spaceFormSchema, type SpaceFormValues } from "@/lib/schemas/space";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type Props = {
  action: (data: SpaceFormValues) => Promise<void>;
  defaultValues?: SpaceFormValues;
  submitLabel: string;
  submittingLabel: string;
};

export function SpaceForm({
  action,
  defaultValues,
  submitLabel,
  submittingLabel,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SpaceFormValues>({
    resolver: zodResolver(spaceFormSchema),
    defaultValues,
  });

  const onSubmit = async (data: SpaceFormValues) => {
    await action(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
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
            className="block w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base border py-4 px-2"
          />
        </FormField>
        <FormField
          label="幅（mm）"
          htmlFor="width"
          errorMessage={errors.width?.message}
        >
          <input
            type="number"
            inputMode="decimal"
            id="width"
            {...register("width", { valueAsNumber: true })}
            className="block w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base border py-4 px-2"
          />
        </FormField>
        <FormField
          label="高さ（mm）"
          htmlFor="height"
          errorMessage={errors.height?.message}
        >
          <input
            type="number"
            inputMode="decimal"
            id="height"
            {...register("height", { valueAsNumber: true })}
            className="block w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base border py-4 px-2"
          />
        </FormField>
        <FormField
          label="奥行き（mm）"
          htmlFor="depth"
          errorMessage={errors.depth?.message}
        >
          <input
            type="number"
            inputMode="decimal"
            id="depth"
            {...register("depth", { valueAsNumber: true })}
            className="block w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base border py-4 px-2"
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
            className="block w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base border py-4 px-2"
          />
        </FormField>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 text-white p-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed w-full"
        >
          {isSubmitting ? submittingLabel : submitLabel}
        </button>
      </div>
    </form>
  );
}
