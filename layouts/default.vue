<template>
  <div class="app">
    <!-- <cookie-box /> -->
    <!-- <the-nav /> -->
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />

    <nuxt />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from "@/components/Nav/TheHeader";
import TheSidenav from "@/components/Nav/TheSidenav";
import TheSideNavRightToggle from "@/components/Nav/TheSideNavRightToggle";

export default {
  components: {
    TheHeader,
    TheSidenav,
    TheSideNavRightToggle,
    TheFooter: () => import("@/components/Footers/TheFooter"),
    CookieBox: () => import("@/components/UI/CookieBox")
  },
  data() {
    return {
      displaySidenav: false,
      displaySidenavRight: false
    };
  }
};
</script>

<style>
body {
  overflow: initial;
}
</style>
