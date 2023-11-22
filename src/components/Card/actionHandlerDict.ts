import type { CardStore } from "./store";
import type { ClickActionType } from "./types";

export const actionHandlerDict: Record<
  ClickActionType,
  (cardStore: CardStore) => void
> = {
  None: () => {},
  Close: (cardStore: CardStore) => cardStore.setCardOpen(),
  Resize: (cardStore: CardStore) => cardStore.setCardSize(),
};
