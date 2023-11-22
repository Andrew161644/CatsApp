<script>
  export let power = 0;
  export let health = 0;
</script>

<div class="cardHero">
  <div class="print" />
  <div class="footer">
    <h1>{health}</h1>
    <h1>{power}</h1>
  </div>
</div>

<style>
  .cardHero {
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  .print {
    display: flex;
    flex: 1;
  }
  .footer {
    display: flex;
    justify-content: space-between;
  }
</style>
