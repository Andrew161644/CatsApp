import { MouseButtons } from "../../types";
import type { ClickActionType } from "../../types/clickcable";
import { actionHandlerDict } from "./actionHandlerDict";
import type { CardStore } from "./types";

export const onCardClick =
  (
    cardStore: CardStore,
    clickRightButton?: ClickActionType,
    clickLeftButton?: ClickActionType
  ) =>
  (e: MouseEvent) => {
    e.preventDefault();
    const empyFunc = actionHandlerDict.None;

    switch (e.button) {
      case MouseButtons.Right: {
        const clickFunc = clickRightButton
          ? actionHandlerDict[clickRightButton]
          : empyFunc;

        clickFunc(cardStore);
        break;
      }
      case MouseButtons.Left: {
        const clickFunc = clickLeftButton
          ? actionHandlerDict[clickLeftButton]
          : empyFunc;

        clickFunc(cardStore);
        break;
      }
    }
  };
