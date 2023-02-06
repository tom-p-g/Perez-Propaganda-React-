import { Box } from '@chakra-ui/react'
import CartWidget from "./CartWidget.jsx"
import { Button, ButtonGroup } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'


const NavBar = () => {

  return (
    <Box bg='#004E98' w='100%' p={4} color='white' display="flex" alignItems="center" justifyContent="space-around">
      <div>Logo</div>
      <div>
        <h1>PEREZ PROPAGANDA</h1>
      </div>
      <Menu>
        <MenuButton as={Button} bgColor="#3A6EA5">
          Categorías
        </MenuButton>
        <MenuList color="#004E98">
          <MenuItem>Imprenta</MenuItem>
          <MenuItem>Empresariales</MenuItem>
          <MenuItem>Mayorista</MenuItem>
          <MenuItem>Imprenta</MenuItem>
          <MenuItem>Soluciones Informáticas</MenuItem>
        </MenuList>
      </Menu>
      <CartWidget />

    </Box>
  )
}

export default NavBar