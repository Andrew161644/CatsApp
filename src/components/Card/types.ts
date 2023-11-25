import type { Writable } from "svelte/store";
import type { Values } from "../../utils";
import type { HeroCardItem } from "../../types";
import type {
  IClickableLeft,
  IClickableRight,
} from "../../types/clickcable/types";

export type CardState = CardItem;

export type CardStore = Writable<CardState> & {
  stateDefault: CardState;
  setCardOpen: (open: boolean) => void;
  setCardSize: (size: CardSize) => void;
};

export interface CardItem
  extends HeroCardItem,
    IClickableLeft,
    IClickableRight {
  open: boolean;
  size: CardSize;
}

export const CardSizes = {
  Small: "small",
  Normal: "normal",
  Huge: "huge",
} as const;

export type CardSize = Values<typeof CardSizes>;
