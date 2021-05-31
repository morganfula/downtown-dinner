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

import { mapState, mapGetters, mapActions } from "vuex";

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
    ...mapActions(["getPages"])
  },
  computed: {
    ...mapState(["pages"]),

    homePage() {
      return this.pages.find(page => page.slug === "home-2021");
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
  },
  created() {
    this.getPages();
  }
};
</script>

<style lang="scss" scoped></style>
