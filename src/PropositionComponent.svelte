<script lang="ts">
  import type { PropositionUnion } from "./model/proposition/PropositionUnion";
  import { PropositionType } from "./model/proposition/PropositionType";
  import type { SingleProposition } from "./model/proposition/SingleProposition";
  import type { ConnectedProposition } from "./model/proposition/ConnectedProposition";
  import SinglePropositionComponent from "./SinglePropositionComponent.svelte";
  import ConnectedPropositionComponent from "./ConnectedPropositionComponent.svelte";
  
  export let proposition: PropositionUnion;
  let singleProposition: SingleProposition;
  let connectedProposition: ConnectedProposition;
  
  function isSingle(proposition: PropositionUnion): proposition is SingleProposition {
    return proposition && proposition.type === PropositionType.SINGLE;
  }
  
  function isConnected(proposition: PropositionUnion): proposition is ConnectedProposition {
    return proposition && proposition.type === PropositionType.CONNECTION;
  }
  
  $: {
    if (isSingle(proposition)) {
      singleProposition = proposition;
    } else if (isConnected(proposition)) {
      connectedProposition = proposition;
    }
  }
</script>

{#if singleProposition}
  <SinglePropositionComponent proposition={singleProposition}/>
{:else if connectedProposition}
  <ConnectedPropositionComponent proposition={connectedProposition}/>
{/if}
