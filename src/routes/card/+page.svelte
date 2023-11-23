<script lang="ts">
  import Card from "../../components/Card/Card.svelte";
  import { ClickActionTypes, type CardItem } from "../../components/Card/types";
  import { v4 as uuidv4 } from "uuid";

  let card: CardItem = {
    open: false,
    clickRightButton: ClickActionTypes.ResizeNormal,
    clickLeftButton: ClickActionTypes.ResizeSmall,
    health: 10,
    power: 15,
    size: "small",
    id: uuidv4(),
  };
</script>

<div class="app">
  <Card {card} />
  <button
    on:click={() => {
      card.open = !card.open;
    }}
  >
    Open
  </button>
</div>

<style>
  .app {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
