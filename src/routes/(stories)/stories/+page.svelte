<script>
	import im_metanoiaTitle from '$lib/img/metanoia.png'
</script>

<h1>Novels</h1>

<img class="book-title" alt="Metanoia Title" src={im_metanoiaTitle} />

<blockquote>
	<!-- <img alt="Metanoia Title" id="tower-flow" src={im_tower} /> -->
	<p>
		“Joule: a young city founded by a faction of America’s elite claiming it would become “the spark
		of a new era of Humanity.” Most of the world saw it as a dangerous playhouse for a power-mad
		oligarchy, but to people like John Nakae it was a chance to escape a life of stagnation and
		decay. For years, it was exactly that. Yet—for all their fervency—no one in the city could grasp
		‘true’ change.
	</p>
	<p>
		“Until one night, under the shadows of that city’s shining towers, that ‘change’ grasped John
		and the new era was ushered in by the clawed hands of a nightmare.
	</p>
	<p>
		“When he comes to, he finds a mystery in the wake of the horror so enticing he forgets the
		trauma of his near-death encounter, for in that mystery is the potential to finally reach that
		next step for the world… If only he can come to understand and control it before the light of
		his beloved city is snuffed out.”
	</p>
</blockquote>
<p>
	<em><strong>Metanoia</strong></em> is a paranormal sci-fi in a near-future setting that blurs the
	symbolic and the technical. It’s a very character driven tale about man’s pursuit of the new—of
	science and societal progress—and his duty to his past—to remember who he is, who came before, and
	who he belongs to. Of course, a bunch of dry philosophizing wouldn’t be much fun, so this city’s
	tale unfolds amidst high-stakes action… noir-inspired intrigue… a fair shake of romance…
	<em>and a sprinkle of horror.</em>
</p>
<p>
	Fans of <em>Metropolis</em>, <em>Blade Runner</em>, <em>Deus Ex</em>, and <em>Persona 3</em>
	should find something to like here.
</p>
<a class="store-link" href="stories/metanoia-book1-intro"> Read 1st Chapter ❯ </a>

<h1>Shorts</h1>
<h2>Lakeside Inheritance</h2>
<p>
	Asked a friend for a horror story concept to write, and this was the result. It's complete, but
	not edited, so expect a little roughness for now.
</p>
<a class="store-link" href="stories/lakeside-inheritance">Read ❯ </a>

<style lang="sass">
  img
    max-width: 100%

  #tower-flow
    float: right
    width: 60vw
    margin-top: 10px
    margin-right: -90px
    shape-outside: url("/img/tower-mask.png")
    transition: height 1s
    @media (min-width: v.$tablet-width)
      margin-right: -100px
      width: 320px

  .store-link
    margin: 2ex
    padding: 0.6ex 1.2ch
    font-family: "JetBrains Mono", monospace
    font-size: 1.2em
    text-decoration: none
    color: v.$gold-1
    border-radius: 6px
    background-color: hsla(0, 0%, 0%, 0.2)
    transition: all 0.2s
    @media (min-width: v.$tablet-width)
      font-size: 1.4em

    &:hover, &:focus
      color: white
      background-color: hsla(0, 0%, 0%, 0.6)

  .book-title
    margin-top: 100px
    width: 800px
</style>
