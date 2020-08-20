<script lang="ts">
  import ConnectedPropositionComponent from "./ConnectedPropositionComponent.svelte";
  import type { ConnectedProposition } from "./model/proposition/ConnectedProposition";
  import { isConnectedProposition,isSingleProposition } from "./model/proposition/propositionTypeGuards";
  import type { PropositionUnion } from "./model/proposition/PropositionUnion";
  import type { SingleProposition } from "./model/proposition/SingleProposition";
  import SinglePropositionComponent from "./SinglePropositionComponent.svelte";

  export let proposition: PropositionUnion;
  let singleProposition: SingleProposition;
  let connectedProposition: ConnectedProposition;
  
  $: {
    if (isSingleProposition(proposition)) {
      singleProposition = proposition;
    } else if (isConnectedProposition(proposition)) {
      connectedProposition = proposition;
    }
  }
</script>

{#if singleProposition}
  <SinglePropositionComponent proposition={singleProposition}/>
{:else if connectedProposition}
  <ConnectedPropositionComponent proposition={connectedProposition} let:proposition>
    <svelte:self {proposition}/>
  </ConnectedPropositionComponent>
{/if}
