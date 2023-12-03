import type { Values } from "../../utils";

export type Hovered = {
  onMouseEnter?: RunAnimationIntent[];
  onMouseLeave?: RunAnimationIntent[];
};

export type ClickableRight = {
  clickRightButtonAnimate?: RunAnimationIntent[];
};

export type ClickableLeft = {
  clickLeftButtonAnimate?: RunAnimationIntent[];
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

export type RunAnimationIntent = {
  animationType: AnimationAction;
  delay: number;
};
