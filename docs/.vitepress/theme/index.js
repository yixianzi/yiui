import DefaultTheme from "vitepress/theme";
import "@yiui/theme-chalk/index.scss";
import YiUI from "@yiui/components";

export default {
    ...DefaultTheme,
    enhanceApp: async({ app, router, siteData }) => {
        app.use(YiUI);
    },
};