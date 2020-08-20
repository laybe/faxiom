<script lang="ts">
  import { onMount } from 'svelte';
  import * as propositionJson from './mock/propositionExample1.json';
  import type { PropositionUnion } from './model/proposition/PropositionUnion';
  import type { SingleProposition } from './model/proposition/SingleProposition';
  import PropositionWithArguments from './PropositionWithArguments.svelte';
  import Layout from './style/_layout.svelte';

  let propositionData: any;
  let proposition: PropositionUnion;

  $: {
    if (propositionData) {
      proposition = propositionData as SingleProposition;
    }
  }
  
  onMount(/* async */ () => {
    propositionData = propositionJson;
    // const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
    // photos = await res.json();
  });
</script>

<Layout/>

<main>
  <PropositionWithArguments {proposition}/>
  {#if proposition && proposition.partOfConnections}
    {#each proposition.partOfConnections as connection (connection.id)}
      <PropositionWithArguments proposition={connection}/>
    {/each}
  {/if}
</main>
