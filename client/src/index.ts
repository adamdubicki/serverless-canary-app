
import Vue from "vue";
import VueApollo from 'vue-apollo';
import Vuetify from 'vuetify';
import Router from 'vue-router'

import vuetify from './plugins/vuetify'
import apolloProvider from './plugins/apollo';
import router from './plugins/router';

import Dashboard from "./pages/Dashboard.vue";
import Login from './pages/Login.vue';

import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/dist/vuetify.min.css';

/** Add in plugins */
Vue.use(Vuetify);
Vue.use(VueApollo)
Vue.use(Router)


let v = new Vue({
  el: "#app",
  template: `
    <template>
      <v-app>
        <v-content>
          <router-view />
        </v-content>
      </v-app>
    </template>
  `,
  /** Plugin configuration */
  apolloProvider,
  vuetify,

  /** Vue Router */
  router,

  /** Components */
  components: {
    Dashboard,
    Login
  }
});