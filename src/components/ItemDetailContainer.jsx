import React from 'react'
import Data from "../Data.json"
import { Container, Box } from '@chakra-ui/react'
import ItemDetail from './ItemDetail'
import { useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
    

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
        const datosFechted = await getDatos()
      } catch (err) {
        console.log("error!")
      }
    }
    fetchingDatos()
  return (
    <Box w="100vw" h="auto" display="flex" justifyContent="center" alignItems="center" bgColor="#EBEBEB">
        <ItemDetail productos={Data} />
    </Box>
  )
}

export default ItemDetailContainer