import React from 'react'
import { Box , Spinner} from '@chakra-ui/react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore } from "firebase/firestore"

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const db = getFirestore()
    const productosCollection = collection(db, "productos")
    getDocs(productosCollection).then((querySnapshot) => {
      const productos = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProductos(productos)
      setLoading(false)
    })
  }, [])
  if (loading) {
    return (
      <Box w="100vw" h="75vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p="20px" bgColor="#EBEBEB">
        <p>Cargando datos. Por favor aguarde.</p>
        <Spinner size="xl" color="blue"></Spinner>

      </Box>
    )
  }
  return (
    <Box w="100vw" h="auto" display="flex" justifyContent="center" alignItems="center" bgColor="#EBEBEB">
      <ItemDetail productos={productos} />
    </Box>
  )
}

export default ItemDetailContainer