import router from "./router";
import { createApp } from "vue";
import App from "./App.vue";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import axios from "axios";
import("./assets/main.css");

// send credentials (cookie) with each request
axios.defaults.withCredentials = true;

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

createApp(App).use(router).use(vuetify).mount("#app");
