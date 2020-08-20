<script lang="ts">
  import ArgumentsList from "./ArgumentsList.svelte";
  import Hideable from "./Hideable.svelte";
  import { isSingleProposition } from "./model/proposition/propositionTypeGuards";
  import type { PropositionUnion } from "./model/proposition/PropositionUnion";
  import PropositionComponent from "./PropositionComponent.svelte";

  export let proposition: PropositionUnion;
</script>

{#if proposition}
  <div class="container">
    <Hideable buttonOnTheRight>
      <div>
        {#if isSingleProposition(proposition)}
          <ArgumentsList argumentsList={proposition.premisesArguments}></ArgumentsList>
        {/if}
      </div>
    </Hideable>
    <div class="mainProposition">
      <PropositionComponent {proposition}/>
    </div>
    <Hideable>
      <div>
        <ArgumentsList argumentsList={proposition.conclusionsArguments} showConclusions></ArgumentsList>
      </div>
    </Hideable>
  </div>
{/if}

<style lang="scss">
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .container > div {
    flex-grow: 1;
    
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  @media only screen and (min-width: 600px) {
    .container {
      flex-direction: row;
    }
  }
</style>