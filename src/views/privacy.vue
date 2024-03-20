<template>
  <div class="privacy-container"></div>
</template>

<script>
export default {
  name: 'Privacy',
  props: {},
  metaInfo: {
    title: 'Privacy - Artefact',
    meta: [
      {
        property: 'og:title',
        content: 'Privacy - Artefact',
      },
    ],
  },
}
</script>

<style scoped>
.privacy-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
</style>
