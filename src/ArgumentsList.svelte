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
    flex-direction: row;
    overflow-x: auto;

    padding: 10px 0 10px 0;
  }

  div > :global(*) {
    margin: 10px;
  }

  @media only screen and (min-width: 600px) {
    div {
      flex-direction: column;
      overflow-y: auto;
    }
  }
</style>