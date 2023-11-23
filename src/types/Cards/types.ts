import type { Values } from "../../utils";

export interface Card {
  open: boolean;
  small: boolean;
}

export interface HeroCardItem {
  power: number;
  health: number;
}

export const CardSizes = {
  Small: "small",
  Normal: "normal",
  Huge: "huge",
} as const;

export type CardSize = Values<typeof CardSizes>;
