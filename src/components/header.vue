<template>
  <div class="header-container" v-bind:class="rootClassName">
    <a
      href="https:// artefact .teleporthq.app"
      target="_blank"
      rel="noreferrer noopener"
      class="header-link"
    >
      <img :alt="imageAlt" :src="imageSrc" class="header-image" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    rootClassName: String,
    imageSrc: {
      type: String,
      default: '/external/pastedimage-imm-200h.png',
    },
    imageAlt: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.header-container {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
}
.header-link {
  display: contents;
}
.header-image {
  width: 200px;
  align-self: center;
  margin-top: var(--dl-space-space-tripleunit);
  object-fit: cover;
  text-decoration: none;
}
.header-root-class-name {
  width: auto;
  height: auto;
}
.header-root-class-name1 {
  width: 100%;
  height: auto;
  align-self: center;
}
</style>
