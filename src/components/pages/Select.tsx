import {
  Button,
  Center
} from '@chakra-ui/react'
import React from 'react'
import { useHistory } from 'react-router-dom'

export const Select: React.FC = () => {
  const history = useHistory()
  const pushTextChat = () => {
    history.push('/text-chat')
  }

  return (
    <Center minH="100vh">
      <Button borderWidth="1px" borderRadius="lg" minH="16" minW="60" onClick={pushTextChat}>
        テキストチャットへ
      </Button>
    </Center>
  )
}
