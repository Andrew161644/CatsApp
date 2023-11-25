import type { Writable } from "svelte/store";
import type { Values } from "../../utils";
import type {
  ClickableLeft,
  ClickableRight,
  HeroCardItem,
  Hovered,
} from "../../types";

export type CardState = CardItem;

export type CardStore = Writable<CardState> & {
  lockedAnimation: boolean;
  stateDefault: CardState;
  setCardOpen: (open: boolean) => void;
  setCardSize: (size: CardSize) => void;
};

export type CardItem = HeroCardItem &
  ClickableLeft &
  Hovered &
  ClickableRight & {
    open: boolean;
    size: CardSize;
  };

export const CardSizes = {
  None: "none",
  Small: "small",
  Normal: "normal",
  Big: "big",
} as const;

export type CardSize = Values<typeof CardSizes>;
