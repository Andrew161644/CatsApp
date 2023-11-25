<script lang="ts">
  import { onDestroy } from "svelte";
  import { createHandStore } from "./store";
  import type { HandItem, HandState } from "./types";
  import Card from "../Card/Card.svelte";

  export let handItem: HandItem = { cards: [] };

  let handState: HandState = { ...handItem };
  const handStore = createHandStore(handState);
  const unsubscribe = handStore.subscribe((s) => {
    handState = s;
  });

  // Подписываем стор на изменение внешних пропсов
  $: handStore.set({ ...handItem });

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
    justify-content: space-between;
  }
</style>
