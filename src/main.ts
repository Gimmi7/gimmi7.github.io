import { createApp } from 'vue';
import App from './App.vue';

import "@/styles/index.scss";
import "uno.css";
// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss";

import { setupI18n } from './i18n/index';
import { setupRouter } from './router/router';

const app = createApp(App);
setupI18n(app);
setupRouter(app);
app.mount("#app");
