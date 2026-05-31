"use client";

import { deleteSpace } from "@/app/spaces/actions";

type Props = {
  id: string;
  name: string;
};

export function DeleteButton({ id, name }: Props) {
  const handleDelete = async () => {
    const confirmed = window.confirm(`${name}を削除しますか？`);
    if (!confirmed) return;
    await deleteSpace(id);
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      className="bg-red-500 text-white px-4 py-2 rounded-md mt-2"
    >
      削除する
    </button>
  );
}
