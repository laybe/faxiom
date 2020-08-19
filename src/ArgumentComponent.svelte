<script lang="ts">
  import type { Argument } from "./model/argument/Argument";
  import { ArgumentType } from "./model/argument/ArgumentType";
  import PropositionComponent from "./PropositionComponent.svelte";
  import ArgumentArrow from "./ArgumentArrow.svelte";

  export let showConclusions: boolean;
  export let argument: Argument;
  let { type, premise, conclusion }: Argument = argument;
</script>

<div class='container'>
  {#if showConclusions}
    <div class='item arrow'><ArgumentArrow {type}/></div>
    <div class='item proposition'><PropositionComponent proposition={conclusion}></PropositionComponent></div>
  {:else}
    <div class='item proposition'><PropositionComponent proposition={premise}></PropositionComponent></div>
    <div class='item arrow'><ArgumentArrow {type}/></div>
  {/if}
</div>

<style  lang="scss">
  .container {
    flex-grow: 1;

    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 50% 50%;
    align-items: center;
  }

  .proposition {
    justify-self: center;
  }

  @media only screen and (min-width: 600px) {
    .container {
      grid-template-columns: 50% 50%;
      grid-template-rows: auto;
    }
    .arrow {
      padding: 0;
      padding-left: 20%;
    }
  }
</style>