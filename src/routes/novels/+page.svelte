<script lang="ts">
	import im_metanoiaTitle from '$lib/img/metanoia.png'
	import im_tower from '$lib/img/tower.png'
</script>

<img src={im_metanoiaTitle} alt="Metanoia Title" />
<a
	class="store-link"
	target="_blank"
	href="https://www.amazon.com/gp/product/B0B4FJY836/ref=dbs_a_def_rwt_bibl_vppi_i0"
>
	Available Digitally on Kindle ❯
</a>
<a
	class="store-link"
	target="_blank"
	href="https://www.barnesandnoble.com/w/metanoia-connor-mcgwire/1141734535?ean=9798765588666"
>
	Available in Paperback at Barnes & Noble ❯
</a>
<div class="book-desc">
	<img src={im_tower} alt="Metanoia Title" id="tower-flow" />
	<p>
		“Joule: a young city founded by a faction of America’s elite claiming it would become “the spark
		of a new era of Humanity.” Most of the world saw it as a dangerous playhouse for a power-mad
		oligarchy, but to people like John Nakae it was a chance to escape a life of stagnation and
		decay. For five years, it was exactly that... Yet, real change proved difficult to grasp. Even
		as the people around him pursued progress with more fervency than any generation before, nothing
		had fundamentally changed for him or humanity.
	</p>
	<p>
		“Until one night, under the shadows of that city’s shining towers, the new era truly began as a
		nightmare became flesh.
	</p>
	<p>
		“John nearly meets his end at the clawed hands of that nightmare, but in the aftermath discovers
		a similar phenomenon has blessed him with the potential to twist a part of reality to his own
		will. Others like him emerge in the city — as do ever more abominations — and he soon finds
		himself on the frontline of an investigation into the growing mystery. Not merely to understand,
		but to control.”
	</p>
</div>

<p>
	<em>Metanoia</em> is a paranormal sci-fi set in a near-future America. It's a very character
	driven story supported by a setting that mixes optimistic, hard sci-fi with seemingly fantastical
	(often horrorific) phenomena. While not strictly a <em>“mystery”</em> novel, the city presents our protagonist,
	John, with a plethora of secrets and plots that he must maneuver through. It's a story for those that
	like fun dialogue and tense action first and foremost, but want it served in a thematically substantial
	package.
</p>

<p>
	Fans of <em>Blade Runner</em>, <em>Deus Ex</em>, and <em>Persona 3</em> should find something to
	like here, and I daresay even fans of <em>Dune</em> might find it compelling.
</p>

<style lang="sass">
	p
		align-self: flex-start
		max-width: 70ch
		font-size: 1.15em
		line-height: 1.25
		color: $gold-2
	img
		max-width: 100%
	#tower-flow
		float: right
		width: 60vw
		margin-top: 10px
		margin-right: -90px
		shape-outside: url("/img/tower-mask.png")
		transition: height 1s
		@media (min-width: $tablet-width)
			margin-right: -100px
			width: 320px
	.store-link
		margin: 2ex
		padding: 0.6ex 1.2ch
		font-family: "JetBrains Mono"
		font-size: 1.2em
		text-decoration: none
		color: $gold-1
		border-radius: 6px
		background-color: hsla(0,0%,0%,0.2)
		transition: all 0.2s
		@media (min-width: $tablet-width)
			font-size: 1.4em
		&:hover, &:focus
			color: white
			background-color: hsla(0,0%,0%,0.6)
	.book-desc
		align-self: flex-start
		padding: 0 8%
		@media (min-width: $tablet-width)
			margin-left: 0.5in
			p
				max-width: 500px
		p
			font-style: italic
			color: $gold-3
</style>
