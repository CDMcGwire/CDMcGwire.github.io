<script lang="ts">
	import NavActions from '$lib/components/NavActions.svelte'
	import { fly } from "svelte/transition";
</script>

<NavActions theme={'standard-nav'} />

<div class="content-outer" in:fly={{ x: 500, delay: 200 }} out:fly={{ x: 500 }}>
	<div class="content-inner">
		<slot />
	</div>
</div>

<style lang="sass">
	:global
		.standard-nav.home-link
			padding: 1ex 1ch
			color: $skyb-0
			font-family: "JetBrains Mono", monospace
			font-size: 1.5em
			background-color: $dkbl-1
			border-radius: 6px
			&:hover, &:focus
				color: $royl-3
				background-color: $skyb-0
	
	.content-outer
		display: flex
		flex-direction: row
		justify-content: center
		width: 100vw
		z-index: 2
	.content-inner
		flex: 0 1 800px
		display: flex
		flex-direction: column
		align-items: flex-start
		padding: 1.4in 0 3in 0
</style>