import {
  ChakraProvider,
  theme
} from '@chakra-ui/react'
import * as React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'
import type { User } from '../react-app-env'
import { routes } from '../routes'
import { Header } from './structures/Header'

type UserContextType = {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
}

export const UserContext = React.createContext({} as UserContextType)

export const App: React.FC = () => {
  const [user, setUser] = React.useState({
    id: 0,
    name: '',
    email: '',
    auth: false
  } as User)

  return (
  <ChakraProvider theme={theme}>
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          {routes.map((config, i) => (
            <Route key={i} {...config} />
          ))}
        </Switch>
      </UserContext.Provider>
    </Router>
  </ChakraProvider>
  )
}
