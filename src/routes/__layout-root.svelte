<script lang="ts">
	import '../normalize.css'
	import '@fontsource/jetbrains-mono'
</script>

<div class="outer-shell">
	<slot />
</div>

<style lang="sass">
	:global
		html, body
			font-family: monospace
			font-size: 12pt
		div
			box-sizing: border-box

	.outer-shell
		display: flex
		flex-direction: column
		align-items: center
		width: 100vw
		min-height: 100vh
		background-color: $dark-bg
		color: $dark-fg
		font-family: "JetBrains Mono", monospace
		overflow: hidden
</style>
