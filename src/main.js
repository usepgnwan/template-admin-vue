import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router' //setting vue 
import $ from 'jquery';
import mixin from './router/mixin'

let app = createApp(App);
// Object.defineProperty(Vue.prototype, '$jQuery', { value: $ });

app.config.globalProperties.$jQuery = $
app.mixin(mixin)

app.use(router)
    .mount('#app')