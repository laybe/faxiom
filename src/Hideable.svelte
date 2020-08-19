<script lang="ts">
  
  export let buttonOnTheRight: boolean = false;
  
  let hide: boolean = false;
  
  function onClick() {
    hide = !hide;
  }
  
  function onResize(event) {
    if (window.innerWidth < 600)
    hide = false;
  }
</script>

<svelte:window on:resize={onResize}/>

{#if buttonOnTheRight}
  {#if !hide}
    <slot/>
  {/if}
  <div class="button" on:click={onClick}/>
{:else}
  <div class="button" on:click={onClick}/>
  {#if !hide}
    <slot/>
  {/if}
{/if}

<style lang="scss">
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    .button {
      flex-grow: 0;
      
      display: flex;
      background: lightgray;
      width: 20px;
    }
  }
</style>