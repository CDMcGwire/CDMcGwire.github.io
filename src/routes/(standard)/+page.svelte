<script>
  import MainHex from "$lib/svg/MainHex.svelte";
  import Title from "$lib/svg/Title.svelte";
  import { fly } from "svelte/transition";
</script>

<div class="outer-main">
  <div class="inner-main" in:fly={{ x: -500, duration: 600, delay: 200 }} out:fly={{ x: -500, duration: 600 }}>
    <div class="title-div">
      <Title />
    </div>
    <div class="hex-div">
      <MainHex />
    </div>
    <div class="main-nav">
      <a href="/portfolio" class="main-link one">
        <div>Portfolio</div>
      </a>
<!--      <a href="/novels" class="main-link two">-->
<!--        <div>Novels</div>-->
<!--      </a>-->
      <a href="/games" class="main-link three">
        <div>Games</div>
      </a>
    </div>
  </div>
</div>

<style lang="sass">
  .outer-main
    display: flex
    justify-content: center
    align-items: center
    position: fixed
    left: 0
    top: 0
    width: 100vw
    height: 100vh

  .inner-main
    display: flex
    position: relative
    transition: transform 1s
    transform: translate(-50px, 0px)
    @media (min-width: $phablet-width)
      transform: translate(0, 0) scale(100%)
    @media (min-width: $tablet-width)
      transform: scale(120%)
    @media (min-width: $partial-width)
      transform: scale(130%)
    @media (min-height: $oversize-height)
      transform: scale(160%)

  .title-div
    position: absolute
    width: 290px
    z-index: 999
    transition: transform 1s, width 1s
    transform: translate(-135px, -200px)
    @media (min-width: $phablet-width)
      width: 392.71px
      transform: translate(-291px, -249.58px)

  .main-nav
    position: absolute
    display: flex
    flex-direction: column
    transform: skewY(-30deg)
    transform-origin: 0 0

  .hex-div
    position: absolute
    width: 480px
    z-index: -1
    transition: transform 1s, width 1s
    transform: translate(-240px, -277.0165px)

  .main-link
    box-sizing: border-box
    flex: 0 0 70.07px
    margin: 0
    margin-bottom: 9.27px
    width: 198.19px
    text-decoration: none
    font-size: 1.8em

    &.one
      z-index: 13

    &.two
      z-index: 12

    &.three
      z-index: 11

    div
      flex: 0 0 100%
      display: flex
      flex-direction: row
      justify-content: flex-start
      align-items: center
      height: 100%
      padding: 6px
      color: $dark-fg
      background-color: $royl-3
      box-shadow: -4px 2px 0 hsla(0, 0%, 0%, 0.2)
      transform: none
      transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s

    &:hover
      div
        box-shadow: -8px 4px 0 hsla(0, 0%, 0%, 0.5)
        transform: translate(0.1in, 0.1in)

    &:focus
      div
        background-color: $royl-2

    &:active
      div
        box-shadow: 0 0 0 hsla(0, 0%, 0%, 0.0)
        transform: translate(-0.3in, -0.3in)
        background-color: $royl-3

  // .disabled
  // 	pointer-events: none
  // 	div
  // 		color: $dkbl-0
  // 		background-color: $royl-0
</style>
