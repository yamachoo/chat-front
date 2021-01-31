import { io } from 'socket.io-client'
import {
  CHAT_MESSAGE,
  DEVELOPMENT_SERVER_URL
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

export const sendMessage = (message: string) => {
  socket.emit(CHAT_MESSAGE, message)
}

export const receiveMessage = (messageEvent: Function) => {
  socket.on(CHAT_MESSAGE, messageEvent)
}
