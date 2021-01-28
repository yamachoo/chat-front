import { Chat } from '../components/pages/Chat'
import { Login } from '../components/pages/Login'
import { NotFound } from '../components/pages/NotFound'
import { Register } from '../components/pages/Register'

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
    path: '/chat',
    exact: true,
    component: Chat
  }
]

export const errorRoutes = [
  {
    path: '*',
    exact: false,
    component: NotFound
  }
]
