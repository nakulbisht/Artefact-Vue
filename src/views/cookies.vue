<template>
  <div class="cookies-container"></div>
</template>

<script>
export default {
  name: 'Cookies',
  props: {},
  metaInfo: {
    title: 'Cookies - Artefact',
    meta: [
      {
        property: 'og:title',
        content: 'Cookies - Artefact',
      },
    ],
  },
}
</script>

<style scoped>
.cookies-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
</style>
