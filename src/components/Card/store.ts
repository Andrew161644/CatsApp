import { writable } from "svelte/store";
import type { CardState } from "./types";

export function createCardStore(open: boolean) {
  const stateDefault = { open: open };
  const { subscribe, update } = writable<CardState>(stateDefault);

  const setCardOpen = () => {
    update((state) => {
      state.open = !state.open;
      return state;
    });
  };

  return {
    stateDefault,
    subscribe,
    setCardOpen,
  };
}
