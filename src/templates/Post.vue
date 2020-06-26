<template>
  <Layout
    :header="$page.markdown.title"
    :subtitle="$page.markdown.subtext"
    class="row"
  >
    <div class="row">
      <div class="sidebar">
        <ul>
          <li
            v-for="heading in $page.markdown.headings"
            :key="heading.value"
            :class="'header' + heading.depth"
          >
            <router-link :to="heading.anchor">
              {{ trimHeader(heading.value) }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="content col">
        <VueRemarkContent class="col" />
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  methods: {
    trimHeader: function(header) {
      return header.split(new RegExp("-|\\("))[0].trim();
    }
  }
};
</script>

<style lang="stylus">
@import "../styles/colors.styl"

.sidebar
  @media screen and (max-width: content-width)
    display none
  @media screen and (min-width: content-width)
    position sticky
    top 60px
    flex 0 1 220px
    margin-right 50px
    max-height calc(100vh - 60px)
    font-size 0.8em
    line-height normal
    overflow-x hidden
    scrollbar-width thin
    a
      transition all 0.2s
      padding 0.4ex 0
      color accent-pri
    a:hover
      padding-left 5px
      color accent-dark
      border-left 3px solid accent-dark
    ul
      li:not(:first-of-type)
        margin-top 2ex
      .header3:not(:first-of-type)
        margin-left 1.5ch
        margin-top 2ex
        font-size 0.825em
      .header3 + .header2
        margin-top 3ex


.content
  padding-bottom 160px
  p, li
    font-size 0.9em
    z-index 10
  p, ul
    margin-bottom 2ex
  ul
    margin-left 1.5ch
  li
    padding-left 1ch
    border-left 3px solid accent-light
    li
      border-color accent-pri
    li:nth-of-type(2n)
      border-color accent-light
  li:nth-of-type(2n)
    border-color accent-pri
    li
      border-color accent-light
    li:nth-of-type(2n)
      border-color accent-pri
  li + li
    margin-top 1.6ex
  li > ul, li > p
    margin 0
  li > ul
    margin-top .8ex
  h1, h2, h3, h4, h5, h6
    margin-top -80px
    padding-top 80px
  h2
    margin-bottom .5ex
  h3
    margin-bottom .5ex
    color accent-dark
  h2 + h3
    margin-top calc(1ex - 80px)
  p + h1, p + h2, p + h3, ul + h2, ul + h3
    margin-top calc(2ex - 80px)
  h1, h2, h3, h4, h5, h6
    a
      transition all 0.2s
      float left
      margin-left -2ex
      color inherit
      opacity 0%
      :hover
        color accent-pri
    a:hover
      opacity 100%
  h1:hover, h2:hover, h3:hover, h4:hover, h5:hover, h6:hover
    a
      opacity 100%
  a
    transition all 0.2s
    color accent-link
  a:hover
    color accent-link-dark
  blockquote
    margin-left 2ch
    max-width 60ch
    font-style italic
    border-left 5px solid accent-light
    z-index 10
    p
      margin 0
      padding 0 0 0.5ex 1.5ch
  .icon
    display inline-block
    @media screen and (max-width: content-width)
      display none
  .timeline
    float right
    font-size 0.9em
    margin-top -1.5ex
    margin-right -2ch
    margin-bottom -1.5ex
    color accent-dark
    @media screen and (max-width: content-width)
      margin-right 0
  .note
    font-size 0.8em
    color accent-dark
</style>

<page-query>
query ($id: ID!) {
  markdown(id: $id) {
    title
    content
    subtext
    organization
    start
    end
    headings {
      depth
      value
      anchor
    }
  }
}
</page-query>
