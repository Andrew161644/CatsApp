import type { AnimationAction } from "../../types";
import { CardSizes, type CardStore } from "./types";

export const animationCahngeFuncDict: Record<
  AnimationAction,
  (cardStore: CardStore) => void
> = {
  None: () => {},
  Open: (cardStore: CardStore) => cardStore.setCardOpen(false),
  Close: (cardStore: CardStore) => cardStore.setCardOpen(false),
  ResizeSmall: (cardStore: CardStore) => cardStore.setCardSize(CardSizes.Small),
  ResizeNormal: (cardStore: CardStore) =>
    cardStore.setCardSize(CardSizes.Normal),
  ResizeBig: (cardStore: CardStore) => cardStore.setCardSize(CardSizes.Big),
};
