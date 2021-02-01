import { Login } from '../components/pages/Login'
import { NotFound } from '../components/pages/NotFound'
import { Register } from '../components/pages/Register'
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
