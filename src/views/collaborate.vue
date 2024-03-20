<template>
  <div class="collaborate-container">
    <div class="collaborate-full-body">
      <app-header rootClassName="header-root-class-name1"></app-header>
      <div class="collaborate-info-column">
        <div class="collaborate-row">
          <div class="collaborate-left-column">
            <h1 class="collaborate-text">Embrace Creation</h1>
            <p class="collaborate-text01">
              <span>
                Artifact uses AI to learn your interests and keep you up-to-date
                with the information and inspiration that matters most to you.
                Start discovering the most interesting articles and content shared
                from our community. 
              </span>
              <span>
                Artifact uses AI to learn your interests and keep you up-to-date
                with the information and inspiration that matters most to you.
                <span v-html="rawto4i"></span>
              </span>
            </p>
          </div>
          <div class="collaborate-right-column">
            <h1 class="collaborate-text04">
              <span>Embrace Creation</span>
              <br />
            </h1>
            <span class="collaborate-text07">
              <span>
                Artifact uses AI to learn your interests and keep you up-to-date
                with the information and inspiration that matters most to you.
                Start discovering the most interesting articles and content shared
                from our community. 
              </span>
              <span>
                Artifact uses AI to learn your interests and keep you up-to-date
                with the information and inspiration that matters most to you.
                <span v-html="raw2yc9"></span>
              </span>
            </span>
          </div>
        </div>
      </div>
      <app-footer rootClassName="footer-root-class-name1"></app-footer>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import AppFooter from '../components/footer'

export default {
  name: 'Collaborate',
  props: {},
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      rawto4i: ' ',
      raw2yc9: ' ',
    }
  },
  metaInfo: {
    title: 'Collaborate - Artefact',
    meta: [
      {
        property: 'og:title',
        content: 'Collaborate - Artefact',
      },
    ],
  },
}
</script>

<style scoped>
.collaborate-container {
  width: 100%;
  height: 100%;
  display: flex;
  min-height: 100vh;
  background-color: #000000;
}
.collaborate-full-body {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  z-index: 100;
  position: relative;
  max-width: 1920px;
  align-self: center;
  box-sizing: border-box;
  margin-top: 0px;
  padding-left: var(--dl-space-space-fiveunits);
  padding-right: var(--dl-space-space-fiveunits);
  flex-direction: column;
}
.collaborate-info-column {
  width: 100%;
  height: 100%;
  display: flex;
  align-self: center;
}
.collaborate-row {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.collaborate-left-column {
  flex: 0 0 auto;
  width: 800px;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
}
.collaborate-text {
  color: rgb(255, 255, 255);
  height: 1.2em;
  font-size: 60px;
  font-style: normal;
  font-family: "Montserrat";
  font-weight: 500;
  line-height: 1;
  margin-bottom: var(--dl-space-space-doubleunit);
}
.collaborate-text01 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  align-self: stretch;
  font-family: "Montserrat";
  line-height: 1.75;
  letter-spacing: 1px;
}
.collaborate-right-column {
  flex: 0 0 auto;
  width: 800px;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
}
.collaborate-text04 {
  color: rgb(255, 255, 255);
  height: 1.2em;
  font-size: 76px;
  align-self: self-start;
  font-style: normal;
  font-family: "Montserrat";
  font-weight: 500;
  line-height: 1;
}
.collaborate-text07 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  align-self: stretch;
  margin-top: var(--dl-space-space-doubleunit);
  font-family: "Montserrat";
}
@media(max-width: 1600px) {
  .collaborate-full-body {
    z-index: 100;
    align-self: center;
    min-height: 100vh;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--dl-space-space-fiveunits);
    margin-bottom: 0px;
    padding-right: var(--dl-space-space-fiveunits);
  }
  .collaborate-info-column {
    width: 100%;
    align-items: center;
  }
  .collaborate-text01 {
    color: #ffffff;
    font-style: normal;
    font-family: Montserrat;
    font-weight: 400;
  }
  .collaborate-text07 {
    color: #ffffff;
    font-style: normal;
    font-family: Montserrat;
    font-weight: 400;
  }
}
</style>
