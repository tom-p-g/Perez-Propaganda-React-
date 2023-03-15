import { Box } from "@chakra-ui/react"
import Data from "../Data.json"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
  const {id} = useParams()
  
const categoriaFiltro = Data.filter((producto)=> producto.categoria === id)


return (
  <Box w="100%" h="auto" bgColor="#EBEBEB" flexWrap="wrap">
    {id ? <ItemList productos={categoriaFiltro}/> : <ItemList productos = {Data} />}
  </Box>
)
}

export default ItemListContainer