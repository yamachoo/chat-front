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
import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import type { RegisterQuery } from '../../react-app-env'
import { userRegister } from '../../server/user/auth'

export const Register: React.FC = () => {
  const { register, handleSubmit } = useForm<RegisterQuery>()
  const history = useHistory()
  const toast = useToast()
  const onSubmit = async (data: RegisterQuery) => {
    try {
      await userRegister(data)
      history.push('/login')
    } catch (error) {
      toast({
        title: 'ユーザー登録に失敗しました…',
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
          <Heading size="md">ユーザー登録</Heading>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl id="name" isRequired mb="2">
            <FormLabel>ニックネーム</FormLabel>
            <Input type="name" placeholder="ニックネーム" autoComplete="name" name="name" ref={register} />
          </FormControl>
          <FormControl id="email" isRequired mb="2">
            <FormLabel>メールアドレス</FormLabel>
            <Input type="email" placeholder="xxxx@yyyy.com" autoComplete="email" name="email" ref={register} />
          </FormControl>
          <FormControl id="password" isRequired mb="4">
            <FormLabel>パスワード</FormLabel>
            <Input type="password" placeholder="*********" autoComplete="current-password" name="password" ref={register} />
          </FormControl>
          <Button width="full" colorScheme="teal" variant="outline" type="submit">
            登録する
          </Button>
        </form>
      </Box>
    </Center>
  )
}
