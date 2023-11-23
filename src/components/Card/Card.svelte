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
  export let clickRightButton: ClickActionType = ClickActionTypes.None;
  export let clickLeftButton: ClickActionType = ClickActionTypes.None;

  const cardStore: CardStore = createCardStore(open, small);
  let state: CardState = cardStore.stateDefault;

  const unsubscribe = cardStore.subscribe((storeState) => {
    state = storeState;
  });

  const onClickRight = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    switch (e.button) {
      case 2: {
        const clickFunc = actionHandlerDict[clickRightButton];
        clickFunc(cardStore);
        break;
      }
      case 0: {
        const clickFunc = actionHandlerDict[clickLeftButton];
        clickFunc(cardStore);
        break;
      }
    }
  };

  let frontCardComponent: ComponentType | undefined = CardHero;
  onDestroy(unsubscribe);
</script>

<button
  class={`card ${state.open ? "" : "closed"} ${state.small ? "small" : ""}`}
  on:mousedown={onClickRight}
  on:contextmenu|preventDefault
  style:--durationSize="0.2s"
  style:--durationClose="0.2s"
>
  <div class={`front ${state.small ? "small" : ""}`}>
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
    transition:
      border-radius var(--durationSize),
      transform var(--durationClose),
      width var(--durationSize),
      height var(--durationSize);
    transform-style: preserve-3d;
    user-select: none;
    cursor: pointer;
  }

  .card.small {
    width: 7rem;
    height: 10rem;
    border-radius: 1rem;
  }

  .card.closed {
    transform: rotateY(180deg);
  }

  .card .front {
    padding: 2rem;
    transition: padding var(--durationSize);
  }

  .card .front.small {
    padding: 1rem;
  }

  .card .front,
  .back {
    position: absolute;
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

  .card .back {
    transform: rotateY(180deg);
  }
</style>
