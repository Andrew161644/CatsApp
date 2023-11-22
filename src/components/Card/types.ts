import type { Values } from "../../utils";

export interface CardState {
  open: boolean;
  small: boolean;
}

export const ClickActionTypes = {
  None: "None",
  Close: "Close",
  Resize: "Resize",
} as const;

export type ClickActionType = Values<typeof ClickActionTypes>;
