import {
  LoginData,
  LoginQuery,
  RegisterQuery
} from '../../react-app-env'
import { server } from '../server'

export const userRegister = async (body: RegisterQuery) => {
  await server.post('/register', body)
}

export const userLogin = async (body: LoginQuery): Promise<LoginData> => {
  const { data } = await server.post('/login', body)

  return data
}

export const userLogout = async () => {
  await server.get('/logout')
}
