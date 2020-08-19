<script lang="ts">
  import type { ConnectedProposition } from "./model/proposition/ConnectedProposition";
  import type { PropositionUnion } from "./model/proposition/PropositionUnion";
  import PropositionComponent from "./PropositionComponent.svelte";
  
  export let proposition: ConnectedProposition;
  let propositionsList: PropositionUnion[];
  $: propositionsList = proposition.connectedPropositions;
</script>

<div>
  {#each propositionsList as propositionItem (propositionItem.id)}
    <PropositionComponent proposition={propositionItem}/>
  {/each}
  <p> CONNECTED TO </p>
</div>

<style lang="scss">
  div {
    border: 1px solid grey;
    border-radius: 15px;
    width: 200px;
    padding: 15px;
    // text-align: justify;
    // text-justify: inter-word;
  }
</style>