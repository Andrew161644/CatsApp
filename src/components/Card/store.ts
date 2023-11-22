import { writable, type Readable, type Writable } from "svelte/store";
import type { CardState } from "./types";

export type CardStore = Writable<CardState> & {
  stateDefault: CardState;
  setCardOpen: () => void;
  setCardSize: () => void;
};

export function createCardStore(open: boolean, small: boolean): CardStore {
  const stateDefault: CardState = { open: open, small: small };
  const { subscribe, update, set } = writable<CardState>(stateDefault);

  const setCardOpen = () => {
    update((state) => {
      state.open = !state.open;
      return state;
    });
  };

  const setCardSize = () => {
    update((state) => {
      state.small = !state.small;
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
