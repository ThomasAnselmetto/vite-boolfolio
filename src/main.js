import { createApp } from "vue";
import { router } from "./router/index";
import "bootstrap/dist/css/bootstrap.min.css";
import AppLoader from './components/AppLoader.vue';
import App from "./App.vue";

// utilizzazione di mount app.use(router) aggiunto oltre al vue base aggiunta const app =
const app = createApp(App);

// ? importo globalmente AppLoader devo passare i 2 parametri
app.component('AppLoader',AppLoader);

app.use(router);
app.mount("#app");
