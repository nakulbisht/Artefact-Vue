<template>
  <div class="contact-container"></div>
</template>

<script>
export default {
  name: 'Contact',
  props: {},
  metaInfo: {
    title: 'Contact - Artefact',
    meta: [
      {
        property: 'og:title',
        content: 'Contact - Artefact',
      },
    ],
  },
}
</script>

<style scoped>
.contact-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
