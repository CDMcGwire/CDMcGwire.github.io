<div class="bg-layer-1" />
<div class="bg-layer-2" />
<div class="content">
	<slot />
</div>

<style lang="sass">
	.bg-layer-1
		position: fixed
		top: 0
		left: 0
		width: 100vw
		height: 100vmax
		overflow: hidden
		background: repeat center/2in url("/img/bg-pattern-2.png")
		animation: 10s linear 0s infinite normal both background-scroll
		z-index: 1
	.bg-layer-2
		position: fixed
		top: 0
		left: 0
		width: 100vw
		height: 100vmax
		overflow: hidden
		background: repeat center/2in url("/img/bg-pattern-1.png")
		animation: 4s linear 0s infinite normal both background-scroll-2
		z-index: 1
	.content
		z-index: 2

	@keyframes background-scroll
		from
			background-position: 0% 0%
		to
			background-position: 2in 0

	@keyframes background-scroll-2
		from
			background-position: 0% 0%
		to
			background-position: -2in 0
</style>
