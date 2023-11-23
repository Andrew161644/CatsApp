import type { Card } from "../../types";
import type { Values } from "../../utils";

export type CardState = Card;

export const ClickActionTypes = {
  None: "None",
  Close: "Close",
  Resize: "Resize",
} as const;

export type ClickActionType = Values<typeof ClickActionTypes>;
