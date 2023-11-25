<script lang="ts">
  import { v4 as uuidv4 } from "uuid";
  import type { CardItem } from "../../components/Card/types";
  import Card from "../../components/Card/Card.svelte";
  import { AnimationActionsTypes } from "../../types";

  let card: CardItem = {
    open: true,
    clickRightButtonAnimate: AnimationActionsTypes.Close,
    health: 10,
    power: 15,
    size: "none",
    id: uuidv4(),
  };

  setTimeout(() => {
    card.size = "big";
  }, 1000);
</script>

<div class="app">
  <Card {card} />
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
