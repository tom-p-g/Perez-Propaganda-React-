import { Box, Button, Container, Image , Heading} from '@chakra-ui/react'
import { useState } from 'react'
import ItemCount from './ItemCount'


const Item = ({ key, id, nombre, precio, stock, categoria, imgUrl }) => {

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
      <Button bg="#004E98" color="white">
        Detalle
      </Button>
    </Box>
  )
}

export default Item