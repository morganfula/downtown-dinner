<template>
  <div class="sidenav-container">
    <div v-if="show" class="sidenav-backdrop" @click="$emit('close')"></div>
    <transition name="slide-side">
      <div v-if="show" class="sidenav">
        <ul class="nav-list" @click="$emit('close')">
          <li class="nav-item">
            <nuxt-link :to="localePath('/')">HOME</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/news">NEWS</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link :to="localePath('/menus')">MENUS</nuxt-link>
          </li>

          <li class="nav-item">
            <nuxt-link to="/nightbird">NIGHTBIRD</nuxt-link>
          </li>
          <li class="nav-item">
            <a href="#footer">
              CONTACT
            </a>
          </li>

          <li class="nav-item house">
            <a href="https://blackbirdhouse.ch/">BLACKBIRD HOUSE ROLLE</a>
          </li>

          <ul class="socials">
            <li>
              <nuxt-link :to="switchLocalePath('en')">
                <img
                  src="../../assets/images/icons/united-kingdom.png"
                  alt=""
                />
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="switchLocalePath('fr')">
                <img src="../../assets/images/icons/france.png" alt="" />
              </nuxt-link>
            </li>
          </ul>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "TheSidenav",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
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
  left: 0;
}

.sidenav {
  height: 100%;
  width: 40vw;
  background-color: #f3de43;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
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

.house {
  margin-top: 128px;
}

.nav-item a {
  text-decoration: none;
  color: black;
  font-size: 1.3rem;
}

.nav-item a:hover,
.nav-item a:active {
  color: red;
}
.socials {
  display: none;
  // justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 30px;
  align-self: flex-end;
  margin-top: 2 * $gap;

  // position: absolute;
  // left: 50%;
  // transform: translateX(-50%);
}

.socials img {
  height: 30px;
  width: auto;
  padding-right: 16px;
}

@media (max-width: $tablet) {
  .sidenav {
    height: 100%;
    width: 100vw;
    background-color: #f3de43;
    z-index: 10000;
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    padding: 30px;

    .socials {
      display: flex;
    }
  }
}
</style>
