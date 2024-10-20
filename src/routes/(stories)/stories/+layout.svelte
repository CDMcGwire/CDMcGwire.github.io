<script>
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
    background-color: v.$dred-1
    z-index: 1
  .content-outer
    display: flex
    flex-direction: column
    align-items: center
    max-width: 100%
    padding:
      top: 3in
      bottom: 4in
      left: 16px
      right: 16px
    color: v.$gold-2
    font-family: "Baskervville", serif
    font-size: 1.2em
    line-height: 1.5
    z-index: 2
    :global(.icon-link)
      color: v.$gold-1
      vertical-align: 6px
      font-size: 0.6em
    :global
      h1
        width: v.$article-width
        max-width: 100%
        margin: 100px 16px 0 16px
        color: v.$gold-3
        font-size: 4rem
        line-height: 1
        &:first-child
          margin-top: 0
        .icon-link
          color: transparent
        & + h4
          margin-top: 0
          font-size: 1.8rem
          font-weight: normal
          font-family: "Baskervville"
          line-height: 1
      h2
        width: v.$article-width
        max-width: 100%
        margin: 100px 16px 0 16px
        color: v.$gold-0
        font-size: 2.25rem
        line-height: 1.25
        & + p
          margin-top: 4ex
      h3
        width: v.$article-width
        max-width: 100%
        margin-top: 80px
        margin-bottom: 0
        color: v.$gold-0
        font-size: 2.25rem
        font-family: "JetBrains Mono"
        font-weight: normal
        line-height: 1
        & + p
          margin-top: 4ex
      h4
        width: v.$article-width
        max-width: 100%
        margin: 2ex 16px 0 16px
        color: v.$gold-3
        font-size: 1.15rem
        font-family: "JetBrains Mono"
        font-weight: bold
        line-height: 1
        & + p
          margin-top: 4ex
        .icon-link
          color: transparent
      p
        width: v.$article-width
        max-width: 100%
        margin: 2ex 16px 0 16px
        line-height: 1.5
        color: v.$gold-2
      hr
        width: 150px
        max-width: 100%
        padding: 0
        margin: 24px auto
        border: none
        border-top: medium double #333
        text-align: center
        color: v.$gold-1
        border-color: v.$gold-0
        &:after
          content: "§"
          display: inline-block
          position: relative
          top: -0.85em
          padding: 0 0.25em
          background-color: v.$dred-1
        & + p
          margin-top: 0

      blockquote
        box-sizing: border-box
        width: v.$article-width
        max-width: 100%
        padding-left: 3ch
        border-left: 3px solid v.$gold-0
        p
          width: 100%
          margin:
            left: 0
            right: 0
          font-style: italic
          color: v.$gold-3
          &:first-child
            margin-top: 0
</style>
