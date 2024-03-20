<template>
  <div class="button-container" v-bind:class="rootClassName">
    <a
      :href="linkButton"
      target="_blank"
      rel="noreferrer noopener"
      class="button-button button"
    >
      {{ button }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    imageSrc: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    imageSrc1: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    heading: {
      type: String,
      default: 'Heading',
    },
    linkButton: {
      type: String,
      default: 'https://www.apple.com/in/app-store/',
    },
    rootClassName: String,
    imageAlt1: {
      type: String,
      default: 'image',
    },
    imageAlt: {
      type: String,
      default: 'image',
    },
    button: {
      type: String,
      default: 'Button',
    },
  },
}
</script>

<style scoped>
.button-container {
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.button-button {
  color: rgb(255, 255, 255);
  width: 100%;
  padding: var(--dl-space-space-doubleunit);
  align-self: center;
  font-style: normal;
  text-align: center;
  font-weight: 500;
  border-color: #ffffff;
  border-width: 2px;
  align-content: 18px ;
  border-radius: 0px;
  text-decoration: none;
  background-color: rgb(0, 0, 0);
}




@media(max-width: 479px) {
  .button-button {
    height: 100%;
    font-size: 16px;
    align-self: center;
  }
  .button-root-class-name {
    top: 0px;
    left: 0px;
    width: 100%;
    height: auto;
    position: static;
    align-self: center;
  }
  .button-root-class-name1 {
    width: 100%;
    height: auto;
    align-self: center;
  }
}
</style>
