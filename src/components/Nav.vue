<template>
  <nav>
    <div class="main-links">
      <g-link to="/">About</g-link>
      <!-- <g-link to="/posts">Posts</g-link> -->
      <g-link to="/projects">Projects</g-link>
    </div>
    <div class="social-links">
      <a class="social-link" href="#">
        <g-image class="social-img" src="~/assets/hr-logo.png" alt="HackerRank" />
      </a>
      <a class="social-link" href="#">
        <g-image class="social-img" src="~/assets/gh-logo.png" alt="GitHub" />
      </a>
      <a class="social-link" href="#">
        <g-image class="social-img" src="~/assets/li-logo.png" alt="LinkedIn" />
      </a>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
@import "../styles/colors.styl"

nav
  display flex
  flex-direction row

.main-links
  display flex
  flex 1 0 auto
  flex-direction row
  align-self start
  a
    box-sizing border-box
    transition all 0.2s
    display flex
    margin 0px 6px
    padding 5px 5px 2.5px 5px
    color accent-text
    line-height normal
  a:not(.active--exact):hover
    padding-top 10px
    color accent-dark
    background-color accent-text
  a:active
    color accent-text
    background-color accent-dark
  a.active--exact
    border-top 5px solid accent-text
  @media screen and (max-width: content-width)
    margin 0 1ch
    font-size 0.75em
    a
      margin 0 3px

.social-links
  display flex
  flex-direction row-reverse
  align-items center
  a
    box-sizing border-box
    transition all 0.2s
    display flex
    padding 5px
    img
      transition all 0.2s
  a:hover
    padding-right 12.5px
    padding-left 12.5px
    background-color accent-text
    img
      filter brightness(10%)
  a:active
    background-color accent-dark
  @media screen and (max-width: content-width)
    margin 0 1ch
    a
      padding 2px
    a:hover
      padding-left 7.5px
      padding-right 7.5px

.social-img
  width 30px
  height 30px
  margin 3px
  @media screen and (max-width: content-width)
    width 22px
    height 22px
</style>
