import { actionHandlerDict } from "./actionHandlerDict";
import type { CardStore } from "./store";
import type { ClickActionType } from "./types";

export const onCardClick =
  (
    cardStore: CardStore,
    clickRightButton: ClickActionType,
    clickLeftButton: ClickActionType
  ) =>
  (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    switch (e.button) {
      case 2: {
        const clickFunc = actionHandlerDict[clickRightButton];
        clickFunc(cardStore);
        break;
      }
      case 0: {
        const clickFunc = actionHandlerDict[clickLeftButton];
        clickFunc(cardStore);
        break;
      }
    }
  };
