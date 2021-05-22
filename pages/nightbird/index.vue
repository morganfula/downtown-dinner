<template>
  <section class="nightbird">
    <div class="grid-container">
      <div class="left">
        <img
          :src="nightBird.acf.background.left_bg.url"
          alt=""
          class="left-img"
        />
        <div class="text">
          <h2>{{ acf.title }}</h2>
          <div v-html="acf.description"></div>
          <div></div>
        </div>
      </div>

      <div class="right">
        <img :src="nightBird.acf.background.right_bg.url" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
import Config from "~/assets/config";

export default {
  async fetch({ app, store }) {
    if (!store.state.nightBird.length) {
      const nightbird = await app.$http.$get(
        Config.wpDomain + Config.api.nightBird
      );

      store.commit("setNightbird", nightbird);
    }
  },
  computed: {
    nightBird() {
      if (this.$store.state.nightBird == null) return false;
      return this.$store.state.nightBird;
    },
    acf() {
      if (this.$i18n.locale === "fr") {
        return this.nightBird.acf.nightbird_fr;
      } else {
        return this.nightBird.acf.nightbird_en;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  height: 100%;
  width: 100vw;

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: "left right";

    .left {
      grid-area: left;
      position: relative;
      height: 100vh;
      .left-img {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }
      .text {
        margin-top: 120px;
        padding: 0 $gap;
        color: $white;
        height: 100%;
      }
    }
    .right {
      grid-area: right;
      height: 100%;
      width: 100%;
    }
  }
}

@media (max-width: $tablet) {
  section {
    .grid-container {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 1fr);
      gap: 0px 0px;
      grid-template-areas:
        "left"
        "right";

      .left {
        grid-area: left;
        height: 100%;
        padding-bottom: $gap;

        position: relative;
        .left-img {
          position: absolute;
          z-index: -1;
        }
        .text {
          padding: 0 $gap;
          color: white;
        }
      }
      .right {
        grid-area: right;
        height: 100%;
        width: 100%;
      }
    }
  }
}

.blue {
  background: blue;
  color: $white;
  border: none;
  margin-bottom: 24px;
}
</style>
