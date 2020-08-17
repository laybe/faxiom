<script lang="ts">
  import type { PropositionUnion } from "./model/proposition/PropositionUnion";
  import { PropositionType } from "./model/proposition/PropositionType";
  
  export let proposition: PropositionUnion;
  let text: string;
  $: {
    if (proposition && proposition.type === PropositionType.SINGLE)
      text = proposition.text;
  }
</script>

<div class="text">{text}</div>

<style>
  .text {
    border: 1px solid black;
    width: 200px;
  }
</style>