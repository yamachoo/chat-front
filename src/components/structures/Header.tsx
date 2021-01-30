import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Spacer,
  useToast
} from '@chakra-ui/react'
import React, {
  useContext
} from 'react'
import { Link as ReachLink, useHistory } from 'react-router-dom'
import type { User } from '../../react-app-env'
import { userLogout } from '../../server/user/auth'
import { UserContext } from '../App'
import { ColorModeSwitcher } from '../parts/ColorModeSwitcher'

export const Header: React.FC = () => {
  const { user, setUser } = useContext(UserContext)
  const history = useHistory()
  const toast = useToast()
  const logout = async () => {
    try {
      await userLogout()
      setUser({} as User)
      history.push('/')
    } catch (error) {
      toast({
        title: 'ログアウトに失敗しました…',
        status: 'error',
        duration: 9000,
        isClosable: true
      })
    }
  }

  return (
    <Box pos="absolute" w="100vw">
      <Flex h="10" m="3">
        <Box p="2">
          <Heading size="md">
            <Link as={ReachLink} to="/">Chat App</Link>
          </Heading>
        </Box>
        <Spacer />
        {Object.keys(user).length !== 0 && (
          <Button onClick={logout} variant="ghost">
            ログアウト
          </Button>
        )}
        <ColorModeSwitcher />
      </Flex>
    </Box>
  )
}
