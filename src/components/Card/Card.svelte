<script lang="ts">
  import { onDestroy } from "svelte";
  import CardHero from "../CardFrontSides/CardHero.svelte";
  import { createCardStore } from "./store";
  import type { CardState, CardStore, CardItem } from "./types";
  import { onMouseDown } from "./onMouseDown";
  import { animationCahngeFuncDict } from "./actionHandlerDict";
  import { AnimationActionsTypes } from "../../types";

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

  const onClickAnimation = onMouseDown(
    cardStore,
    state.clickRightButtonAnimate,
    state.clickLeftButtonAnimate
  );

  const onClick = (e: MouseEvent) => {
    onClickAnimation(e);
  };

  const onMouseEnter = () => {
    const enterFunc =
      animationCahngeFuncDict[state.onMouseEnter || AnimationActionsTypes.None];
    enterFunc(cardStore);
  };

  const onMouseLeave = () => {
    const leaveFunc =
      animationCahngeFuncDict[state.onMouseLeave || AnimationActionsTypes.None];
    leaveFunc(cardStore);
  };

  onDestroy(unsubscribe);
</script>

<button
  class={`card ${state.open ? "" : "closed"} ${state.size}`}
  on:mousedown={onClick}
  on:contextmenu|preventDefault
  on:mouseenter={onMouseEnter}
  on:mouseleave={onMouseLeave}
  style:--durationSize={sizeAnimationSpeed}
  style:--durationClose={closeAnimationSpeed}
>
  <div class={`front ${state.size}`}>
    <CardHero health={state.health} power={state.power} />
  </div>
  <div class="back" />
</button>

<style>
  :root {
    --size-coeff-normal: 1.5;
    --size-coeff-big: 2;

    --height-small: 10rem;
    --height-normal: calc(var(--height-small) * var(--size-coeff-normal));
    --height-big: calc(var(--height-small) * var(--size-coeff-big));

    --width-small: 7rem;
    --width-normal: calc(var(--width-small) * var(--size-coeff-normal));
    --width-big: calc(var(--width-small) * var(--size-coeff-big));

    --border-radius-small: 1rem;
    --border-radius-normal: calc(
      var(--border-radius-small) * var(--size-coeff-normal)
    );
    --border-radius-big: calc(
      var(--border-radius-small) * var(--size-coeff-big)
    );

    --padding-small: 1rem;
    --padding-normal: calc(var(--padding-small) * var(--size-coeff-normal));
    --padding-big: calc(var(--padding-small) * var(--size-coeff-big));
  }

  .card {
    background: palegoldenrod;
    transform: rotateY(0deg);
    transition:
      border-radius var(--durationSize),
      transform var(--durationClose),
      width var(--durationSize),
      height var(--durationSize);
    transform-style: preserve-3d;
    user-select: none;
    cursor: pointer;
  }

  .card.big {
    width: var(--width-big);
    height: var(--height-big);
    border-radius: var(--border-radius-big);
  }

  .card.normal {
    width: var(--width-normal);
    height: var(--height-normal);
    border-radius: var(--border-radius-normal);
  }

  .card.small {
    width: var(--width-small);
    height: var(--height-small);
    border-radius: var(--border-radius-small);
  }

  .card.none {
    width: 0;
    height: 0;
    border-radius: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }

  .card.closed {
    transform: rotateY(180deg);
  }

  .card .front {
    padding: 2rem;
    transition: padding var(--durationSize);
  }

  .card .front.big {
    padding: var(--padding-big);
  }

  .card .front.normal {
    padding: var(--padding-normal);
  }

  .card .front.small {
    padding: var(--padding-small);
  }

  .card .front.none {
    height: 0;
    width: 0;
    display: none;
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
