<template>
  <div class="terms-container"></div>
</template>

<script>
export default {
  name: 'Terms',
  props: {},
  metaInfo: {
    title: 'Terms - Artefact',
    meta: [
      {
        property: 'og:title',
        content: 'Terms - Artefact',
      },
    ],
  },
}
</script>

<style scoped>
.terms-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
</style>
