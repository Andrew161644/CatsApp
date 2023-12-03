import type { AnimationAction } from "../../types";
import { CardSizes, type CardStore } from "./types";

export const animationCahngeFuncDict: Record<
  AnimationAction,
  (cardStore: CardStore) => void
> = {
  None: () => {},
  Open: (cardStore: CardStore) => cardStore.setCardOpen(),
  Close: (cardStore: CardStore) => cardStore.setCardOpen(),
  ResizeSmall: (cardStore: CardStore) => cardStore.setCardSize(CardSizes.Small),
  ResizeNormal: (cardStore: CardStore) =>
    cardStore.setCardSize(CardSizes.Normal),
  ResizeBig: (cardStore: CardStore) => cardStore.setCardSize(CardSizes.Big),
};
