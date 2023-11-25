<script lang="ts">
  import { CardSizes, type CardItem } from "../../components/Card/types";
  import Hand from "../../components/Hand/+Hand.svelte";
  import type { HandItem } from "../../components/Hand/types";
  import type { PlayerHandItem } from "../../types/playerHand";
  export let playersHand: PlayerHandItem;

  const cards: CardItem[] = playersHand.cards.map((phc) => {
    const card: CardItem = {
      ...phc,
      size: CardSizes.Small,
    };
    return card;
  });
  const handItem: HandItem = {
    cards: cards,
  };
</script>

<div class="playersHandWrapper">
  <div class="playersHand">
    <Hand {handItem} />
  </div>
</div>

<style>
  .playersHandWrapper {
    position: absolute;
    width: 100%;
    bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .playersHand {
    display: flex;
    flex: 1;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 1rem;
  }
</style>
