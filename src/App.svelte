<script lang="ts">
  import Proposition from './Proposition.svelte';
  
  export let proposition1: string;
  export let proposition2: string;
</script>

<main>
  <div class="grid-container">
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item">
      <Proposition text={proposition1}/>
    </div>
    <div class="grid-item">
      <Proposition text={proposition2}/>
    </div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
  </div>
  
</main>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;

    grid-gap: 50px;
    padding: 10px;
    /* background-color: #2196F3; */
  }
  
  .grid-item {
    /* background-color: rgba(255, 255, 255, 0.8); */
    /* border: 1px solid rgba(0, 0, 0, 0.8); */
    padding: 20px;
    font-size: 30px;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>