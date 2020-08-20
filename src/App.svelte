<script lang="ts">
  import PropositionComponent from './PropositionComponent.svelte';
  import Hideable from './Hideable.svelte';
  import { PropositionType } from './model/proposition/PropositionType';
  import { onMount } from 'svelte';
  import * as propositionJson from './mock/propositionExample1.json';
  import type { SingleProposition } from './model/proposition/SingleProposition';
  import ArgumentsList from './ArgumentsList.svelte';
  import type { Argument } from './model/argument/Argument';
  import Layout from './style/_layout.svelte';
  import type { ConnectionType } from './model/proposition/ConnectionType';

  let propositionData: any;
  let proposition: SingleProposition;

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

<main>
  <Layout/>
  {#if proposition}
    <div class="container">
      <Hideable buttonOnTheRight={true}>
        <div>
          <ArgumentsList argumentsList={proposition.premisesArguments}></ArgumentsList>
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

    {#if proposition.partOfConnections}
      <div class="connectedPropositions">
        {#each proposition.partOfConnections as connection (connection.id)}
          <div></div>
          <div>
              <PropositionComponent proposition={connection}/>
          </div>
          <div>
            <ArgumentsList argumentsList={connection.conclusionsArguments} showConclusions></ArgumentsList>
          </div>
        {/each}
      </div>
    {/if}
  {/if}
</main>

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
  
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    .container {
      flex-direction: row;
    }
  }
  
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    
  }
  
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    
  }
  
  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    
  }
  
  /*.grid-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }*/
</style>