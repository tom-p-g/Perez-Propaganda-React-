import { Box } from '@chakra-ui/react'
import CartWidget from "./CartWidget.jsx"


const NavBar = () => {

  return (
    <Box bg='#004E98' w='100%' p={4} color='white' display="flex" alignItems="center" justifyContent="space-around">
      <div>Logo</div>
      <div>
        <h1>PEREZ PROPAGANDA</h1>
      </div>
      <div>
        <ul>

        </ul>
      </div>
      <div>
        <CartWidget />
      </div>
    </Box>
  )
}

export default NavBar