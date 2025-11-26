import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/HomeView.vue'
import About from '../pages/AboutView.vue'
import Login from '../pages/LoginView.vue'
import products from '../pages/ProductsView.vue'
import Cart from '../pages/CartView.vue'
import NotFound from '../pages/NotFoundView.vue'

const routes = [
  {path: '/', component:Home},
  {path: '/about', component:About},
  {path: '/login', component:Login},
  {path: '/products', component:products},
  {path: '/cart', component:Cart},
  {path: '/:pathMatch(.*)*', name:'NotFound', component:NotFound}
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
