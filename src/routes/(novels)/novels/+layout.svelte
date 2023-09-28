<script lang="ts">
	import '@fontsource/baskervville'
	import NavActions from '$lib/components/NavActions.svelte'
	import { fade, blur } from 'svelte/transition'
</script>

<NavActions theme={'novels-nav'} />

<div class="bg-layer-1" transition:fade={{ delay: 0, duration: 400 }} />

<div
	class="content-outer"
	in:blur={{ delay: 200, duration: 400 }}
	out:blur={{ delay: 0, duration: 200 }}
>
	<div class="content-inner">
		<slot />
	</div>
</div>

<style lang="sass">
	.bg-layer-1
		position: fixed
		top: 0
		left: 0
		width: 100vw
		height: 100vmax
		overflow: hidden
		background-color: $dred-0
		z-index: 1
	.content-outer
		display: flex
		flex-direction: row
		justify-content: center
		padding:
			top: 3in
			bottom: 4in
		color: $gold-0
		font-family: "Baskervville", serif
		z-index: 2
	.content-inner
		flex: 0 1 800px
		display: flex
		flex-direction: column
		align-items: center
</style>
