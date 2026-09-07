import { useState } from 'react'
import './App.css'
import Header from './componentes/Header/Header'
import Hero from './componentes/Hero/Hero'
import FormDestino from './componentes/Cadastro/FormDestino'
import ListaDestinos from './componentes/ListaDestinos/ListaDestinos'

function App() {

    const[mostrarFormulario, setMostrarFormulario] = useState(false)
 
  return( 

    <>
      <Header aoClicarCadastrar={() => (setMostrarFormulario(true))} />
      <Hero  aoClicarCadastrar={() => setMostrarFormulario(true)}  />

      {mostrarFormulario && <FormDestino />}

      <ListaDestinos />

    </>


  )

}

export default App
