import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import messagePlugin from '@/utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css'





import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.config.productionTip = false


firebase.initializeApp(
{
    apiKey: "AIzaSyDCw6NKP-n-AGvV9-R6WKjgobI8Bb7_pjU",
    authDomain: "social-napoleon.firebaseapp.com",
    databaseURL: "https://social-napoleon.firebaseio.com",
    projectId: "social-napoleon",
    storageBucket: "social-napoleon.appspot.com",
    messagingSenderId: "474021568276",
    appId: "1:474021568276:web:29eb9680fdfe7fc48dac01"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
   app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
 
})


