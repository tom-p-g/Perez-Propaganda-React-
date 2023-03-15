import React from 'react'
import { useState } from 'react'
import { Button, Box, Container } from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const ItemCount = ({ stock, id, nombre, precio }) => {
  const [counter, setCounter] = useState(0)
  const [cart, setCart] = useContext(CartContext);

  const añadirCarrito = () => {
    setCart((currItems) => {
      const isItemFound = currItems.find((item) => item.id === id)

      if (isItemFound ) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, cantidad: item.cantidad + counter }
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, cantidad: counter, precio, nombre }]
      }
    })

  }
  
  return (
    <>
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
      <Button bgColor="#3A6EA5" color="white"
      onClick={() => {
        if(counter != 0) {
          añadirCarrito()
        } else {
          alert("Elija una cantidad")
        }
      }
        
      }
      >
          Añadir a Carrito
      </Button>
    </>
  )
}

export default ItemCount