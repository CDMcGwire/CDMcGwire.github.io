<template>
  <div class="main">
    <div class="nav-row">
      <Nav />
    </div>
    <slot />
  </div>
</template>

<script>
import Nav from "~/components/Nav";
export default {
  components: {
    Nav: Nav
  }
};
</script>

<style lang="stylus" scoped>
@import "../styles/colors.styl"

.main
  display flex
  flex-direction column
  width 100%
  min-height 100vh
  background-color accent-dark

.nav-row
  position --webkit-sticky
  position sticky
  z-index 100
  top 0
  display flex
  flex-direction row
  justify-content center
  width 100%
  background-color accent-pri

Nav
  flex 0 1 content-width
</style>

