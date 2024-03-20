<template>
  <div class="about-container"></div>
</template>

<script>
export default {
  name: 'About',
  props: {},
  metaInfo: {
    title: 'About - Artefact',
    meta: [
      {
        property: 'og:title',
        content: 'About - Artefact',
      },
    ],
  },
}
</script>

<style scoped>
.about-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
</style>
