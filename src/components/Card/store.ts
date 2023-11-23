import { writable, type Readable, type Writable } from "svelte/store";
import type { CardItem, CardSize, CardState, CardStore } from "./types";

export function createCardStore(card: CardItem): CardStore {
  const stateDefault: CardState = card;
  const { subscribe, update, set } = writable<CardState>(stateDefault);

  const setCardOpen = () => {
    update((state) => {
      state.open = !state.open;
      return state;
    });
  };

  const setCardSize = (size: CardSize) => {
    update((state) => {
      state.size = size;
      return state;
    });
  };

  return {
    set,
    update,
    stateDefault,
    subscribe,
    setCardOpen,
    setCardSize,
  };
}
