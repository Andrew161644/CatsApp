import { MouseButtons, type AnimationAction } from "../../types";
import { animationCahngeFuncDict } from "./actionHandlerDict";
import type { CardStore } from "./types";

export const onMouseDown =
  (
    cardStore: CardStore,
    clickRightButton?: AnimationAction,
    clickLeftButton?: AnimationAction
  ) =>
  (e: MouseEvent) => {
    e.preventDefault();
    const empyFunc = animationCahngeFuncDict.None;

    switch (e.button) {
      case MouseButtons.Right: {
        const clickFunc = clickRightButton
          ? animationCahngeFuncDict[clickRightButton]
          : empyFunc;

        clickFunc(cardStore);
        break;
      }
      case MouseButtons.Left: {
        const clickFunc = clickLeftButton
          ? animationCahngeFuncDict[clickLeftButton]
          : empyFunc;

        clickFunc(cardStore);
        break;
      }
    }
  };
