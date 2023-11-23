import type { Writable } from "svelte/store";
import type { CardItem } from "../Card/types";

export interface HandState {
  cards: CardItem[];
}

export type HandStore = Writable<HandState> & {
  addCard: (card: CardItem) => void;
};
