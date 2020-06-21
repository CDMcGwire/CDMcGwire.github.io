<template>
  <Layout :header="header" :subtitle="subtitle">
    <ul>
      <li v-for="entry in filterCollection(directory, path)" :key="entry" class="col">
        <g-link :to="entry.path"><h2>{{ entry.title }}</h2></g-link>
        <span class="date">{{ entry.start }} - {{ entry.end }}</span>
        <p>{{ entry.excerpt }}</p>
      </li>
    </ul>
  </Layout>
</template>

<script>
export default {
  props: ["header", "subtitle", "directory", "path"],
  methods: {
    filterCollection: function(directory, path) {
      let filteredList = [];
      for (let edge of this.$static.allMarkdown.edges) {
        let nodeDir = edge.node.fileInfo.directory;
        let nodePath = edge.node.path;
        if (nodeDir === directory && nodePath !== path)
          filteredList.push(edge.node);
      }
      return filteredList;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import "../styles/colors.styl"

p
  margin-bottom 2ex
p + h2
  margin-top 3ex
h2
  transition all 0.3s
  margin-left -20px
  padding-left 15px
  border-left 5px solid accent-link
h2:hover
  padding-left 25px
  border-left-width 10px
a
  transition all 0.1s
  color accent-link
a:hover
  color accent-pri
.date
  align-self flex-end
  font-size 0.75em
  font-weight bold
</style>

<static-query>
query ($path: String) {
  allMarkdown(filter: { path: { ne: $path }}) {
    edges {
      node {
        title
        path
        excerpt
        start
        end
        fileInfo {
          directory
        }
      }
    }
  }
}
</static-query>
