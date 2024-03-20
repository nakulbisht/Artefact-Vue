<template>
  <nav class="footer-nav" v-bind:class="rootClassName">
    <router-link to="/about" class="footer-about">{{ about }}</router-link>
    <router-link to="/contact" class="footer-contact">{{ contact }}</router-link>
    <router-link to="/cookies" class="footer-contact1">{{ cookies }}</router-link>
    <router-link to="/privacy" class="footer-privacy">{{ privacy }}</router-link>
    <router-link to="/terms" class="footer-terms">{{ terms }}</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    terms: {
      type: String,
      default: 'Terms',
    },
    about: {
      type: String,
      default: 'About',
    },
    privacy: {
      type: String,
      default: 'Privacy',
    },
    cookies: {
      type: String,
      default: 'Cookies',
    },
    rootClassName: String,
    contact: {
      type: String,
      default: 'Contact',
    },
  },
}
</script>

<style scoped>
.footer-nav {
  width: 100%;
  display: flex;
  align-self: center;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: var(--dl-space-space-unit);
  justify-content: space-between;
}
.footer-about {
  color: white;
  font-size: 14px;
  align-self: flex-end;
  font-family: "monospace";
  font-weight: 300;
  text-transform: uppercase;
  text-decoration: none;
}
.footer-contact {
  color: white;
  font-size: 14px;
  align-self: flex-end;
  font-family: "monospace";
  font-weight: 300;
  text-transform: uppercase;
  text-decoration: none;
}
.footer-contact1 {
  color: white;
  font-size: 14px;
  align-self: flex-end;
  font-family: "monospace";
  font-weight: 300;
  text-transform: uppercase;
  text-decoration: none;
}
.footer-privacy {
  color: white;
  font-size: 14px;
  align-self: flex-end;
  font-family: "monospace";
  font-weight: 300;
  text-transform: uppercase;
  text-decoration: none;
}
.footer-terms {
  color: white;
  font-size: 14px;
  align-self: flex-end;
  font-family: "monospace";
  font-weight: 300;
  text-transform: uppercase;
  text-decoration: none;
}
.footer-root-class-name {
  position: 0px;
}
.footer-root-class-name1 {
  width: 100%;
  position: 0px;
  max-width: auto;
}
.footer-root-class-name2 {
  left: 0px;
  width: 100%;
  bottom: 0px;
  position: 0px;
}
@media(max-width: 479px) {
  .footer-about {
    font-size: 12px;
  }
  .footer-contact {
    font-size: 12px;
  }
  .footer-contact1 {
    font-size: 12px;
  }
  .footer-privacy {
    font-size: 12px;
  }
  .footer-terms {
    font-size: 12px;
  }
}
</style>
