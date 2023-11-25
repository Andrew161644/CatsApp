<script lang="ts">
  import { onDestroy } from "svelte";
  import { createHandStore } from "./store";
  import type { HandState } from "./types";
  import type { CardItem } from "../Card/types";
  import Card from "../Card/Card.svelte";

  export let cards: CardItem[] = [];
  let handState: HandState = { cards: cards };
  const handStore = createHandStore(handState);
  const unsubscribe = handStore.subscribe((s) => {
    handState = s;
  });

  onDestroy(unsubscribe);
</script>

<div class="hand">
  {#each handState.cards as card}
    <div class="cardWrapper">
      <Card {card} />
    </div>
  {/each}
</div>

<style>
  .hand {
    display: flex;
    flex: 1;
  }
</style>
