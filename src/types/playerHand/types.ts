import type { Values } from "../../utils";
import type { HeroCardItem } from "../herosItems";

export const PlayerHandTypes = {
  MyHand: "MyHand",
  Opponent: "Opponent",
} as const;

export type PlayerHandType = Values<typeof PlayerHandTypes>;

export type PlayerHandItem = {
  cards: HandCard[];
  type: PlayerHandType;
};

export type HandCard = HeroCardItem & {
  open: boolean;
};
