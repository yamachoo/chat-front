import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast
} from '@chakra-ui/react'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import type { ILoginQuery } from '../../react-app-env'
import { userLogin } from '../../server/user/auth'
import { UserContext } from '../App'

export const Login: React.FC = () => {
  const { setUser } = React.useContext(UserContext)
  const { register, handleSubmit } = useForm<ILoginQuery>()
  const history = useHistory()
  const toast = useToast()
  const onSubmit = async (data: ILoginQuery) => {
    try {
      const result = await userLogin(data)
      setUser({
        ...result,
        auth: true
      })
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
          <Button width="full" colorScheme="teal" variant="outline" type="submit">
            ログイン
          </Button>
        </form>
      </Box>
    </Center>
  )
}
