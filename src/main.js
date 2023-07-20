import { createApp } from 'vue'
import App from './App.vue' 
import  { router }  from './router' //setting vue 

createApp(App) 
.use(router) 
.mount('#app')
