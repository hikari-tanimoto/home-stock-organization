import { Space } from "./schemas/space";

const dummySpaces: Space[] = [
  {
    id: "1",
    name: "リビング",
    width: 100,
    depth: 100,
    height: 100,
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-01"),
  },
  {
    id: "2",
    name: "寝室",
    width: 100,
    depth: 100,
    height: 100,
    createdAt: new Date("2026-01-02"),
    updatedAt: new Date("2026-04-20"),
  },
  {
    id: "3",
    name: "浴室",
    width: 100,
    depth: 100,
    height: 100,
    createdAt: new Date("2026-01-03"),
    updatedAt: new Date("2026-04-20"),
    note: "浴室は浴槽があります",
  },
  {
    id: "4",
    name: "玄関",
    width: 100,
    depth: 100,
    height: 100,
    createdAt: new Date("2026-01-04"),
    updatedAt: new Date("2026-04-20"),
  },
  {
    id: "5",
    name: "トイレ",
    width: 100,
    depth: 100,
    height: 100,
    createdAt: new Date("2026-01-05"),
    updatedAt: new Date("2026-04-20"),
  },
];

export { dummySpaces };
