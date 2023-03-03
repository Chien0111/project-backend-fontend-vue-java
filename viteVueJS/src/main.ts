import * as Vue from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import routerPath from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import { messages } from "./locales/language";
import { createI18n } from "vue-i18n";

const routerHistory = createWebHistory();
const pinia = createPinia();

const router = createRouter({
  history: routerHistory,
  routes: routerPath,
});

export const i18n = createI18n({
  locale: "vn",
  messages,
});

const app = Vue.createApp(App);

app.use(i18n);
app.use(router);
app.use(Antd);
app.use(pinia);
app.mount("#app");
