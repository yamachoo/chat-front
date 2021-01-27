import {
  ILoginQuery,
  IRegisterQuery,
  LoginData
} from '../../react-app-env'
import { server } from '../server'

export const userRegister = async (body: IRegisterQuery) => {
  await server.post('/register', body)
}

export const userLogin = async (body: ILoginQuery): Promise<LoginData> => {
  const { data } = await server.post('/login', body)

  return data
}

export const userLogout = async () => {
  await server.get('/logout')
}
