<script lang="ts">
  import { ArgumentType } from "./model/argument/ArgumentType";

  export let type: ArgumentType;
</script>

{#if type === ArgumentType.IMPLICATION}
<div>----D</div>
{:else if type === ArgumentType.ABJUNCTION}
<div>----|</div>
{/if}

<style>

</style>