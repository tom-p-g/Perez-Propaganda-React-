import React from 'react'
import { Box, Button,Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const ItemDetail = ({Data}) => {
    const prodFiltro = Data.filter((producto) => producto.id === id)
  return (
    <Box id={key} w="300px" h="500px" m="10px" bgColor="white" display="flex" flexDirection="column" alignItems="center" justifyContent="space-around" borderRadius="10px" >
    <Box w="200px" h="200px">
      <Image src={imgUrl} alt="Foto Producto" />
    </Box>
    <h2>{nombre}</h2>
    <h3>Stock: {stock}</h3>
    <h3>Categoría: {categoria}</h3>
    <h3>Precio Unitario: ${precio}</h3>
    <ItemCount stock={stock} />
    
  </Box>
  )
}

export default ItemDetail