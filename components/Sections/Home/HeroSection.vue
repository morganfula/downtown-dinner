<template>
  <section v-if="homePage" class="section hero is-flex">
    <div class="image" v-if="this.$store.state.window < 577">
      <img
        class=" images"
        :src="homePage.acf.header_bg.desktop_bg.url"
        alt=""
      />
    </div>
    <div class="image" v-else>
      <img class=" images" :src="homePage.acf.header_bg.mobile_bg.url" alt="" />
    </div>
    <div class="overlay"></div>
    <div class="main_title">
      <h1 class="big">{{ header.main_title }}</h1>
      <h3 class="sub">{{ header.sub_title }}</h3>
    </div>
  </section>
</template>

<script>
import LazyImage from "@/components/UI/LazyImage";
export default {
  name: "HeroSection",
  props: ["header", "homePage"],
  components: {
    IconArrow: () => import("@/components/Icons/IconArrow"),
    LazyImage
  }
};
</script>

<style lang="scss" scoped>
.hero {
  background-size: cover;
  height: 100vh;
  width: 100vw;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  // padding: 0 $gap;
  margin: 0;
  // background-position: 75%;
  background-color: #57a2d8;

  .images {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    filter: grayscale(100%);
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    background: #57a2d8;
    opacity: 0.7;
  }

  .main_title {
    position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 300;

    .big {
      font-family: "Roboto Mono", monospace;
      font-weight: bolder;
      font-size: 160px;
      // -webkit-text-stroke-width: 1px;
      // -webkit-text-stroke-color: $white;
      letter-spacing: 8px;
      color: transparent;
      margin: 0;
      padding-bottom: $gap;
    }

    @supports (-webkit-text-stroke: 1px white) {
      .big {
        -webkit-text-stroke: 1px white;
        -webkit-text-fill-color: white;
      }
    }

    .sub {
      font-family: "Nunito Sans", sans-serif;
      -webkit-text-stroke: 1px $white;
      font-size: 48px;
      color: $white;
      margin: 0;
      padding: 0;
    }
  }
}

.section {
  position: relative;
  .bg {
    position: absolute;
  }
}

@media (max-width: $tablet) {
  .hero {
    .main_title {
      position: absolute;
      // top: 50%;
      // left: 50%;
      // transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      flex-direction: column;
      z-index: 300;

      .big {
        font-family: "Roboto Mono", monospace;
        font-weight: bolder;
        font-size: 48px;
        -webkit-text-stroke: 1px $white;
        letter-spacing: 8px;
        color: transparent;
        margin: 0;
        padding-bottom: 16px;
      }

      .sub {
        font-family: "Nunito Sans", sans-serif;
        -webkit-text-stroke: 1px $white;
        font-size: 30px;
        color: $white;
        margin: 0;
        padding: 0;
      }
    }
  }
}
</style>
