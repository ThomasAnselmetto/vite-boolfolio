import { createApp } from "vue";
import { router } from "./router/index";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";

// utilizzazione di mount app.use(router) aggiunto oltre al vue base aggiunta const app =
const app = createApp(App);
app.use(router)
app.mount("#app");
