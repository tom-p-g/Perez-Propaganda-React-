import React from 'react'
import Data from "../Data.json"
import { Container } from '@chakra-ui/react'
import ItemDetail from './ItemDetail'
import { useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
    const {id} = useParams()

    const getDatos = () => {
        return new Promise((resolve, reject) => {
          if (Data.length === 0) {
            reject(new Error ("No hay productos disponibles"))
          }
          setTimeout(() => {
            const prodFiltro = Data.filter((producto) => producto.id === id)
            resolve (prodFiltro)
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
  return (
    <Container>
        <ItemDetail producto={Data} />
    </Container>
  )
}

export default ItemDetailContainer