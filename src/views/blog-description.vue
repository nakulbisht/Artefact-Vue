<template>
  <div class="blog-description-container"></div>
</template>

<script>
export default {
  name: 'BlogDescription',
  props: {},
  metaInfo: {
    title: 'Blog-Description - Artefact',
    meta: [
      {
        property: 'og:title',
        content: 'Blog-Description - Artefact',
      },
    ],
  },
}
</script>

<style scoped>
.blog-description-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
</style>
