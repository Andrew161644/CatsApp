<script lang="ts">
  import Counter from "../../components/Counter/Counter.svelte";
  import Card from "../../components/Card/Card.svelte";
</script>

<div class="app">
  <Card small={true} clickActionType={"Close"} />
  <Card open={false} clickActionType={"Resize"} />
  <Counter max={10} min={1} />
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
