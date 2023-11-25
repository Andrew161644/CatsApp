import type { Values } from "../../utils";

export type ClickableRight = {
  clickRightButton?: ClickActionType;
};

export type ClickableLeft = {
  clickLeftButton?: ClickActionType;
};

export const ClickActionTypes = {
  None: "None",
  Open: "Open",
  Close: "Close",
  ResizeSmall: "ResizeSmall",
  ResizeNormal: "ResizeNormal",
  Cenrize: "Cenrize",
} as const;

export type ClickActionType = Values<typeof ClickActionTypes>;
