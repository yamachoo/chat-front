/// <reference types="react-scripts" />

export interface IRegisterQuery {
  name: string
  email: string
  password: string
}

export interface ILoginQuery {
  email: string
  password: string
}

export type LoginData = {
  id: number
  name: string
  email: string
}

export type User = {
  id: number
  name: string
  email: string
  auth: boolean
}
