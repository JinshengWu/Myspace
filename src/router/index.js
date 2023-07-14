import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserList from '../views/UserList.vue'
import UserProfile from '../views/UserProfile.vue'
import LoginView from '../views/LoginView.vue'
import RegistView from '../views/RegistView.vue'
import NotFoundView from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/userlist',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/userprofile',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/register',
    name: 'RegistView',
    component: RegistView
  },
  {
    path: '/404',
    name: '404',
    component: NotFoundView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
