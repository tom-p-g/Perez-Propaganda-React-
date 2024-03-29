import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

import Welcome from "./components/Welcome"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"


function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>

        <NavBar />
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/catalogo" element={<ItemListContainer />} />
          <Route exact path="/categoria/:id" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />

          <Route exact path="/cart" element={<Cart />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </ShoppingCartProvider>


  )
}

export default App
