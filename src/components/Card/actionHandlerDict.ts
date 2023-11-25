import type { ClickActionType } from "../../types";
import { CardSizes, type CardStore } from "./types";

export const actionHandlerDict: Record<
  ClickActionType,
  (cardStore: CardStore) => void
> = {
  None: () => {},
  Open: (cardStore: CardStore) => cardStore.setCardOpen(false),
  Close: (cardStore: CardStore) => cardStore.setCardOpen(false),
  Cenrize: (cardStore: CardStore) => {},
  ResizeSmall: (cardStore: CardStore) => cardStore.setCardSize(CardSizes.Small),
  ResizeNormal: (cardStore: CardStore) =>
    cardStore.setCardSize(CardSizes.Normal),
};
