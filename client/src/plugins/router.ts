import VueRouter from 'vue-router';
import Dashboard from "../pages/Dashboard.vue";
import Login from '../pages/Login.vue';

const routes = [
  { path: '/dashboard', component: Dashboard },
  { path: '/login', component: Login }
]

export default new VueRouter({ routes })