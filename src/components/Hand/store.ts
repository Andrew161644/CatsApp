import { writable } from "svelte/store";
import type { HandState, HandStore } from "./types";
import type { CardItem } from "../Card/types";

export function createHandStore(stateDefault: HandState): HandStore {
  const { set, subscribe, update } = writable<HandState>(stateDefault);

  const addCard = (card: CardItem) => {
    update((state: HandState) => {
      state.cards = [...state.cards, card];
      return state;
    });
  };

  return {
    addCard,
    set,
    subscribe,
    update,
  };
}
