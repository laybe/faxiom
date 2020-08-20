<script lang="ts">
  import type { ConnectedProposition } from "./model/proposition/ConnectedProposition";
  import type { PropositionUnion } from "./model/proposition/PropositionUnion";
  import PropositionComponent from "./PropositionComponent.svelte";
  import Connector from "./Connector.svelte";
  
  export let proposition: ConnectedProposition;
  let propositionsList: PropositionUnion[];
  $: propositionsList = proposition.connectedPropositions;
</script>

<div>
  {#each propositionsList as propositionItem, i (propositionItem.id)}
    {#if i !== 0}
      <Connector type={proposition.connectionType}/>
    {/if}
    <PropositionComponent proposition={propositionItem}/>
  {/each}
</div>

<style lang="scss">
  div {
    border: 1px solid grey;
    border-radius: 15px;
    padding: 15px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    > :global(div:nth-child(even)) {
      margin: 0 10px 0 10px;
    }
  }

  @media only screen and (min-width: 600px) {
    div {
      flex-direction: column;

      > :global(div:nth-child(even)) {
        margin: 10px 0 10px 0;
      }
    }
  }
</style>