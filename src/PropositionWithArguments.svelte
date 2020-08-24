<script lang="ts">
  import ArgumentsList from "./ArgumentsList.svelte";
  import Hideable from "./Hideable.svelte";
  import { isSingleProposition } from "./model/proposition/propositionTypeGuards";
  import type { PropositionUnion } from "./model/proposition/PropositionUnion";
  import PropositionComponent from "./PropositionComponent.svelte";

  export let proposition: PropositionUnion;
  export let hide: boolean = false;
  export let hidePremises: boolean = false;
  export let hideConclusions: boolean = false;
</script>

{#if proposition && !hide}
  <Hideable buttonOnTheRight bind:hide={hidePremises}>
    <div>
      {#if isSingleProposition(proposition)}
        <ArgumentsList argumentsList={proposition.premisesArguments}></ArgumentsList>
      {/if}
    </div>
  </Hideable>
  <div class="mainProposition">
    <PropositionComponent {proposition}/>
  </div>
  <Hideable bind:hide={hideConclusions}>
    <div>
      <ArgumentsList argumentsList={proposition.conclusionsArguments} showConclusions></ArgumentsList>
    </div>
  </Hideable>
{/if}

<style lang="scss">
  .mainProposition {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>