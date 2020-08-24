<script lang="ts">
  import NavigationButton from './NavigationButton.svelte';
  import Layout from './style/_layout.svelte';


  export let propositionPartOfConnections: number = 0;
  export let hidePremises: boolean = false;
  export let hideConclusions: boolean = false;

  let windowWidth = window.innerWidth;
  let propositionToShow = 0;

  function onResize(event) {
    windowWidth = window.innerWidth;
  }

  let isBigScreen: boolean;
  $: isBigScreen = windowWidth > 600;

  $: showOnlyProposition = (): number => {
    if (!isBigScreen) {
      return propositionToShow;
    }
    return undefined;
  }

  $: isFirstProposition = (): boolean => {
    return propositionToShow === 0;
  }

  $: isLastProposition = (): boolean => {
    return propositionToShow === propositionPartOfConnections;
  }

  $: onPrevious = () => {
    propositionToShow = propositionToShow - 1;
  }

  $: onNext = () => {
    propositionToShow = propositionToShow + 1;
  }
</script>

<Layout/>

<svelte:window on:resize={onResize}/>

<main class:hidePremises class:hideConclusions>
  {#if propositionPartOfConnections > 0 && !isBigScreen}
    <NavigationButton type='previous' end={isFirstProposition()} on:click={onPrevious}/>
    <div class="container">
      <slot showOnly={showOnlyProposition()}/>
    </div>
    <NavigationButton type='next' end={isLastProposition()} on:click={onNext}/>
  {:else}
    <slot showOnly={showOnlyProposition()}/>
  {/if}
</main>

<style lang="scss">
  div.container {
    width: calc(100% - 40px); // 40px width of nav bars
    display: flex;
    flex-direction: column;
  }
  main {
    display: flex;
  }
  @media only screen and (min-width: 600px) {
    main {
      display: grid;
      grid-template-columns: 1fr auto 1fr auto 1fr;

      &.hidePremises {
        grid-template-columns: auto 1fr auto 1fr;
      }
      &.hideConclusions {
        grid-template-columns: 1fr auto 1fr auto;
      }
      // > :global(div:nth-child(4n+6)) {
      //   grid-column-start: col2-start;
      // }
    }
  }
</style>