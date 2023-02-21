import { Box } from "@chakra-ui/react"
import Data from "../Data.json"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
  const {id} = useParams()
  
  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (Data.length === 0) {
        reject(new Error ("No hay productos disponibles"))
      }
      setTimeout(() => {
        resolve (Data)
      },2000)
    })
}
async function fetchingDatos() {
  try {
    const datosFecthed = await getDatos()
  } catch (err) {
    console.log("error!")
  }
}
fetchingDatos()

const categoriaFiltro = Data.filter((producto)=> producto.categoria === id)


return (
  <Box w="100%" h="auto" bgColor="#EBEBEB" flexWrap="wrap">
    {id ? <ItemList productos={categoriaFiltro}/> : <ItemList productos = {Data} />}
  </Box>
)
}

export default ItemListContainer