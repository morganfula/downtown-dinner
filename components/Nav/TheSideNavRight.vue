<template>
  <div class="sidenav-container">
    <div v-if="show" class="sidenav-backdrop" @click="$emit('close')"></div>
    <div align="center">
      <iframe
        src="https://module.lafourchette.com/fr_CH/module/591337-ab9c0"
        style="width: 100%; min-height:600px; border:none; scrolling:yes;"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSidenavright",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  right: 0;
}

.sidenav {
  height: 100%;
  width: 40vw;
  background-color: #f3de43;
  z-index: 10000;
  position: fixed;
  top: 0;
  right: 0;
  box-sizing: border-box;
  padding: 30px;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  font-weight: bolder;
  letter-spacing: 2px;
}

.nav-item {
  margin: 20px 0;
}

.nav-item a {
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
}

.nav-item a:hover,
.nav-item a:active {
  color: red;
}
</style>
