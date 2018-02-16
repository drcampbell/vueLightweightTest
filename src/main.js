// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';

Vue.use(Vuex);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    count: 0,
    forms: {},
  },
  strict: process.env.NODE_ENV !== 'production',
  mutations: {
    increment(state) {
      state.count += 1;
    },
    storeForm(state, form) {
      state.forms[form.name] = form.formData;
    },
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
