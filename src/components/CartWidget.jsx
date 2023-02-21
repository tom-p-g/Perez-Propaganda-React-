import { Button, ButtonGroup } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

const CartWidget = () => {
    const cartCounter = 5
  return (
    <Button colorScheme='blue' size='lg' bgColor="#FF6700">
      <Box display="flex" w="auto" p="10px">
        <i className="fa fa-shopping-cart"></i>
        <p>{cartCounter}</p>
      </Box>
    </Button>
  )
}

export default CartWidget