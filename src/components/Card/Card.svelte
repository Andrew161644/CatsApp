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

  let cardState: CardState = cardStore.stateDefault;
  const unsubscribe = cardStore.subscribe((state) => {
    cardState = state;
  });

  const clickFunction = actionHandlerDict[clickActionType];
  const onClick = () => clickFunction(cardStore);

  let frontCardComponent: ComponentType | undefined = CardHero;
  onDestroy(unsubscribe);
</script>

<button
  class={`card ${cardState.open ? "" : "closed"} ${
    cardState.small ? "small" : ""
  }`}
  on:click={onClick}
>
  <div class="front">
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
    border-radius: 2em;
    transform: rotateY(0deg);
    transition: transform 0.2s;
    transform-style: preserve-3d;
    padding: 0;
    user-select: none;
    cursor: pointer;
  }

  .card.closed {
    transform: rotateY(180deg);
  }

  .card.small {
    transform: scale(0.6);
  }

  .card.closed.small {
    transform: rotateY(180deg) scale(0.6);
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
    border-radius: 2em;
    box-sizing: border-box;
    padding: 2em;
  }

  .front {
    background-size: 8em 8em, 8em 8em;
  }

  .back {
    transform: rotateY(180deg);
  }
</style>
