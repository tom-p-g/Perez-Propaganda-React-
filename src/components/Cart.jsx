import React from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import { useContext } from 'react'
import { Box, Container, Card, CardHeader, CardBody, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import EmptyCart from './EmptyCart'
import SendOrder from './SendOrder'

const Cart = () => {
  const [cart, setCart] = useContext(CartContext)
  const eliminarCarrito = (e) => {
    const auxCart = [...cart]
    auxCart.splice(e, 1)
    setCart(auxCart)
  }
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = cart.reduce((a, b) => a + b.precioParcial, 0);
    setTotalPrice(total);
  }, [cart]);

  if (cart.length === 0) {
    return <EmptyCart />
  }
  return (
    <>
      <Container display="flex" flexDirection="column" h="auto" w="100vw" alignItems="center" bgColor="#EBEBEB">

        <Box display="flex" flexWrap="wrap" w="100vw" flexDirection="row" justifyContent="space-around" alignItems="center" bgColor="#EBEBEB">
          {cart.map((producto) => {
            if (producto.cantidad != 0) {
              return (
                <Box key={producto.id} w="200px" display="flex" flexDirection="column" justifyContent="space-around" alignItems="center" m="10px">
                  <Card>
                    <CardHeader>
                      <h2 className="subtitulo">{producto.nombre}</h2>
                    </CardHeader>
                    <CardBody>
                      <p>Cantidad: {producto.cantidad}</p>
                      <p>Precio: ${producto.precioParcial}</p>
                    </CardBody>
                    <Button
                      w="300px"
                      color="red"
                      onClick={() => {
                        eliminarCarrito(cart.indexOf(producto))
                      }}>
                      Eliminar este producto
                    </Button>
                  </Card>

                </Box>
              )

            }
          }
          )}

        </Box>
        <Box backgroundColor="#FF6700" w="100vw">
          <Box ><p className="total">Total: $ {totalPrice}</p> </Box>

        </Box>
        <Box w="100vw" bgColor="#EBEBEB" display="flex" justifyContent="center"  h="auto">
          <SendOrder />
        </Box>
      </Container>
    </>
  )
}

export default Cart