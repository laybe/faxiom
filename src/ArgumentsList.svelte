<script lang="ts">
  import type { Argument } from './model/argument/Argument';
  import ArgumentComponent from './ArgumentComponent.svelte';
  
  export let showConclusions: boolean = false;
  export let argumentsList: Argument[] = [];
</script>

<div>
  {#each argumentsList as argument (argument.id)}
    <ArgumentComponent {showConclusions} {argument}/>
  {/each}
</div>

<style lang="scss">
  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>