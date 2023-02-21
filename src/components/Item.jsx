import { Box, Button, Container, Image , Heading} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ({ key, id, nombre, precio, stock, categoria, imgUrl }) => {

  return (
    <Box id={key} w="300px" h="500px" m="10px" bgColor="white" display="flex" flexDirection="column" alignItems="center" justifyContent="space-around" borderRadius="10px" >
      <Box w="200px" h="200px">
        <Image src={imgUrl} alt="Foto Producto" />
      </Box>
      <Heading fontSize="14pt">{nombre}</Heading>
      <h3>Stock: {stock}</h3>
      <h3>Categoría: {categoria}</h3>
      <h3>Precio Unitario: ${precio}</h3>
      <Link to={`/item/${id}`}>
        <Button bg="#004E98" color="white">
          Detalle
        </Button>
      
      </Link>
      
    </Box>
  )
}

export default Item