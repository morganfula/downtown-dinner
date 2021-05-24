"use strict";

const apiEndpoint = "blackbirddinerwpengine.com"; // change api.moustachedesign.xyz to your wordpress url

export default {
  appTitleShort: "Downtown Diner",
  appTitle: "Downtown Diner Lausanne",
  appTitleShort: "downtown diner",
  appDescription: "Black Bird Downtown",
  appThemeColor: "#ffffff ",
  appBgColor: "#00172c ",
  appIcon: "assets/icon.png",
  // these are the rest api endpoints and your wordpress url
  client: `https://${apiEndpoint}`,
  wpDomain: `https://${apiEndpoint}/wp-json`,
  url: "https://www.downtown-dinner.ch/", // your website url
  loadDbName: "[starter_wp]", // db name if needed
  api: {
    homePage: "/wp/v2/pages/357",
    nightBird: "/wp/v2/pages/434",
    newsPage: "/wp/v2/pages/470",
    menus: "/wp/v2/pages/533",
    footer: "/wp/v2/pages/591",

    // the [page_id] from WordPress
    // this url will hit an endpoint for contact form 7 plugin
    postFormContact: "/contact-form-7/v1/contact-forms/[form_id]/feedback" // change {form_id} with the contact form 7 id provided
  }
};
