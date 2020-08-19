<script lang="ts">
  import type { SingleProposition } from "./model/proposition/SingleProposition";

  export let proposition: SingleProposition;
  let text: string;
  $: text = proposition.text;
</script>

<div>{text}</div>

<style lang="scss">
  div {
    border: 1px solid grey;
    border-radius: 15px;
    width: 200px;
    padding: 15px;
    text-align: justify;
    text-justify: inter-word;
  }
</style>