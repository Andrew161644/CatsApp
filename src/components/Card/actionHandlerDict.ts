import { CardSizes, type CardStore, type ClickActionType } from "./types";

export const actionHandlerDict: Record<
  ClickActionType,
  (cardStore: CardStore) => void
> = {
  None: () => {},
  Open: (cardStore: CardStore) => cardStore.setCardOpen(false),
  Close: (cardStore: CardStore) => cardStore.setCardOpen(false),
  ShowInfo: (cardStore: CardStore) => {},
  ResizeSmall: (cardStore: CardStore) => cardStore.setCardSize(CardSizes.Small),
  ResizeNormal: (cardStore: CardStore) =>
    cardStore.setCardSize(CardSizes.Normal),
};
