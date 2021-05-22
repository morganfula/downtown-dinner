<template>
  <section class="news container">
    <div class="grid-container ">
      <div class="left">
        <img :src="news.acf.image.url" alt="" />
      </div>
      <div class="right">
        <div v-html="acf"></div>
      </div>
    </div>
  </section>
</template>

<script>
import Config from "~/assets/config";

export default {
  async fetch({ app, store }) {
    if (!store.state.newsPage.length) {
      const news = await app.$http.$get(Config.wpDomain + Config.api.newsPage);

      console.log(news);
      store.commit("setNews", news);
    }
  },
  computed: {
    news() {
      if (this.$store.state.newsPage == null) return false;
      return this.$store.state.newsPage;
    },
    acf() {
      if (this.$i18n.locale === "fr") {
        return this.news.acf.text_fr;
      } else {
        return this.news.acf.text_en;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.news {
  margin-top: 80px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    padding: 0;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    gap: $gap;
    grid-template-areas: "left right";
  }

  .left {
    grid-area: left;

    // background: red;
  }

  .right {
    grid-area: right;
    // background: blue;
  }
}

@media (max-width: $tablet) {
  .news {
    margin-top: 80px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      padding: 0;
    }
    .grid-container {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 1fr);
      gap: $gap;
      grid-template-areas:
        "left"
        "right";
    }

    .left {
      grid-area: left;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 300px;
        height: auto;
      }
    }

    .right {
      grid-area: right;
      padding: 0 $gap;
      padding-bottom: $gap;
    }
  }
}
</style>
