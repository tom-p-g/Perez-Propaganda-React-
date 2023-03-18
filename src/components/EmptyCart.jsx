import React from 'react'
import { Box } from '@chakra-ui/react'

const EmptyCart = () => {
  return (
    <Box h="75vh" display="flex" flexDirection="column" justifyContent="center" bgColor="#EBEBEB">
        <Box>
            <h2 className="subtitulo">¡ Oops! Aun no ha agregado items a su carrito</h2>
        </Box>

    </Box>
  )
}

export default EmptyCart