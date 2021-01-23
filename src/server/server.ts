import axios from 'axios'
import {
  DEVELOPMENT_SERVER_URL,
  ENDPOINT_PATH,
  ENDPOINT_VERSION
} from '../constants'

const ENDPOINT_URL = process.env.NODE_ENV === 'development'
  ? `${DEVELOPMENT_SERVER_URL}/${ENDPOINT_PATH}/${ENDPOINT_VERSION}`
  : `${window.location.origin}/${ENDPOINT_PATH}/${ENDPOINT_VERSION}`

export const server = axios.create({
  baseURL: ENDPOINT_URL,
  timeout: 5000
})
