<template>
  <main class="home" v-if="homePage">
    <hero-section :homePage="homePage" :header="header" />
    <main-section :main="main" />
  </main>
</template>

<script>
import debounce from "lodash/debounce";
import HeroSection from "@/components/Sections/Home/HeroSection";
import MainSection from "@/components/Sections/Home/MainSection";
import Config from "~/assets/config";
import get from "lodash/get";
import Defer from "@/mixins/Defer";

export default {
  async fetch({ app, store }) {
    if (!store.state.homePage.length) {
      const home = await app.$http.$get(Config.wpDomain + Config.api.homePage);
      store.commit("setHomepage", home);
    }
  },
  mixins: [Defer()],
  data() {
    return {
      animateHeader: false
    };
  },
  components: {
    HeroSection,
    MainSection
  },
  head() {
    return { title: "Home" };
  },
  mounted() {
    if (process.client) {
      this.animateHeader = true;

      if (this.$route.hash) {
        if (process.client) {
          window && window.scrollTo(0, 0);
        }
      }
    }
  },
  methods: {
    // hideMenu() {
    //   this.$store.commit("hideMenuBg");
    // },
    // showMenu(response) {
    //   if (
    //     response.index >= 0 &&
    //     response.direction === "down" &&
    //     !this.$store.state.menuScrolled
    //   ) {
    //     this.animateWork = true;
    //     this.$store.dispatch("showMenu");
    //   }
    // }
  },
  computed: {
    homePage() {
      if (this.$store.state.homePage == null) return false;
      return this.$store.state.homePage;
    },
    header() {
      if (this.$i18n.locale === "fr") {
        return this.homePage.acf.header_fr;
      } else {
        return this.homePage.acf.header_en;
      }
    },
    main() {
      if (this.$i18n.locale === "fr") {
        return this.homePage.acf.main_fr;
      } else {
        return this.homePage.acf.main_en;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// h1 {
//   @include media(sm) {
//     max-width: 480px;
//     padding-left: 0;
//   }
// }

// section {
//   margin: $gap / 1.5 0;
//   width: 100%;

//   @include media(md) {
//     margin: $gap * 3 auto;
//   }
// }
</style>
