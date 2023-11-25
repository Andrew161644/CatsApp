<script lang="ts">
  import type { CardItem } from "../../components/Card/types";
  import Hand from "../../components/Hand/+Hand.svelte";
  import { v4 as uuidv4 } from "uuid";
  import type { HandItem } from "../../components/Hand/types";
  import type { PlayerHandItem } from "../../types/playerHand";
  import PlayersHand from "../../modules/MyHand/PlayersHand.svelte";
  import type { HandCard } from "../../types/playerHand/types";

  const cards: HandCard[] = [
    {
      open: true,
      health: 4,
      power: 5,
      id: uuidv4(),
    },
    {
      open: true,
      health: 4,
      power: 5,
      id: uuidv4(),
    },
    {
      open: true,
      health: 1,
      power: 2,
      id: uuidv4(),
    },
    {
      open: true,
      health: 4,
      power: 8,
      id: uuidv4(),
    },
    {
      open: true,
      health: 7,
      power: 6,
      id: uuidv4(),
    },
  ];

  const playersHand: PlayerHandItem = { cards: cards, type: "MyHand" };
</script>

<div class="app"><PlayersHand {playersHand} /></div>

<style>
  .app {
    height: 100vh;
    width: 100%;
  }
</style>
