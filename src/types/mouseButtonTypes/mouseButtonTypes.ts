import type { Values } from "../../utils";

export const MouseButtons = {
  Right: 2,
  Left: 0,
} as const;

export type MouseButton = Values<typeof MouseButtons>;
