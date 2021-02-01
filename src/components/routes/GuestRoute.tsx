import React, { useContext } from 'react'
import {
  Redirect,
  Route
} from 'react-router-dom'
import { UserContext } from '../App'

export const GuestRoute: React.FC = (props) => {
  const { user } = useContext(UserContext)
  const isAuth = Object.keys(user).length !== 0

  return isAuth ? <Redirect to="/text-chat" /> : <Route {...props} />
}
