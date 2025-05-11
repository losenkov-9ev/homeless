import { createRouter, createWebHistory } from 'vue-router'
import { AppRoutes } from '@/app/router/router.ts'

import HomePage from '@/pages/HomePage.vue'
import LeadersPage from '@/pages/LeadersPage.vue'
import FriendsPage from '@/pages/FriendsPage.vue'
import BalancePage from '@/pages/BalancePage.vue'
import FAQPage from '@/pages/FAQPage/FAQPage.vue'
import RoulettePage from '@/pages/RoulettePage.vue'
import RestaurantPage from '@/pages/RestaurantPage.vue'

const routes = [
  { path: AppRoutes.HOME, component: HomePage },
  { path: AppRoutes.LEADERS, component: LeadersPage },
  { path: AppRoutes.FRIENDS, component: FriendsPage },
  { path: AppRoutes.RESTAURANT, component: RestaurantPage },
  { path: AppRoutes.BALANCE, component: BalancePage },
  { path: AppRoutes.FAQ, component: FAQPage },
  { path: AppRoutes.ROULETTE, component: RoulettePage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
