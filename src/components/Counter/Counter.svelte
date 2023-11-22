<script lang="ts">
  import Button, { Label } from "@smui/button";
  import { onDestroy } from "svelte";

  import type { CounterState } from "./types";
  import { createCountStore } from "./store";

  export let min = 0;
  export let max = 1;

  const countStore = createCountStore(min, max);

  let state: CounterState = countStore.stateDefault;

  const unsubscribe = countStore.subscribe((counterState: CounterState) => {
    state = counterState;
  });

  const onAddClick = () => countStore.changeValue(1);
  const onDecClick = () => countStore.changeValue(-1);
  const onResetClick = () => countStore.reset();

  onDestroy(unsubscribe);
</script>

<div class="counter">
  <h5>The count is {state.value}</h5>
  <div class="buttons">
    <Button on:click={onAddClick} disabled={state.buttonIncDisabled}>
      <Label>+</Label>
    </Button>
    <Button on:click={onDecClick} disabled={state.buttonDecDisabled}>
      <Label>-</Label>
    </Button>
    <Button on:click={onResetClick}>
      <Label>Clear</Label>
    </Button>
  </div>
</div>

<style>
  .counter {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .buttons {
    display: flex;
  }
</style>
