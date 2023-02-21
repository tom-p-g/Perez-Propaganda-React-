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
  Heading
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <Box bg='#004E98' w='100%' p={4} color='white' display="flex" alignItems="center" justifyContent="space-around">
      <div>Logo</div>
      <div>
        <Link to="/">
          <Heading>PEREZ PROPAGANDA</Heading>
        </Link>
        
      </div>
      <Menu>
        <Link to="/catalogo">
          <MenuButton as={Button} bgColor="#3A6EA5">
          Catálogo
          </MenuButton>
        </Link>
        
        <MenuButton as={Button} bgColor="#3A6EA5">
          Categorías
        </MenuButton>
        <MenuList color="#004E98">
          <Link to={`/categoria/${"Almanaque"}`}>
            <MenuItem>Almanaques</MenuItem>
          </Link>
          <Link to={`/categoria/${"Empresarial"}`}>
            <MenuItem>Empresariales</MenuItem>
          </Link>
          <Link to={`/categoria/${"Mayorista"}`}>
            <MenuItem>Mayorista</MenuItem>
          </Link>
          <Link to={`/categoria/${"Imprenta"}`}>
            <MenuItem>Imprenta</MenuItem>
          </Link>
          <MenuItem>Soluciones Informáticas</MenuItem>
        </MenuList>
      </Menu>
      <CartWidget />

    </Box>
  )
}

export default NavBar