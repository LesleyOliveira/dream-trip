import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import './App.css'
import Header from './componentes/Header/Header'
import Hero from './componentes/Hero/Hero'
import FormDestino from './componentes/Cadastro/FormDestino'

function App() {

    const[mostrarFormulario, setMostrarFormulario] = useState(false)
 
  return( 

    <>
      <Header aoClicarCadastrar={() => (setMostrarFormulario(true))} />
      <Hero  aoClicarCadastrar={() => setMostrarFormulario(true)}  />

      {mostrarFormulario && <FormDestino />}

    </>


  )

}

export default App
