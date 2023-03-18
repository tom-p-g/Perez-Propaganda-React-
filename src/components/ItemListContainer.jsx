import { Box, Spinner } from "@chakra-ui/react"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import { collection, getDocs, getFirestore } from "firebase/firestore"

const ItemListContainer = () => {
  const {id} = useParams()
  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])
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
  
const categoriaFiltro = productos.filter((producto)=> producto.categoria === id)

if(loading) {
  return (
  <Box w="100vw" h="75vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p="20px" bgColor="#EBEBEB">
    <p>Cargando datos. Por favor aguarde.</p>
    <Spinner size="xl" color="blue"></Spinner>

  </Box>

  )
}
return (
  <Box w="100%" h="auto" bgColor="#EBEBEB" flexWrap="wrap">
    {id ? <ItemList productos={categoriaFiltro}/> : <ItemList productos = {productos} />}
  </Box>
)
}

export default ItemListContainer