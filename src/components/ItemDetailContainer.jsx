import React from 'react'
import Data from "../Data.json"
import { Box } from '@chakra-ui/react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
  
  return (
    <Box w="100vw" h="auto" display="flex" justifyContent="center" alignItems="center" bgColor="#EBEBEB">
        <ItemDetail productos={Data} />
    </Box>
  )
}

export default ItemDetailContainer