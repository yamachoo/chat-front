import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  List,
  ListItem
} from '@chakra-ui/react'
import React, {
  useContext,
  useEffect,
  useReducer,
  useState
} from 'react'
import {
  RECEIVE_MESSAGE,
  SEND_MESSAGE
} from '../../constants'
import { socket } from '../../lib/socket'
import { UserContext } from '../App'

export const TextChat: React.FC = () => {
  const { user } = useContext(UserContext)
  const [text, setText] = useState('')
  const [messages, setMessages] = useReducer(
    (messages: string[], message: string) => {
      return messages.concat(message)
    },
    [`${user.name} ようこそ Chat App へ！`]
  )
  const createMessage = () => {
    const message = `${user.name}: ${text}`
    socket.emit(SEND_MESSAGE, message)
    setMessages(message)
    setText('')
  }

  useEffect(() => {
    socket.connect()
    socket.on(RECEIVE_MESSAGE, (message: string) => {
      setMessages(message)
    })

    return () => {
      socket.off(RECEIVE_MESSAGE)
      socket.disconnect()
    }
  }, [])

  return (
    <Center minH="100vh">
      <Box minH="80vh" w="100vw" mt="16">
        <List spacing="3" h="70vh" p="4" overflow="scroll">
          {messages.map((msg, i) => (
            <ListItem key={i}>{msg}</ListItem>
          ))}
        </List>

        <Flex p="4">
          <Input
            type="text"
            value={text}
            onChange={(e) => { setText(e.target.value) }}
            placeholder="メッセージを送信する"
            mr="4"
          />
          <Button onClick={createMessage} colorScheme="teal">
            送信
          </Button>
        </Flex>
      </Box>
    </Center>
  )
}
