import type { Values } from "../../utils";

export interface IClickableRight {
  clickRightButton?: ClickActionType;
}

export interface IClickableLeft {
  clickLeftButton?: ClickActionType;
}

export const ClickActionTypes = {
  None: "None",
  Open: "Open",
  Close: "Close",
  ResizeSmall: "ResizeSmall",
  ResizeNormal: "ResizeNormal",
  Cenrize: "Cenrize",
} as const;

export type ClickActionType = Values<typeof ClickActionTypes>;
