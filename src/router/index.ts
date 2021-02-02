import { Login } from '../components/pages/Login'
import { NotFound } from '../components/pages/NotFound'
import { Register } from '../components/pages/Register'
import { Select } from '../components/pages/Select'
import { TextChat } from '../components/pages/TextChat'

export const guestRoutes = [
  {
    path: '/',
    exact: true,
    component: Login
  },
  {
    path: '/register',
    exact: false,
    component: Register
  }
]

export const privateRoutes = [
  {
    path: '/select',
    exact: true,
    component: Select
  },
  {
    path: '/text-chat',
    exact: true,
    component: TextChat
  }
]

export const errorRoutes = [
  {
    path: '*',
    exact: false,
    component: NotFound
  }
]
