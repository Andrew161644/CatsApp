<script lang="ts">
  import { onDestroy } from "svelte";
  import CardHero from "../CardFrontSides/CardHero.svelte";
  import { createCardStore } from "./store";
  import type { CardState, CardStore, CardItem } from "./types";
  import { onCardClick } from "./onCardClick";

  export let card: CardItem;
  export let sizeAnimationSpeed = "0.2s";
  export let closeAnimationSpeed = "0.2s";

  const cardStore: CardStore = createCardStore(card);

  // Подписываем стор на изменение внешних пропсов
  $: cardStore.set(card);

  let state: CardState = cardStore.stateDefault;

  // Подписываем состояние на изменение состояния стора
  const unsubscribe = cardStore.subscribe((storeState) => {
    state = storeState;
  });

  const onClick = onCardClick(
    cardStore,
    state.clickRightButton,
    state.clickLeftButton
  );

  onDestroy(unsubscribe);
</script>

<button
  class={`card ${state.open ? "" : "closed"} ${state.size}`}
  on:mousedown={onClick}
  on:contextmenu|preventDefault
  style:--durationSize={sizeAnimationSpeed}
  style:--durationClose={closeAnimationSpeed}
>
  <div class={`front ${state.size}`}>
    <CardHero health={state.health} power={state.power} />
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
