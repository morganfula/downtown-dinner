<template>
  <div class="grid-container">
    <div class="div1">
      <img :src="main.first.background.url" alt="" class="image" />
      <div class="info">
        <div v-html="main.first.text"></div>
        <a
          href="https://www.smood.ch/fr/livraison-retrait/restaurants/lausanne/downtown-diner"
          class="btn--is-white"
          target="_blank"
        >
          {{ main.first.button }}
        </a>
      </div>
    </div>

    <div class="div2">
      <div class="info">
        <div v-html="main.second.text"></div>
        <nuxt-link to="/menus" class="btn">
          {{ main.second.button }}
        </nuxt-link>
      </div>
    </div>
    <div class="div3 img-hover-zoom">
      <img :src="main.second.background.url" alt="" class="image" />
    </div>

    <div class="div4 img-hover-zoom">
      <img :src="main.third.background.url" alt="" class="image" />
    </div>
    <div class="div5">
      <div class="info">
        <div v-html="main.third.text"></div>

        <nuxt-link to="/menus" class="btn">
          {{ main.third.button }}
        </nuxt-link>
      </div>
    </div>

    <div class="div6">
      <img :src="main.fourth.background.url" alt="" class="image" />
      <div class="info">
        <div>
          <h2>NIGHTBIRD</h2>
        </div>
        <div v-html="main.fourth.text"></div>

        <nuxt-link to="/nightbird" class="btn--is-white">
          En savoir plus
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainSection",
  props: ["main", "animateHeader"]
};
</script>

<style lang="scss" scoped>
.grid-container {
  // height: 150vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 0px 0px;
  grid-template-areas:
    "div1 div1"
    "div2 div3"
    "div4 div5"
    "div6 div6";

  .div1 {
    grid-area: div1;
    position: relative;
    height: 600px;
    color: #fff;

    .image {
      position: absolute;
      filter: brightness(50%);
    }

    .info {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .div2 {
    grid-area: div2;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: $gap;
    background: #f5f5f5;

    .info {
      max-width: 680px;
    }
  }

  .div3 {
    grid-area: div3;
    height: 600px;
    background-color: green;
  }

  .div4 {
    grid-area: div4;
    height: 600px;

    .image {
    }
  }

  .div5 {
    grid-area: div5;
    padding: $gap;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f5f5f5;
  }

  .div6 {
    grid-area: div6;
    position: relative;
    height: 600px;

    .image {
      position: absolute;
      filter: brightness(50%);
    }
    .info {
      min-width: 250px;
      color: $white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .img-hover-zoom {
    overflow: hidden;

    img {
      transition: transform 0.5s ease;
    }

    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
}

@media (max-width: $mobile-large) {
  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    gap: 0px 0px;
    grid-template-areas:
      "div1"
      "div2"
      "div3"
      "div5"
      "div4"
      "div6";
  }
}
</style>
