<template>
  <div class="layout">
    <div class="header-block">
      <header v-if="header || subtitle">
        <h1 class="page-title">{{ header }}</h1>
        <p v-if="subtitle">{{ subtitle }}</p>
      </header>
    </div>
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "subtitle"]
};
</script>

<style lang="stylus" scoped>
@import "../styles/colors.styl"

.layout
  display flex
  flex-direction column
  align-items center
  padding-bottom 180px

.header-block
  display flex
  flex-direction row
  justify-content center
  align-items flex-end
  width 100%
  height 200px
  padding-top 10ex
  padding-bottom 15ex
  overflow hidden
  overflow-wrap break-word

  color accent-text
  background-color accent-pri

  h1
    font-size 4em
    line-height 1em
    @media screen and (max-width: content-width)
      font-size 2.5em

  @media screen and (max-width: content-width)
    height auto
    padding-top 6ex
    padding-bottom 8ex
    p
      font-size 0.8em
      line-height 1.2
      padding-right 35%

header
  flex 0 1 content-width
  @media screen and (max-width: content-width)
    margin-left 1ch
    margin-right 1ch

.container
  box-sizing border-box
  width content-width + 100px
  padding 30px 50px 60px 50px
  background-color background
  @media screen and (max-width: content-width)
    width 100%
    padding 20px 1ch 30px
</style>
