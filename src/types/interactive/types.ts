import type { Values } from "../../utils";

export type Hovered = {
  onMouseEnter?: AnimationAction;
  onMouseLeave?: AnimationAction;
};

export type ClickableRight = {
  clickRightButtonAnimate?: AnimationAction;
};

export type ClickableLeft = {
  clickLeftButtonAnimate?: AnimationAction;
};

export const AnimationActionsTypes = {
  None: "None",
  Open: "Open",
  Close: "Close",
  ResizeSmall: "ResizeSmall",
  ResizeNormal: "ResizeNormal",
  ResizeBig: "ResizeBig",
} as const;

export type AnimationAction = Values<typeof AnimationActionsTypes>;
