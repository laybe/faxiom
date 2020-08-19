<script lang="ts">
  import type { Argument } from "./model/argument/Argument";
  import { ArgumentType } from "./model/argument/ArgumentType";
  import PropositionComponent from "./PropositionComponent.svelte";
  import ArgumentArrow from "./ArgumentArrow.svelte";

  export let showConclusions: boolean;
  export let argument: Argument;
  let { type, premise, conclusion }: Argument = argument;
</script>

<div class='root'>
  {#if showConclusions}
    <ArgumentArrow {type}/>
    <PropositionComponent proposition={conclusion}></PropositionComponent>
  {:else}
    <PropositionComponent proposition={premise}></PropositionComponent>
    <ArgumentArrow {type}/>
  {/if}
</div>

<style>
  .root {
    flex-grow: 1;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
</style>