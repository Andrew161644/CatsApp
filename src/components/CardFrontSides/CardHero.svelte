<script>
  export let power = 0;
  export let health = 0;
</script>

<div class="cardHero">
  <div class="print" />
  <div class="footer">
    <div>{health}</div>
    <div>{power}</div>
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
