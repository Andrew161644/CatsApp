export type CounterState = {
  text: string;
  value: number;
  buttonIncDisabled: boolean;
  buttonDecDisabled: boolean;
};

export const CounterStateDefault: CounterState = {
  text: "Counter value is",
  value: 0,
  buttonIncDisabled: false,
  buttonDecDisabled: false,
};
