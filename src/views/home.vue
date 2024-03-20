<template>
  <div class="home-container">
    <video
      src="/900760519.mp4"
      loop="true"
      muted="true"
      poster="https://play.teleporthq.io/static/svg/videoposter.svg"
      autoplay="true"
      class="home-video"
    ></video>
    <div class="home-full-body">
      <div class="home-logo-container">
        <img
          alt="image"
          src="/external/pastedimage-imm-2000h-2000h.png"
          class="home-image"
        />
      </div>
      <div class="home-info-container">
        <div class="home-row">
          <div class="home-left-column">
            <h1 class="home-text">Embrace Simulation</h1>
            <p class="home-text1">
              <span>
                Artifact uses AI to learn your interests and keep you up-to-date
                with the information and inspiration that matters most to you.
                Start discovering the most interesting articles and content shared
                from our community.
              </span>
              <br />
            </p>
          </div>
          <div class="home-right-column">
            <div class="home-container1">
              <app-button
                button="App Store"
                linkButton="https://www.apple.com/in/app-store/"
                rootClassName="button-root-class-name"
              ></app-button>
              <app-button
                button="Play Store"
                linkButton="https://play.google.com/store/apps?hl=en_IN&amp;gl=US&amp;pli=1"
                rootClassName="button-root-class-name1"
              ></app-button>
            </div>
            <div class="home-container2">
              <img
                alt="image"
                src="/external/pastedimage-g36h-2000h-200h.png"
                class="home-image1"
              />
            </div>
          </div>
        </div>
      </div>
      <app-footer rootClassName="footer-root-class-name"></app-footer>
    </div>
  </div>
</template>

<script>
import AppButton from '../components/button'
import AppFooter from '../components/footer'

export default {
  name: 'Home',
  props: {},
  components: {
    AppButton,
    AppFooter,
  },
  metaInfo: {
    title: 'Artefact',
    meta: [
      {
        property: 'og:title',
        content: 'Artefact',
      },
    ],
  },
}
</script>

<style scoped>
.home-container {
  height: 100vh;
  display: flex;
  overflow: hidden;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}
.home-video {
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 6s;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
.home-full-body {
  width: 100%;
  margin: 0 auto;
  display: flex;
  z-index: 100;
  position: relative;
  max-width: 1920px;
  align-self: center;
  box-sizing: border-box;
  margin-top: 0px;
  max-height: 1920px;
  min-height: 100vh;
  padding-left: var(--dl-space-space-fiveunits);
  padding-right: var(--dl-space-space-fiveunits);
  flex-direction: column;
}
.home-logo-container {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 100px;
  flex-direction: column;
}
.home-image {
  width: 100%;
  object-fit: cover;
  animation-name: none;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
.home-info-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: center;
}
.home-row {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.home-left-column {
  flex: 0 0 auto;
  display: flex;
  position: relative;
  max-width: 40%;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.home-text {
  color: rgb(255, 255, 255);
  font-size: 32px;
  font-style: normal;
  font-family: "Montserrat";
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 20px;
}
.home-text1 {
  color: rgb(255, 255, 255);
  font-size: 16px;
  align-self: stretch;
  font-style: normal;
  font-family: "Montserrat";
  font-weight: 500;
  line-height: 1.75;
}
.home-right-column {
  gap: 12px;
  flex: 0 0 auto;
  width: 200px;
  height: 100%;
  display: flex;
  align-self: flex-start;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-start;
}
.home-container1 {
  flex: 0 0 auto;
  width: 200px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-container2 {
  flex: 0 0 auto;
  width: 200px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-image1 {
  width: 60%;
  object-fit: cover;
}
@media(max-width: 1600px) {
  .home-video {
    object-fit: cover;
  }
  .home-full-body {
    width: 100%;
    z-index: 100;
    align-self: center;
    margin-top: 0px;
    min-height: 100vh;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--dl-space-space-fiveunits);
    margin-bottom: 0px;
    padding-right: var(--dl-space-space-fiveunits);
  }
  .home-logo-container {
    width: 100%;
    align-items: center;
    padding-top: 4em;
  }
  .home-image {
    width: 100%;
  }
  .home-info-container {
    width: 100%;
    align-items: center;
  }
  .home-row {
    width: auto;
    align-self: stretch;
    justify-content: space-between;
  }
  .home-text1 {
    color: #ffffff;
    font-style: normal;
    font-family: Montserrat;
    font-weight: 400;
  }
}
@media(max-width: 1200px) {
  .home-video {
    width: 893px;
    object-fit: cover;
  }
}
@media(max-width: 991px) {
  .home-video {
    object-fit: cover;
  }
}
@media(max-width: 767px) {
  .home-video {
    object-fit: cover;
  }
}
@media(max-width: 479px) {
  .home-video {
    width: 100%;
    min-width: auto;
    object-fit: cover;
  }
  .home-full-body {
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 12px;
    padding-right: 12px;
  }
  .home-logo-container {
    padding-top: 6vh;
  }
  .home-info-container {
    position: relative;
  }
  .home-row {
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
  .home-left-column {
    min-width: 100%;
    margin-top: 10vh;
  }
  .home-text {
    color: rgb(255, 255, 255);
    font-size: 10vw;
    font-style: normal;
    font-family: Montserrat;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 2vh;
  }
  .home-text1 {
    font-size: 4vw;
  }
  .home-right-column {
    gap: 0;
    width: 100%;
    height: auto;
    position: relative;
    align-items: flex-start;
    margin-bottom: 4vh;
    flex-direction: row;
    justify-content: space-between;
  }
  .home-container1 {
    width: 55%;
    height: 100%;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
  }
  .home-container2 {
    width: 40%;
    align-self: stretch;
    justify-content: center;
  }
  .home-image1 {
    width: 100%;
    height: auto;
    align-self: center;
  }
}
</style>
