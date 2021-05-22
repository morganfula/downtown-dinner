<template lang="html">
  <div class="wrapper">
    <!-- <button class="change__style" @click="changeStyle()">Change Style</button> -->
    <tabs :mode="mode">
      <tab title="WEEKDAYS">
        <div class="grid-container">
          <div class="col_1">
            <div v-html="menus.acf.weekdays.col_1"></div>
          </div>
          <div class="col_2">
            <div v-html="menus.acf.weekdays.col_2"></div>
          </div>
          <div class="col_3">
            <div v-html="menus.acf.weekdays.col_3"></div>
          </div>
          <div class="col_4">
            <div v-html="menus.acf.weekdays.col_4"></div>
          </div>
        </div>
      </tab>

      <tab title="BRUNCH">
        <div class="grid-container">
          <div class="col_1">
            <div v-html="menus.acf.brunch.col_1"></div>
          </div>
          <div class="col_2">
            <div v-html="menus.acf.brunch.col_2"></div>
          </div>
          <div class="col_3">
            <div v-html="menus.acf.brunch.col_3"></div>
          </div>
          <div class="col_4">
            <div v-html="menus.acf.brunch.col_4"></div>
          </div>
        </div>
      </tab>

      <tab title="DRINKS">
        <div class="grid-container">
          <div class="col_1">
            <div v-html="menus.acf.drinks.col_1"></div>
          </div>
          <div class="col_2">
            <div v-html="menus.acf.drinks.col_2"></div>
          </div>
          <div class="col_3">
            <div v-html="menus.acf.drinks.col_3"></div>
          </div>
          <div class="col_4">
            <div v-html="menus.acf.drinks.col_4"></div>
          </div>
        </div>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from "@/components/UI/Tab.vue";
import Tabs from "@/components/UI/Tabs.vue";
import Config from "~/assets/config";

export default {
  async fetch({ app, store }) {
    if (!store.state.menus.length) {
      const menu = await app.$http.$get(Config.wpDomain + Config.api.menus);
      store.commit("setMenus", menu);
    }
  },
  components: {
    Tab,
    Tabs
  },
  data() {
    return {
      mode: "dark"
    };
  },
  methods: {
    changeStyle() {
      if (this.mode === "dark") {
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
    }
  },
  computed: {
    menus() {
      if (this.$store.state.menus == null) return false;
      return this.$store.state.menus;
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: "Karla", sans-serif;
}
.wrapper {
  width: 100%;
  min-height: 100vh;
  background-color: #f8f8f8;
  margin: 0;
  padding: 20px;
  margin-top: 60px;
}

.change__style {
  background-color: #eee;
  font-size: 1em;
  margin-bottom: 10px;
  padding: 5px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  gap: 0px 16px;
  grid-template-areas: "col_1 col_2 col_3 col_4";
}

.col_1 {
  grid-area: col_1;
}

.col_2 {
  grid-area: col_2;
}

.col_3 {
  grid-area: col_3;
}

.col_4 {
  grid-area: col_4;
}

@media (max-width: $tablet) {
  .wrapper {
    width: 100%;
    min-height: 100vh;
    background-color: #f8f8f8;
    margin: 0;
    padding: 20px;
    margin-top: 40px;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    gap: 8px 0px;
    grid-template-areas:
      "col_1"
      "col_2"
      "col_3"
      "col_4";
  }
  .co_1 {
    grid-area: co_1;
  }
  .col_2 {
    grid-area: col_2;
  }
  .col_3 {
    grid-area: col_3;
  }
  .col_4 {
    grid-area: col_4;
  }
}
</style>
