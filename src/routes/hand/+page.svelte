<script lang="ts">
  import type { CardItem } from "../../components/Card/types";
  import Hand from "../../components/Hand/+Hand.svelte";
  import { v4 as uuidv4 } from "uuid";

  const cards: CardItem[] = [
    {
      open: true,
      health: 4,
      power: 5,
      size: "small",
      id: uuidv4(),
    },
    {
      open: true,
      health: 1,
      power: 2,
      size: "small",
      id: uuidv4(),
    },
    {
      open: true,
      health: 4,
      power: 8,
      size: "small",
      id: uuidv4(),
    },
    {
      open: true,
      health: 7,
      power: 6,
      size: "small",
      id: uuidv4(),
    },
  ];
</script>

<div><Hand {cards} /></div>
