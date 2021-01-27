/// <reference types="react-scripts" />

export type RegisterQuery = {
  name: string
  email: string
  password: string
}

export type LoginQuery = {
  email: string
  password: string
}

export type User = {
  id: number
  name: string
  email: string
}
