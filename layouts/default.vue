<template>
  <div class="app">
    <!-- <cookie-box /> -->
    <!-- <the-nav /> -->
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />

    <nuxt />
    <the-footer :footer="footer" />
  </div>
</template>

<script>
import TheHeader from "@/components/Nav/TheHeader";
import TheSidenav from "@/components/Nav/TheSidenav";
// import TheSideNavRightToggle from "@/components/Nav/TheSideNavRightToggle";

export default {
  async fetch({ app, store }) {
    if (!store.state.footer.length) {
      const footer = await app.$http.$get(Config.wpDomain + Config.api.footer);
      store.commit("setFooter", footer);
    }
  },
  components: {
    TheHeader,
    TheSidenav,

    TheFooter: () => import("@/components/Footers/TheFooter"),
    CookieBox: () => import("@/components/UI/CookieBox")
  },
  data() {
    return {
      displaySidenav: false,
      displaySidenavRight: false
    };
  },
  computed: {
    footer() {
      if (this.$store.state.footer == null) return false;
      return this.$store.state.footer;
    }
  }
};
</script>

<style>
body {
  overflow: initial;
}
</style>
