<template>
  <div class="header-container">
    <header
      class="the-header navdark"
      :class="{
        navclear: $route.path === '/' || $route.path === '/en',
        navdark: $route.path != '/' || $route.path != '/en'
      }"
    >
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />

      <!-- <div class="spacer"></div> -->
      <ul class="socials">
        <!-- <li>
          <a
            class="icon"
            href="https://twitter.com/bbirdlausanne?lang=en"
            target="_blank"
          >
            <img src="../../assets/images/icons/twitter.png" alt="" />
          </a>
        </li> -->
        <li>
          <a class="icon" href="https://vimeo.com/212492250" target="_blank">
            <img src="../../assets/images/icons/vimeo.png" alt="" />
          </a>
        </li>
        <li>
          <a
            class="icon"
            href="https://web.facebook.com/lausannediner/?_rdc=1&_rdr"
            target="_blank"
          >
            <img src="../../assets/images/icons/facebook.png" alt="" />
          </a>
        </li>
        <li>
          <a
            class="icon"
            href="https://www.instagram.com/blackbirdlausanne/?hl=en"
            target="_blank"
          >
            <img src="../../assets/images/icons/instagram.png" alt="" />
          </a>
        </li>
        <li class="nav-item house">
          <nuxt-link :to="switchLocalePath('en')">
            <img src="../../assets/images/icons/united-kingdom.png" alt="" />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="switchLocalePath('fr')">
            <img src="../../assets/images/icons/france.png" alt="" />
          </nuxt-link>
        </li>
      </ul>

      <nuxt-link :to="localePath('/reservation')" class="reservation-btn"
        >reservations</nuxt-link
      >
    </header>
  </div>
</template>

<script>
import TheSideNavToggle from "@/components/Nav/TheSideNavToggle";

export default {
  name: "TheHeader",

  components: {
    TheSideNavToggle
  }
};
</script>

<style lang="scss" scoped>
.header-container {
}

.the-header {
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: transparent;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 $gap;
}
.navdark {
  background: #000;
}

.navclear {
  background-color: transparent;
}

.reservation-btn {
  background: #fff;
  padding: 8px 16px;
  color: #000;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1.5px;
  text-align: center;
}

/* .spacer {
  flex: 1;
} */

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: black;
}

.socials {
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 30px;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.socials img {
  height: 30px;
  width: auto;
  padding: 0 16px;
}

.reservation {
  font-weight: bold;
  border: 2px solid white;
  padding: 6px 12px;
  letter-spacing: 2px;
}

.lang {
  padding: 0 $gap;
  a {
    color: $white;
  }
}
/* .icon {
  height: 30px !important;
  width: 30px !important;
} */
@media (max-width: $mobile-large) {
  .the-header {
    .socials {
      display: none;
    }
  }
}
</style>
