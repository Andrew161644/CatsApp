<script>
  let flipped = false;
  const onCardClick = () => (flipped = !flipped);
</script>

<button class={`card ${flipped ? "flipped" : ""}`} on:click={onCardClick}>
  <div class="front" />
  <div class="back" />
</button>

<style>
  .card {
    position: relative;
    width: 14rem;
    height: 20rem;
    background: palegoldenrod;
    border-radius: 2em;
    transform: rotateY(180deg);
    transition: transform 0.5s;
    transform-style: preserve-3d;
    padding: 0;
    user-select: none;
    cursor: pointer;
  }

  .card.flipped {
    transform: rotateY(0);
  }

  .front,
  .back {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    backface-visibility: hidden;
    border-radius: 2em;
    box-sizing: border-box;
    padding: 2em;
  }

  .front {
    background-size: 8em 8em, 8em 8em;
  }

  .back {
    transform: rotateY(180deg);
  }
</style>
