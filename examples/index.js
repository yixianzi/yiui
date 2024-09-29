import { createApp } from "vue";
import App from "./App.vue";
import YiUI from '@yiui/components'

const app = createApp(App);
app.use(YiUI);
app.mount("#app");