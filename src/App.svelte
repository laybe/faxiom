<script lang="ts">
  import { onMount } from 'svelte';
  import AppLayout from './AppLayout.svelte';
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

  let hidePremises = false;
  let hideConclusions = false;

  function onResize(event) {
    hidePremises = false;
    hideConclusions = false;
  }

</script>

<Layout/>

{#if proposition}
  <AppLayout on:resize={onResize} {hidePremises} {hideConclusions} let:showOnly propositionPartOfConnections={proposition.partOfConnections && proposition.partOfConnections.length}>
    <PropositionWithArguments {proposition} bind:hidePremises bind:hideConclusions hide={showOnly !== undefined && showOnly !== 0}/>
    {#each proposition.partOfConnections as connection, i (connection.id)}
      <PropositionWithArguments proposition={connection} bind:hidePremises bind:hideConclusions hide={showOnly !== undefined && showOnly !== i+1}/>
    {/each}
  </AppLayout>
{/if}
