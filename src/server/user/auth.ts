import {
  ILoginQuery,
  IRegisterQuery
} from '../../react-app-env'
import { server } from '../server'

export async function userRegister (body: IRegisterQuery) {
  await server.post('register', body)
}

export async function userLogin (body: ILoginQuery) {
  await server.post('login', body)
}

export async function userLogout () {
  await server.get('logout')
}
