"use client";

import { useRouter } from "next/navigation";

type Props = {
  id: string;
  name: string;
};

export function DeleteButton({ id, name }: Props) {
  const router = useRouter();
  const handleDelete = () => {
    const confirmed = window.confirm(`${name}を削除しますか？`);
    if (!confirmed) return;

    console.log("削除:", id);
    router.push("/spaces");
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
