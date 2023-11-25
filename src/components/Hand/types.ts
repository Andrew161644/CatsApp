import type { Writable } from "svelte/store";
import type { CardItem } from "../Card/types";

export type HandItem = {
  cards: CardItem[];
};

export type HandState = HandItem;
export type HandStore = Writable<HandState> & {
  addCard: (card: CardItem) => void;
};
