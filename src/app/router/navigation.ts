import { AppRoutes } from '@/app/router/router.ts'

import HomeIcon from '@/shared/assets/icons/home.svg'
import FriendsIcon from '@/shared/assets/icons/friends.svg'
import RestaurantIcon from '@/shared/assets/icons/restaurant.svg'
import BalanceIcon from '@/shared/assets/icons/balance.svg'

export interface NavItem {
  path: string
  label: string
  icon?: unknown
}

export const NAVIGATION: NavItem[] = [
  { path: AppRoutes.HOME, label: 'Главная', icon: HomeIcon },
  { path: AppRoutes.FRIENDS, label: 'Друзья', icon: FriendsIcon },
  { path: AppRoutes.RESTAURANT, label: 'Ресторан', icon: RestaurantIcon },
  { path: AppRoutes.BALANCE, label: 'Баланс', icon: BalanceIcon },
]
