<template lang="html">
  <div :class="{ tabs__light: mode === 'light', tabs__dark: mode === 'dark' }">
    <ul class="tabs__header">
      <li
        v-for="(tab, index) in tabs"
        :key="tab.title"
        @click="selectTab(index)"
        :class="{ tab__selected: index == selectedIndex }"
      >
        {{ tab.title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: "light"
    }
  },
  data() {
    return {
      selectedIndex: 0, // the index of the selected tab,
      tabs: [] // all of the tabs
    };
  },
  created() {
    this.tabs = this.$children;
  },
  mounted() {
    this.selectTab(0);
  },
  methods: {
    selectTab(i) {
      this.selectedIndex = i;

      // loop over all the tabs
      this.tabs.forEach((tab, index) => {
        tab.isActive = index === i;
      });
    }
  }
};
</script>

<style lang="scss">
ul.tabs__header {
  display: block;
  list-style: none;
  margin: 0 0 0 20px;
  padding: 0;
}

ul.tabs__header > li {
  padding: 10px 20px;
  margin: 0;
  display: inline-block;
  margin-right: 5px;
  cursor: pointer;
}

ul.tabs__header > li.tab__selected {
  font-weight: bold;

  // border-bottom: 8px solid transparent;
}

.tab {
  display: inline-block;
  color: black;
  padding: 20px;
  min-width: 100%;
}

.tabs__light .tab {
  background-color: #fff;
}

.tabs__light li {
  background-color: #ddd;
  color: $secondary;
}

.tabs__light li.tab__selected {
  background-color: #fff;
  color: #83ffb3;
}

.tabs__dark .tab {
  background-color: $white;
  color: $secondary;
}

.tabs__dark li {
  background-color: #ddd;
  color: #aaa;
}

.tabs__dark li.tab__selected {
  background-color: $white;
  color: $secondary;
}
</style>
