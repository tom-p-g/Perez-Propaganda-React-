import { Button, ButtonGroup } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const CartWidget = () => {
  const [cart, setCart] = useContext(CartContext);
  const cantidadProductos = cart.length

  return (
      <Link to="/cart">
        <Button colorScheme='blue' size='lg' bgColor="#FF6700">
          <Box display="flex" w="auto" p="10px">
            <Box mr="5px">
            <i className="fa fa-shopping-cart"> </i>

            </Box>
            <p>{cantidadProductos}</p>
          </Box>
        </Button>
      
      </Link>


  )
}

export default CartWidget