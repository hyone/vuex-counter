import Vue from 'vue';
import App from './App.vue';
import store from './store';
import 'bulma/css/bulma.css';

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});