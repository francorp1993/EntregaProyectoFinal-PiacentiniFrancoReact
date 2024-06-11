
import './css/main.css';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Encabezado } from "./components/header/Encabezado"
import { ItemListContenedor } from './components/itemListContainer';
import NotFound from './components/NotFound';
// import Footer from "./components/Footer";


function App() {
  return (
    
    <BrowserRouter>
    <Encabezado/>
    <Routes>
      <Route path="/" element={<ItemListContenedor/>} />
      <Route path="/category/:categoryId" element={<ItemListContenedor/>} />
      <Route path="/*" element= {<NotFound/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App


// <BrowserRouter>
// <Encabezado/>
// <Routes>
//   <Route path="/" element={<ItemListContainer/>}/>
// </Routes>
// {/* <Footer /> */}
// </BrowserRouter>