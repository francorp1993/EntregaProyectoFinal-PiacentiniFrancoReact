
import './css/main.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Encabezado } from "./components/header/Encabezado"
import { ItemListContenedor } from './components/itemListContainer';
import NotFound from './components/NotFound';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout';
// import CargarProductos from './components/CargarProductos';



function App() {


  return (
    <CartProvider>
      <BrowserRouter>
        <Encabezado />
        <Routes>
          <Route path="/" element={<ItemListContenedor />} />
          <Route path="/category/:categoryId" element={<ItemListContenedor />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/finalizar-compra" element={<Checkout/>} />
          {/* <Route path="/cargar-productos" element={<CargarProductos/>} /> */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
