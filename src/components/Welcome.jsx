import React from 'react'
import { Container, Box, Image ,Heading} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <Box display="flex" flexDirection="column" >
        <Heading  h="50px"fontSize="1.5em" bg="#FF6700" color="white" display="flex" flexDirection="column" justifyContent="center">
            Bienvenido a la web de Perez Propaganda</Heading>

        <Box w="100%" h="auto" display="flex" justifyContent="center" alignItems="center">
            <Image h="auto" w="200%" src="https://th.bing.com/th/id/R.55fe0ddda1f02343d77f581b0e8e0395?rik=3elvRGWcFZ9jMA&pid=ImgRaw&r=0"/>
        </Box>
        <Link></Link>

    </Box>
  )
}

export default Welcome