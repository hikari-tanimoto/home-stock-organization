import type { Space } from "@/generated/prisma/client";

type Dimensions = {
  width: number;
  depth: number;
  height: number;
};

export function fitsIn(item: Dimensions, space: Space): boolean {
  return (
    item.width <= space.width &&
    item.depth <= space.depth &&
    item.height <= space.height
  );
}
