<script lang="ts">
  import { onDestroy } from "svelte";
  import type { ComponentType } from "svelte";
  import CardHero from "../CardFrontSides/CardHero.svelte";
  import { createCardStore, type CardStore } from "./store";
  import {
    ClickActionTypes,
    type ClickActionType,
    type CardState,
  } from "./types";
  import { actionHandlerDict } from "./actionHandlerDict";

  export let open = true;
  export let small = false;
  export let clickActionType: ClickActionType = ClickActionTypes.None;

  const cardStore: CardStore = createCardStore(open, small);
  let state: CardState = cardStore.stateDefault;

  const unsubscribe = cardStore.subscribe((storeState) => {
    state = storeState;
  });

  const clickFunction = actionHandlerDict[clickActionType];
  const onClick = () => clickFunction(cardStore);

  let frontCardComponent: ComponentType | undefined = CardHero;
  onDestroy(unsubscribe);
</script>

<button
  class={`card ${state.open ? "" : "closed"} ${state.small ? "cardSmall" : ""}`}
  on:click={onClick}
  style:--durationSize="0.2s"
  style:--durationClose="0.2s"
>
  <div class={`front ${state.small ? "frontSmall" : ""}`}>
    {#if frontCardComponent != undefined}<svelte:component
        this={frontCardComponent}
        health={10}
        power={100}
      />{/if}
  </div>
  <div class="back" />
</button>

<style>
  .card {
    width: 14rem;
    height: 20rem;
    background: palegoldenrod;
    transform: rotateY(0deg);
    border-radius: 2rem;
    padding: 2rem;
    transition:
      padding var(--durationSize),
      border-radius var(--durationSize),
      transform var(--durationClose),
      width var(--durationSize),
      height var(--durationSize);
    transform-style: preserve-3d;
    user-select: none;
    cursor: pointer;
  }

  .card.closed {
    transform: rotateY(180deg);
  }

  .cardSmall {
    width: 7rem;
    height: 10rem;
    border-radius: 1rem;
    padding: 1rem;
  }

  .front,
  .back {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    backface-visibility: hidden;
    box-sizing: border-box;
  }

  .back {
    transform: rotateY(180deg);
  }
</style>
