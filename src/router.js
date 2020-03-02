import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard';
import Project from './views/Project';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Dashboard 
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    },
    {
      path: "/team",
      name: "Team",
      component: () => import('./views/Team')
    }
  ]
})