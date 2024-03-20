<template>
  <div class="blog-grid-container"></div>
</template>

<script>
export default {
  name: 'BlogGrid',
  props: {},
  metaInfo: {
    title: 'Blog-Grid - Artefact',
    meta: [
      {
        property: 'og:title',
        content: 'Blog-Grid - Artefact',
      },
    ],
  },
}
</script>

<style scoped>
.blog-grid-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
</style>
