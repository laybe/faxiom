<script lang="ts">
  import PropositionComponent from './PropositionComponent.svelte';
  import Hideable from './Hideable.svelte';
  import { PropositionType } from './model/proposition/PropositionType';
  import { onMount } from 'svelte';
  import * as propositionJson from './mock/propositionExample1.json';
  import type { SingleProposition } from './model/proposition/SingleProposition';
  import ArgumentsList from './ArgumentsList.svelte';
  import type { Argument } from './model/argument/Argument';
  
  let propositionData: any;
  let proposition: SingleProposition;
  let premisesArgumentsList: Argument[];
  let conclusionsArgumentsList: Argument[];

  $: {
    if (propositionData) {
      proposition = { id: propositionData.id, type: propositionData.type, text: propositionData.text };
      premisesArgumentsList = propositionData.premisesArguments;
      conclusionsArgumentsList = undefined;
    }
  }
  
  onMount(/* async */ () => {
    propositionData = propositionJson;
    // const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
    // photos = await res.json();
  });
</script>

<main>
  <Hideable let:hide buttonOnTheRight={true}>
    <div class:hide>
      <ArgumentsList argumentsList={premisesArgumentsList}></ArgumentsList>
    </div>
  </Hideable>
  <div class="mainProposition">
    <PropositionComponent {proposition}/>
  </div>
  <Hideable let:hide>
    <div class:hide>
      <ArgumentsList argumentsList={conclusionsArgumentsList} showConclusions></ArgumentsList>
    </div>
  </Hideable>
</main>

<style>
  main {
    height: 100%;
    display: flex;
    flex-direction: column;
    /*align-items: stretch;
    align-content: stretch;*/
  }
  
  main > div {
    flex-grow: 1;
    
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .hide {
    display: none;
  }
  
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    main {
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