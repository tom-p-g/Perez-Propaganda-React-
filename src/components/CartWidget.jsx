import { Button, ButtonGroup } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

const CartWidget = () => {
    const cartCounter = 5
  return (
    <Button colorScheme='blue' size='lg'>
      <Box display="flex" w="auto" p="10px">
        <i class="fa fa-shopping-cart"></i>
        <p>{cartCounter}</p>
      </Box>
    </Button>
  )
}

export default CartWidget