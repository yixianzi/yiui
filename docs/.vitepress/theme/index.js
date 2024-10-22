import DefaultTheme from "vitepress/theme";
import "@yiui/theme-chalk/index.scss";
import YiUI from "@yiui/components";
import Preview from "./preview/index.vue";
import "highlight.js/styles/base16/summerfruit-light.css"; // 主题
import hljsVuePlugin from "@highlightjs/vue-plugin";

export default {
    ...DefaultTheme,
    enhanceApp: async({ app, router, siteData }) => {
        app.use(YiUI);
        app.component("preview", Preview);
        app.use(hljsVuePlugin);
    },
};