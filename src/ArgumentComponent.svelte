<script lang="ts">
  import type { Argument } from "./model/argument/Argument";
  import { ArgumentType } from "./model/argument/ArgumentType";
  import PropositionComponent from "./PropositionComponent.svelte";

  export let showConclusions: boolean;
  export let argument: Argument;
  let { type, premise, conclusion }: Argument = argument;
</script>

<div class='root'>
  {#if showConclusions}
    {#if type === ArgumentType.IMPLICATION}
      <div>----D</div>
    {:else if type === ArgumentType.ABJUNCTION}
      <div>----|</div>
    {/if}
    <PropositionComponent proposition={conclusion}></PropositionComponent>
  {:else}
    <PropositionComponent proposition={premise}></PropositionComponent>
    {#if type === ArgumentType.IMPLICATION}
      <div>----D</div>
    {:else if type === ArgumentType.ABJUNCTION}
      <div>----|</div>
    {/if}
  {/if}
</div>

<style>
  div.root {
    flex-grow: 1;

    display: flex;
    flex-direction: row;
  }
</style>