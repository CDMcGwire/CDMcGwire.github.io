<script>
  import { page } from "$app/stores";
  import { slide } from "svelte/transition";

  export let theme;
</script>

{#if $page.url.pathname !== "/" }
  <div class="{theme} actions-outer" transition:slide>
    <div class="{theme} actions-inner">
      <a class="{theme} home-link" href="/">❮ Home</a>
    </div>
  </div>
{/if}

<style lang="sass">
  .actions-outer
    position: fixed
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    left: 0
    top: 0
    width: 100%
    padding: 12px
    z-index: 9999

  .actions-inner
    flex: 0 1 800px
    display: flex
    flex-direction: row

  .home-link
    display: flex
    text-decoration: none
    transition: all 0.2s
</style>
