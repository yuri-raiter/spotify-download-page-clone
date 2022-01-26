import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    green: {
      200: '#19E68C',
      400: '#1ED760'
    },
    gray: {
      400: '#919496',
      900: '#222326'
    }
  }
})

export default theme