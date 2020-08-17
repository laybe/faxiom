<script lang="ts">
  import Proposition from './Proposition.svelte';
  import Hideable from './Hideable.svelte';
  
  export let proposition1: string;
  export let proposition2: string;
  export let proposition3: string;
  
</script>

<main>
  <Hideable let:hide buttonOnTheRight={true}>
    <div class:hide class="premisesArguments">
      <Proposition text={proposition1}/>
    </div>
  </Hideable>
  <div class="mainProposition">
    <Proposition text={proposition2}/>
  </div>
  <Hideable let:hide>
    <div class:hide class="conclusionsArguments">
      <Proposition text={proposition3}/>
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