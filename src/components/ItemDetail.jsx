import React from 'react'
import { Box, Image, Heading } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = ({ productos }) => {
  const { id } = useParams()
  const prodFiltro = productos.filter((producto) => producto.id == id)
  return (
    <>
      {prodFiltro.map((producto) =>
      <Box key={producto.id} w="300px" h="500px" m="20px" bgColor="white" display="flex" flexDirection="column" alignItems="center" justifyContent="space-around" borderRadius="10px" >
        <Box w="200px" h="200px">
          <Image src={producto.imgUrl} alt="Foto Producto" />
        </Box>
        <Heading fontSize="14pt">{producto.nombre}</Heading>
        <h3>Stock: {producto.stock}</h3>
        <h3>Categoría: {producto.categoria}</h3>
        <h3>Precio Unitario: ${producto.precio}</h3>
        <ItemCount stock={producto.stock} id={producto.id} nombre={producto.nombre} precio={producto.precio} />


      </Box>

      )

      }
    </>)
}

export default ItemDetail