import Config from "~/assets/config.js";

export const strict = false;

export const state = () => ({
  homePage: [],
  nightBird: [],
  newsPage: [],
  store: [],
  window: 320,
  connection: null,
  navOpen: false,
  current: null,
  modalOpen: false,
  menuScrolled: false,
  menuScrolledDone: false
});

export const mutations = {
  resetMenus(state) {
    state.modalOpen = false;
    state.navOpen = false;
  },
  hideMenuBg(state) {
    state.menuScrolled = false;
    state.menuScrolledDone = false;
  },
  showMenuBg(state) {
    state.menuScrolled = true;
  },
  showMenuBgDone(state) {
    state.menuScrolledDone = true;
  },
  toggleMenu(state) {
    if (process.browser) {
      state.navOpen = !state.navOpen;
      state.modalOpen = !state.modalOpen;
      let body = document.querySelector("body");
      if (body) {
        body.style.overflow =
          body.style.overflow === "hidden" ? "visible" : "hidden";
      }
    }
  },
  setHomepage(state, obj) {
    state.homePage = obj;
    // console.log(obj);
  },

  setNightbird(state, obj) {
    state.nightBird = obj;
    // console.log(obj);
  },

  setNews(state, obj) {
    state.newsPage = obj;
    // console.log(obj);
  },
  windowResize(state, size) {
    state.window = size;
  },
  setConnection(state, type) {
    state.connection = type;
  }
};
export const actions = {
  // we need to set timeouts to both states for the delay to kick in
  async showMenu({ commit }) {
    await setTimeout(() => {
      commit("showMenuBg");
    }, 200);
    await setTimeout(() => {
      commit("showMenuBgDone");
    }, 600);
  },
  resetScroll({ commit }) {
    if (process.browser) {
      let body = document.querySelector("body");
      if (body) {
        body.style.overflow = "auto";
      }
    }
    commit("resetMenus");
  }
};
