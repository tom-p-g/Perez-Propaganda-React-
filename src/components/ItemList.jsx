import Item from "./Item.jsx"
import { Box, Container } from "@chakra-ui/react"

const ItemList = ({productos}) => {
  
  return (
   <Box w="100%" display="flex" h="auto" justifyContent="space-around" flexWrap="wrap" p="30px">
    {productos.map((producto) => {
      return(<Item 
        key={producto.id}
        id={producto.id} 
        nombre={producto.nombre}
        precio={producto.precio}
        stock={producto.stock}
        categoria={producto.categoria}
        imgUrl={producto.imgUrl}
      />
     )
    })
    }
   </Box>
  )
}

export default ItemList