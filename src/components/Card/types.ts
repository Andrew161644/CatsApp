import type { Writable } from "svelte/store";
import type { Values } from "../../utils";

export type CardState = CardItem;

export const ClickActionTypes = {
  None: "None",
  Open: "Open",
  Close: "Close",
  ResizeSmall: "ResizeSmall",
  ResizeNormal: "ResizeNormal",
  ShowInfo: "ShowInfo",
} as const;

export type ClickActionType = Values<typeof ClickActionTypes>;

export type CardStore = Writable<CardState> & {
  stateDefault: CardState;
  setCardOpen: (open: boolean) => void;
  setCardSize: (size: CardSize) => void;
};

export interface HeroCardItem {
  id: string;
  power: number;
  health: number;
}

export interface CardItem extends HeroCardItem {
  open: boolean;
  size: CardSize;
  clickRightButton: ClickActionType;
  clickLeftButton: ClickActionType;
}

export const CardSizes = {
  Small: "small",
  Normal: "normal",
  Huge: "huge",
} as const;

export type CardSize = Values<typeof CardSizes>;
