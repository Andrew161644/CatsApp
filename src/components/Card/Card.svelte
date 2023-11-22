<script lang="ts">
  import { onDestroy } from "svelte";
  import type { ComponentType } from "svelte";
  import CardHero from "../CardFrontSides/CardHero.svelte";
  import { createCardStore } from "./store";
  import type { CardState } from "./types";

  export let open = true;
  const cardStore = createCardStore(open);
  let cardState: CardState = cardStore.stateDefault;
  const unsubscribe = cardStore.subscribe((state) => {
    cardState = state;
  });

  const onCardClick = () => cardStore.setCardOpen();

  let frontCardComponent: ComponentType | undefined = CardHero;
  onDestroy(unsubscribe);
</script>

<button class={`card ${cardState.open ? "" : "closed"}`} on:click={onCardClick}>
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
    position: relative;
    width: 14rem;
    height: 20rem;
    background: palegoldenrod;
    border-radius: 2em;
    transform: rotateY(0deg);
    transition: transform 0.5s;
    transform-style: preserve-3d;
    padding: 0;
    user-select: none;
    cursor: pointer;
  }

  .card.closed {
    transform: rotateY(180deg);
  }

  .front,
  .back {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
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
