import React from 'react'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { CartContext } from '../context/ShoppingCartContext'
import { useContext } from 'react'


const SendOrder = () => {
  const [cart, setCart] = useContext(CartContext)
  const [orderId, setOrderId] = useState(null)
  const [name, setName] = useState("")
  const [checkEmail, setCheckEmail] = useState("")
  const [email, setEmail] = useState("")
  const db = getFirestore()
  const orderCollection = collection(db, "order")
  const handleSubmit = (e) => {
    if (email === checkEmail) {
      e.preventDefault()
      addDoc(orderCollection, order).then(({ id }) =>{ 
        setOrderId(id)
        swal("¡Gracias por su compra!")
      })

    } else {
      swal({
        title:"Su email no ha sido confirmado",
        icon: "error",
      }
      )
    }
  }
  const order = {
    name,
    email,
    cart,
  }

  return (
    <Box w="500px" display="flex" flexDirection="column" bg="white" borderRadius="10px" justifyContent="center" alignItems="center" m="10px">
      <h2 className="subtitulo">Orden de compra</h2>
      <form onSubmit={handleSubmit} className="formOrder">
        <h3>Nombre y Apellido:</h3>
        <input type="text" placeholder='Nombre y Apellido'className="formInput" onChange={(e) => setName(e.target.value)} />
        <h3>E-mail:</h3>
        <input type="email" placeholder='email@email.com' className="formInput" onChange={(e) => setCheckEmail(e.target.value)} />
        <h3>Confirme su E-mail</h3>
        <input type="email" placeholder='email@email.com' className="formInput" onChange={(e) => setEmail(e.target.value)} />
        <button type='submit' className="formButton">Comprar</button>
        <p>Id de la orden: {orderId}</p>
  
      </form>

    </Box>
  )
}

export default SendOrder