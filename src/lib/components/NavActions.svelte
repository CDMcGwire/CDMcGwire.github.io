<script>
	import { page } from '$app/stores'
	import { slide } from 'svelte/transition'

	export let theme
</script>

<div class="{theme} actions-outer">
	<div class="{theme} actions-inner" transition:slide>
		{#if $page.url.pathname !== '/'}
			{#if $page.url.pathname.lastIndexOf('/') == 0}
				<a class="{theme} home-link" href="/">❮ Home</a>
			{:else}
				<a
					class="{theme} home-link"
					href={$page.url.pathname.substring(0, $page.url.pathname.lastIndexOf('/'))}>❮ Back</a
				>
			{/if}
		{/if}
	</div>
</div>

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
