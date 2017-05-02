import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Topic from '@/views/Topic';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/topic/:topic',
      name: 'topic',
      component: Topic,
    },
  ],
});
