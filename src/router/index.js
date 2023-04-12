import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


import Crear from '@/components/Crear.vue'; 
import Editar from '@/components/Editar.vue' 
import Listar from '@/components/Listar.vue' 

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, 
  {
    path: '/crear',
    name: 'crear',
    component: Crear
  },
  {
    path: '/editar/:id',
    name: 'editar',
    component: Editar
  },
  {
    path: '/listar',
    name: 'listar',
    component: Listar
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
