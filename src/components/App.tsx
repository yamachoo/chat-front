import {
  ChakraProvider,
  theme
} from '@chakra-ui/react'
import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'
import type { User } from '../react-app-env'
import {
  errorRoutes,
  guestRoutes,
  privateRoutes
} from '../router'
import { GuestRoute } from './routes/GuestRoute'
import { PrivateRoute } from './routes/PrivateRoute'
import { Header } from './structures/Header'

type UserContextType = {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
}

export const UserContext = React.createContext({} as UserContextType)

export const App: React.FC = () => {
  const [user, setUser] = React.useState({} as User)

  return (
  <ChakraProvider theme={theme}>
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          {guestRoutes.map((config, i) => (
            <GuestRoute key={i} {...config} />
          ))}
          {privateRoutes.map((config, i) => (
            <PrivateRoute key={i} {...config} />
          ))}
          {errorRoutes.map((config, i) => (
            <Route key={i} {...config} />
          ))}
        </Switch>
      </UserContext.Provider>
    </Router>
  </ChakraProvider>
  )
}
