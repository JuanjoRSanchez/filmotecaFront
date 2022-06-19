import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuePaginate  from 'vue-paginate' 

Vue.use(vuePaginate);

const options = {
  router: router,
  store: store,
  render: function (createElement) {
    return createElement(App);
  }
};

const app = new Vue(options);
app.$mount("#app");
