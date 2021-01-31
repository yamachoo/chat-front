import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  useToast
} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import {
  Link as ReachLink,
  useHistory
} from 'react-router-dom'
import type { LoginQuery } from '../../react-app-env'
import { userLogin } from '../../server/user/auth'
import { UserContext } from '../App'

export const Login: React.FC = () => {
  const { setUser } = useContext(UserContext)
  const { register, handleSubmit } = useForm<LoginQuery>()
  const history = useHistory()
  const toast = useToast()
  const onSubmit = async (data: LoginQuery) => {
    try {
      const result = await userLogin(data)
      setUser(result)
      history.push('/')
    } catch (error) {
      toast({
        title: 'ログインに失敗しました…',
        status: 'error',
        duration: 9000,
        isClosable: true
      })
    }
  }

  return (
    <Center minH="100vh">
      <Box borderWidth="1px" borderRadius="lg" p="4" minW="80">
        <Box textAlign="center" mb="4">
          <Heading size="md">ログイン</Heading>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl id="email" isRequired mb="2">
            <FormLabel>メールアドレス</FormLabel>
            <Input type="email" placeholder="xxxx@yyyy.com" autoComplete="email" name="email" ref={register} />
          </FormControl>
          <FormControl id="password" isRequired mb="4">
            <FormLabel>パスワード</FormLabel>
            <Input type="password" placeholder="*********" autoComplete="current-password" name="password" ref={register} />
          </FormControl>
          <Button width="full" colorScheme="teal" variant="outline" type="submit" mb="4">
            ログイン
          </Button>
          <Link as={ReachLink} to="/register">
            新しいアカウントが必要ですか？
          </Link>
        </form>
      </Box>
    </Center>
  )
}
