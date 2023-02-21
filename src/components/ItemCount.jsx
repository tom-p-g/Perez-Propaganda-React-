import React from 'react'
import { useState } from 'react'
import { Button, Box, Container } from '@chakra-ui/react'
const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(0)
  return (
    <Container display="flex" h="auto" w="200px" alignContent="center" justifyContent="space-around">
        <Button bgColor="#FF6700" color="white"
          onClick={() => {
            if (counter > 0) {
              setCounter(counter - 50)
            }
            else {
              setCounter(0)
            }
          }}>
            -
            </Button>
        <Box h="auto" w="50px" display="flex" textAlign="center" alignItems="center" bgColor="lightgrey" justifyContent="center" borderRadius="10px">
          <p>{counter}</p>
        </Box>
        <Button bgColor="#FF6700" color="white"
          onClick={() => {
            if (counter < stock) {
              setCounter(counter + 50)
            }
            else {
              setCounter(counter)
            }
          }}>
            +
          </Button>
    </Container>
  )
}

export default ItemCount