import { Box } from "@chakra-ui/react"
const ItemListContainer = ({ greetings }) => {
  return (
    <Box w="100%" h="auto" bgColor="#EBEBEB">
      <Box w="100%" h="40px" bgColor="#FF6700" display="flex" alignItems="center" justifyContent="center">
        {greetings}
      </Box>

      <p>ItemListContainer</p>
      <Box w="100%" h="auto" display="flex" justifyContent="space-around">
        
        <Box bgColor="#C0C0C0" w="300px" h="400px" border="2px solid gray" borderRadius="5px">
          item
        </Box>
        <Box bgColor="#C0C0C0" w="300px" h="400px" border="2px solid gray" borderRadius="5px">
          item
        </Box>
        <Box bgColor="#C0C0C0" w="300px" h="400px" border="2px solid gray" borderRadius="5px">
          item
        </Box>
      </Box>
    </Box>
  )
}

export default ItemListContainer