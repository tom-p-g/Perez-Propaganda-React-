import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import ConsumiendoApi from "./components/consumiendoApi"
import Welcome from "./components/Welcome"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Welcome />}/>
        <Route exact path="/catalogo" element={<ItemListContainer/>}/>
        <Route exact path="/categoria/:id" element={<ItemListContainer/>}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route exact path="/api" element={<ConsumiendoApi />}/>
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  )
}

export default App
