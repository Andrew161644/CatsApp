import { writable, type Updater } from "svelte/store";
import type { CounterState } from "./types";
import { CounterStateDefault } from "./types";

export function createCountStore(min: number, max: number) {
  const stateDefault: CounterState = {
    ...CounterStateDefault,
    value: min,
    buttonDecDisabled: true,
    buttonIncDisabled: max < min,
  };

  const { subscribe, set, update } = writable<CounterState>(stateDefault);

  const changeValue = (change: number) => {
    update((state) => {
      const value = state.value + change;
      state.value = value;
      state.buttonDecDisabled = value <= min;
      state.buttonIncDisabled = value >= max;
      return state;
    });
  };

  const reset = () => set({ ...CounterStateDefault, value: min });

  return {
    stateDefault,
    subscribe,
    changeValue,
    reset,
  };
}
