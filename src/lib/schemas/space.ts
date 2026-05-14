import { z } from "zod";

export const spaceFormSchema = z.object({
  name: z.string().min(1, { message: "名前は必須です" }),
  width: z.number().min(1, { message: "幅は1以上で入力してください" }),
  depth: z.number().min(1, { message: "奥行きは1以上で入力してください" }),
  height: z.number().min(1, { message: "高さは1以上で入力してください" }),
  note: z
    .string()
    .max(500, { message: "メモは500文字以内で入力してください" })
    .optional(),
});

export const spaceSchema = spaceFormSchema.extend({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Space = z.infer<typeof spaceSchema>;
export type SpaceFormValues = z.infer<typeof spaceFormSchema>;
