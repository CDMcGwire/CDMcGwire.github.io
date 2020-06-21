<template>
  <Collection header="Posts" directory="posts" path="/posts/">
  </Collection>
</template>

<script>
import Collection from "~/layouts/Collection.vue";

export default {
	components: {
		Collection: Collection
	}
}
</script>
