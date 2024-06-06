
import './css/main.css';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Encabezado } from "./components/header/Encabezado"
import { ItemListContenedor } from './components/itemListContainer';

// import Footer from "./components/Footer";


function App() {
  return (
    <>
    <Encabezado/>
    <ItemListContenedor/>
    </>
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