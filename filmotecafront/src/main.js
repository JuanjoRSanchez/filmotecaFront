import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// Opciones de Vue
const options = {
  router: router,
  store: store,
  render: function(createElement) {
    return createElement(App);
  }
};

const app = new Vue(options);
app.$mount("#app");