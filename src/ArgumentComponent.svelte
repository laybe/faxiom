<script lang="ts">
  import type { Argument } from "./model/argument/Argument";
  import { ArgumentType } from "./model/argument/ArgumentType";
  import PropositionComponent from "./PropositionComponent.svelte";
  import ArgumentArrow from "./ArgumentArrow.svelte";

  export let showConclusions: boolean;
  export let argument: Argument;
  let { type, premise, conclusion }: Argument = argument;
</script>

<div class='container' class:conclusions={showConclusions}>
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
    grid-template-rows: auto 120px;
    // align-items: center;

    &.conclusions {
      grid-template-rows: 120px auto;
    }
  }

  .item {
    justify-self: stretch;
    align-self: stretch;
  }
  // .proposition {
  //   // justify-self: center;
  // }
  // .arrow {

  // }

  @media only screen and (min-width: 600px) {
    .container {
      grid-template-columns: auto 120px;
      grid-template-rows: auto;
      &.conclusions {
        grid-template-columns: 120px auto;
      }
    }
    // .arrow {
    //   // padding: 0;
    //   // padding-left: 20%;
    // }
  }
</style>