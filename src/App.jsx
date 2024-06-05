

import { Encabezado } from "./components/header/Encabezado"
import { ItemListContainer } from "./components/itemListContainer"
import './css/main.css'



function App() {

  const greeting = "Bienvenidos";

  return (
    <>
      <Encabezado />
      <ItemListContainer saludo = {greeting}/>
    </>
  )
}

export default App
