import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router' //setting vue 
import $ from 'jquery';

let app = createApp(App);
// Object.defineProperty(Vue.prototype, '$jQuery', { value: $ });

app.config.globalProperties.$jQuery = $

app.use(router)
    .mount('#app')