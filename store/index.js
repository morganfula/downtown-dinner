import Config from "~/assets/config.js";
import axios from "axios";

export const strict = false;

export const state = () => ({
  pages: [],
  homePage: [],
  nightBird: [],
  newsPage: [],
  menus: [],
  footer: [],
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
  SET_PAGES: (state, pages) => {
    state.pages = pages;
  },

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
  },

  setNightbird(state, obj) {
    state.nightBird = obj;
  },

  setNews(state, obj) {
    state.newsPage = obj;
  },

  setMenus(state, obj) {
    state.menus = obj;
  },

  setFooter(state, obj) {
    state.footer = obj;
  },

  windowResize(state, size) {
    state.window = size;
  },
  setConnection(state, type) {
    state.connection = type;
  }
};
export const actions = {
  async getPages({ state, commit }) {
    if (state.pages.length) return;
    try {
      let pages = await axios
        .get(Config.wpDomain + Config.api.pages)
        .then(res => res.data);

      pages = pages.map(({ id, slug, title, content, acf }) => ({
        id,
        slug,
        title,
        content,
        acf
      }));

      commit("SET_PAGES", pages);
    } catch (err) {
      console.error("getPages", err);
    }
  },

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
