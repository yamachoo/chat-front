import {
  Box,
  Flex,
  Heading,
  Link,
  Spacer
} from '@chakra-ui/react'
import * as React from 'react'
import { Link as ReachLink } from 'react-router-dom'
import { ColorModeSwitcher } from '../parts/ColorModeSwitcher'

export const Header: React.FC = () => {
  return (
    <Box pos="absolute" w="100vw">
      <Flex h="10" m="3">
        <Box p="2">
          <Heading size="md">
            <Link as={ReachLink} to="/">Chat App</Link>
          </Heading>
        </Box>
        <Spacer />
        <ColorModeSwitcher />
      </Flex>
    </Box>
  )
}
