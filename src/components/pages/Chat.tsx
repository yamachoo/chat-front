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
  useState
} from 'react'
import { io } from 'socket.io-client'
import { DEVELOPMENT_SERVER_URL } from '../../constants'
import { UserContext } from '../App'

let url: string

if (process.env.NODE_ENV) {
  url = DEVELOPMENT_SERVER_URL
} else {
  url = window.location.origin
}

const socket = io(url)

export const Chat: React.FC = () => {
  const { user } = useContext(UserContext)
  const [text, setText] = useState('')
  const [messages, setMessages] = useState([`${user.name} ようこそ Chat App へ！`])
  const createMessage = () => {
    socket.emit('chat message', text)
    setMessages([...messages, text])
    setText('')
  }

  socket.on('chat message', (message: string) => {
    setMessages([...messages, message])
  })

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
