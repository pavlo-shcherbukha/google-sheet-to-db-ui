//import Vue from 'vue'
//import VueRouter from 'vue-router'

import { createRouter, createWebHistory } from 'vue-router';

//import store from '@/store/index.js';

import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
//import Robot from '../views/Robot.vue'
//import RobotConfig from '../views/RobotConfig.vue'



const routes = [
 /* {
    path: '/',
    name: 'Home',
    component: Home
  },*/
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: Login
  },
  {
    path: '/',
    name: 'idx',
    meta: {layout: 'main', auth: true},
    component: Home
  },
  {
    path: '/index',
    name: 'index',
    meta: {layout: 'main', auth: true},
    component: Home
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {layout: 'main', auth: true},
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/empsgrd',
    name: 'empsgrd',
    meta: {layout: 'main', auth: true},
    component: () => import('../views/EmpsGrd.vue')
  },
  {
    path: '/table2',
    name: 'table2',
    meta: {layout: 'main', auth: true},
    component: () => import('../views/Tableview.vue')
  },
  {
    path: '/table3',
    name: 'table3',
    meta: {layout: 'main', auth: true},
    component: () => import('../views/Tableview-3.vue')
  },
  {
    path: '/mboxes',
    name: 'mboxes',
    meta: {layout: 'main', auth: true},
    component: () => import('../views/MessageBoxes.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  //const currentUser = null;
  //router.app.config.globalProperties
  //const isKeyLoaded = store.getters['iitcrypto/isKeyLoaded'];
  
  //$store.getters['iitcrypto/isKeyLoaded'];
  //console.log( 'router=' + JSON.stringify(  router )  );
  //router.app.config.globalProperties.$store.getters['iitcrypto/isKeyLoaded'];
  
  //const requireAuth = to.matched.some(record => record.meta.auth)

  //router.app.config.globalProperties.$addlogmsg('Router MEssage');
  /*
  if (requireAuth && !isKeyLoaded) {
    next('/login');
  } else {
    next();
  }*/

  next();
});


export default router
