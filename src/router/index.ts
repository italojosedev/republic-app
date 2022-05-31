import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsersView from '../views/UsersView.vue'
import LoginView from '../views/LoginView.vue'
import UserView from '../views/UserView.vue'
import RegisterView from '../views/RegisterView.vue'
import { nextTick } from 'vue'
import WelcomeViewVue from '@/views/WelcomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/Welcome',
      name: 'Welcome',
      component: WelcomeViewVue
    },
    {
      path: '/register',
      name: 'registro',
      component: RegisterView
    },
    {
      path: '/',
      name: 'Início',
      component: HomeView
    },
    {
      path: '/users',
      name: 'Usuários',
      component: UsersView
    },
    {
      path: '/users/new',
      name: 'Novo Usuário',
      component: UserView
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  let isLogged = false;
  const routesFree = ['login', 'registro', 'Welcome'];

  if (isLogged && to.name !== 'login') next();
  if (!isLogged && routesFree.includes(to?.name || 'login')) next();
  if (isLogged && to.name === 'login') {
    next({
      path: '/',
    })
  }
  if (!isLogged && to.name !== 'login') {
    next({
      path: '/login',
    })
  }

})
export default router
