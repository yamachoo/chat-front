import { io } from 'socket.io-client'
import {
  DEVELOPMENT_SERVER_URL,
  RECEIVE_MESSAGE,
  SEND_MESSAGE
} from '../constants'

const url = process.env.NODE_ENV === 'production'
  ? window.location.origin
  : DEVELOPMENT_SERVER_URL

const socket = io(url, {
  autoConnect: false
})

export const connect = () => {
  socket.connect()
}

export const disconnect = () => {
  socket.disconnect()
}

export const off = (event: string) => {
  socket.off(event)
}

export const getId = () => {
  return socket.id
}

export const sendMessage = (message: string) => {
  socket.emit(SEND_MESSAGE, message)
}

export const receiveMessage = (messageEvent: Function) => {
  socket.on(RECEIVE_MESSAGE, messageEvent)
}
