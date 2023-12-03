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
      onMouseEnter: [{ animationType: "ResizeNormal", delay: 0 }],
      onMouseLeave: [{ animationType: "ResizeSmall", delay: 0 }],
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
    align-items: end;
    justify-content: center;
  }
  .playersHand {
    display: flex;
    flex: 1;
    padding-left: 20rem;
    padding-right: 20rem;
    padding-bottom: 1rem;
  }
</style>
