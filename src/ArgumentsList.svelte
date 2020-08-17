<script lang="ts">
  import type { Argument } from './model/argument/Argument';
  import ArgumentComponent from './ArgumentComponent.svelte';
  
  export let showConclusions: boolean = false;
  export let argumentsList: Argument[] = [];
</script>

<div>
  {#each argumentsList as argument}
    <ArgumentComponent {showConclusions} {argument}/>
  {/each}
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
  }
</style>