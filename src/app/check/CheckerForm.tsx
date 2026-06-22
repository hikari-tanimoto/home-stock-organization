"user client";

import type { Space } from "@/generated/prisma/client";
import { fitsIn } from "@/lib/fits";
import { useState } from "react";

type Props = {
  spaces: Space[];
};

export function CheckerForm({ spaces }: Props) {
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");
  const [height, setHeight] = useState("");

  const allFilled = width !== "" && depth !== "" && height !== "";

  const item = {
    width: Number(width),
    depth: Number(depth),
    height: Number(height),
  };

  return (
    <div>
      {/* 入力欄（W/D/H） */}
      <div className="grid grid-cols-3 gap-3">
        {/* width input → setWidth */}
        {/* depth input → setDepth */}
        {/* height input → setHeight */}
      </div>

      {/* 結果表示 */}
      {allFilled && (
        <ul className="mt-6 space-y-2">
          {spaces.map((space) => {
            const ok = fitsIn(item, space);
            return (
              <li key={space.id}>
                {ok ? "⭕️" : "❌"} {space.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
