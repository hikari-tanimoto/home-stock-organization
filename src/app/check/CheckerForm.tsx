"use client";

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
      <div>
        <div className="flex items-center">
          <label
            htmlFor="check-width"
            className="flex-1 text-sm font-medium text-blue-700"
          >
            幅（mm）
          </label>
          <input
            id="check-width"
            type="number"
            inputMode="decimal"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="flex-2 mt-1 w-full rounded-lg border border-gray-300 px-3 py-4"
          />
        </div>
        <div className="flex items-center">
          <label
            htmlFor="check-height"
            className="flex-1 text-sm font-medium text-purple-700"
          >
            高さ（mm）
          </label>
          <input
            id="check-height"
            type="number"
            inputMode="decimal"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="flex-2 mt-1 w-full rounded-lg border border-gray-300 px-3 py-4"
          />
        </div>
        <div className="flex items-center">
          <label
            htmlFor="check-depth"
            className="flex-1 text-sm font-medium text-emerald-700"
          >
            奥行き（mm）
          </label>
          <input
            id="check-depth"
            type="number"
            inputMode="decimal"
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
            className="flex-2 mt-1 w-full rounded-lg border border-gray-300 px-3 py-4"
          />
        </div>
      </div>

      <h2 className="mt-20 text-2xl font-bold ">チェック結果</h2>
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
