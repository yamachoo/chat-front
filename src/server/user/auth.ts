import {
  LoginQuery,
  RegisterQuery,
  User
} from '../../react-app-env'
import { server } from '../server'

export const userRegister = async (body: RegisterQuery) => {
  await server.post('/register', body)
}

export const userLogin = async (body: LoginQuery): Promise<User> => {
  const { data } = await server.post('/login', body)

  return data
}

export const userLogout = async () => {
  await server.get('/logout')
}
