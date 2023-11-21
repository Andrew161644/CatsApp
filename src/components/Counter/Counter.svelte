<script lang="ts">
  import Button, { Label } from "@smui/button";
  import { onDestroy } from "svelte";

  import type { CounterState } from "./types";
  import { createCountStore } from "./store";

  export let min = 0;
  export let max = 0;

  const countStore = createCountStore(min, max);

  let countValue: number;
  let btnIncDisabled = false;
  let btnDecDisabled = false;

  const unsubscribe = countStore.subscribe((counterState: CounterState) => {
    countValue = counterState.value;
    btnDecDisabled = counterState.buttonDecDisabled;
    btnIncDisabled = counterState.buttonIncDisabled;
  });

  const onAddClick = () => countStore.changeValue(1);
  const onDecClick = () => countStore.changeValue(-1);
  const onResetClick = () => countStore.reset();

  onDestroy(unsubscribe);
</script>

<div class="counter">
  <h5>The count is {countValue}</h5>
  <div>
    <Button on:click={onAddClick} disabled={btnIncDisabled}>
      <Label>+</Label>
    </Button>
    <Button on:click={onDecClick} disabled={btnDecDisabled}>
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
    max-width: 220px;
  }
</style>
