<slot/>

<style lang="sass" global>
	h1.markdown
		margin-top: 1.6in
		padding: 0 12px
		font-size: 2.2em
		color: $skyb-2
		@media (min-width: $tablet-width)
			font-size: 2.6em
	h2.markdown
		margin: 2ex 0 0 0
		padding: 0 12px
		font-size: 1.6em
		color: $gold-2
		border-left: 4px solid $gold-0
		@media (min-width: $tablet-width)
			font-size: 2.0em
	h3.markdown
		margin: 2ex 0 0 0
		padding: 0 12px
		font-size: 1.2em
		color: $skyb-1
		@media (min-width: $tablet-width)
			font-size: 1.4em
	strong.markdown
		color: $gold-3
	p.markdown
		margin: 1ex 0 2ex 0
		padding: 0 12px
		line-height: 1.5
	p.markdown > a, li.markdown > a
		padding: 1px
		color: $royl-4
		text-decoration: none
		line-break: strict
		transition: all 0.2s
		border: 1px solid $royl-4
		border-radius: 6px
		&:hover, &:focus
			color: $royl-3
			border-color: $gold-2
	ul.markdown
		margin: 1ex 0 2ex 2ch
		padding: 0 12px
		line-height: 1.5
		list-style: none
		ul
			margin-top: 0
			margin-bottom: 0
			li:last-of-type
				margin-bottom: -0.5ex
		li
			margin: 2ex 0
			padding: 0.5ex 1ch
			border-left: 3px solid $royl-0
	blockquote.markdown
		margin: 2ex 4ch
		padding: 0.5ex 1ch
		font-style: italic
		color: $gold-2
		background-color: hsla(0, 100%, 100%, 0.15)
		p
			padding: 0
			margin: 0
	hr.markdown
		margin: 4ex auto
		width: 300px
		color: $gold-0
	.external-link.markdown
		align-self: center
		margin: 1ex 0 2ex 0
		padding: 1ch 1ex
		text-decoration: none
		color: $dark-fg
		background-color: $royl-3
		border-radius: 6px
		transition: all 0.2s
		&:hover, &:focus
			background-color: $royl-2
	.youtube-video.markdown
		margin: 3ex 0
		width: 100%
</style>