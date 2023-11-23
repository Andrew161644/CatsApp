<script lang="ts">
  import Card from "../../components/Card/Card.svelte";
  import { ClickActionTypes } from "../../components/Card/types";
</script>

<div class="app">
  <Card
    open={true}
    small={true}
    clickRightButton={ClickActionTypes.Resize}
    clickLeftButton={ClickActionTypes.Close}
  />
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
