<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let type: 'previous' | 'next' | undefined;
  export let end: boolean;

  const dispatch = createEventDispatcher();

  function forward(event) {
    if (!end) {
      dispatch('click', event.detail);
    }
	}
</script>

<div class:end class:type on:click={forward}/>

<style lang="scss">
  div {
    flex-grow:1;
    flex-shrink: 0;

    // display: flex;
    background: grey;
    width: 20px;
    &.end {
      background: lightgray;
    }
  }
</style>