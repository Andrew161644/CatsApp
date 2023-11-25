import type { Writable } from "svelte/store";
import type { Values } from "../../utils";
import type { HeroCardItem } from "../../types";
import type {
  ClickableLeft,
  ClickableRight,
} from "../../types/clickcable/types";

export type CardState = CardItem;

export type CardStore = Writable<CardState> & {
  stateDefault: CardState;
  setCardOpen: (open: boolean) => void;
  setCardSize: (size: CardSize) => void;
};

export type CardItem = HeroCardItem &
  ClickableLeft &
  ClickableRight & {
    open: boolean;
    size: CardSize;
  };

export const CardSizes = {
  Small: "small",
  Normal: "normal",
  Huge: "huge",
} as const;

export type CardSize = Values<typeof CardSizes>;
