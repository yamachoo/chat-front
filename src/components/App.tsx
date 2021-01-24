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
import { routes } from '../routes'
import { Header } from './structures/Header'

export const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Header />
      <Switch>
        {routes.map((config, i) => (
          <Route key={i} {...config} />
        ))}
      </Switch>
    </Router>
  </ChakraProvider>
)
