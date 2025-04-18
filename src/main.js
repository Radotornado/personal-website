import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import i18n from './i18n'

//import '@fortawesome/fontawesome-free/css/all.css'
//import '@fortawesome/fontawesome-free/css/brands.css'
//import '@mdi/font/css/materialdesignicons.css'; 

const app = createApp(App)

app.config.globalProperties.$scrollTo = (target) => {
  const element = document.getElementById(target)
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    })
  }
}

app.use(vuetify)
app.use(router)
app.use(i18n)

app.mount('#app')
