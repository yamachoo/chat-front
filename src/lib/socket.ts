import { io } from 'socket.io-client'
import { DEVELOPMENT_SERVER_URL } from '../constants'

const url = process.env.NODE_ENV === 'production'
  ? window.location.origin
  : DEVELOPMENT_SERVER_URL

export const socket = io(url, { autoConnect: false })
