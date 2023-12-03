import {
  MouseButtons,
  type AnimationAction,
  type RunAnimationIntent,
} from "../../types";
import { animationCahngeFuncDict } from "./actionHandlerDict";
import { animateFunction } from "./animateFunction";
import type { CardState, CardStore } from "./types";

export const onMouseDown = (
  e: MouseEvent,
  cardStore: CardStore,
  clickRightButton?: RunAnimationIntent[],
  clickLeftButton?: RunAnimationIntent[]
) => {
  e.preventDefault();
  switch (e.button) {
    case MouseButtons.Right: {
      animateFunction(cardStore, clickRightButton || []);
      break;
    }
    case MouseButtons.Left: {
      animateFunction(cardStore, clickLeftButton || []);
      break;
    }
  }
};
