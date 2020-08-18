<script lang="ts">
  import type { ArgumentType } from "./model/argument/ArgumentType";

  export let type: ArgumentType;
</script>

<div class={type + ' root'}>
  <div class='body'></div>
  <div class='head'></div>
</div>

<style>
  .root {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .body {
    height: 20px;
    width: 100px;
  }

  .implication > .body {
    background: lightgreen;
  }

  .implication > .head {
    height: 0px;
    width: 0px;
    border: 20px solid transparent;
    border-left: 20px solid lightgreen;
  }

  .abjunction > .body {
    background: lightcoral;
  }

  .abjunction > .head {
    background: lightcoral;
    height: 40px;
    width: 10px;
  }
</style>