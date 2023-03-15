import React from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import { useContext } from 'react'
import { Box, Container, Card, CardHeader, CardBody, Button } from '@chakra-ui/react'
import { useState,useEffect } from 'react'
const Cart = () => {
  const [cart, setCart] = useContext(CartContext)
  const [precio, setPrecio] = useState(0)
  const eliminarCarrito = (e) => {
    setCart(cart.splice(e,1))
  }
  /*
  const precioFinal = () =>{
    if (cart.length != 0) {
      cart.forEach(element => {
        
          const precioParcial = element.precio * element.cantidad
          setPrecio(precio + precioParcial)
  
       
      });
      
    } else {
      setPrecio(0)
    }
  }
  useEffect(() => {
    precioFinal()
  },[cart]);
*/
  return (
    <>
      <Container display="flex" flexDirection="column" h="72.66vh" w="100vw" alignItems="center">


        {cart.map((producto) => {
          if (producto.cantidad != 0) {
            return (
              <Box key={producto.id} w="100vw">
                <Card>
                  <CardHeader>
                    <h2>{producto.nombre}</h2>
                  </CardHeader>
                  <CardBody>
                    <p>Cantidad: {producto.cantidad}</p>
                    <p>Precio: ${ producto.cantidad * producto.precio}</p>
                  </CardBody>
                  <Button
                    onClick={() => {
                      eliminarCarrito(cart.indexOf(producto))
                    }}>
                    Eliminar
                  </Button>
                </Card>

              </Box>
            )

          }
        }
        )}
        <Box>
          Total: $ {precio}
          
        </Box>
      </Container>
    </>
  )
}

export default Cart