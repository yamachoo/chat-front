import { Home } from '../components/pages/Home'
import { Login } from '../components/pages/Login'
import { NotFound } from '../components/pages/NotFound'
import { Register } from '../components/pages/Register'

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/login',
    exact: false,
    component: Login
  },
  {
    path: '/register',
    exact: false,
    component: Register
  },
  {
    path: '*',
    exact: false,
    component: NotFound
  }
]
