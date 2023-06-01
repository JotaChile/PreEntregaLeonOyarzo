import React from 'react'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

const App = () => {

  return (
    <div>
      <NavBar/>
      <ItemListContainer greetings={'Hola mundo'}/>
    </div>
    


  )
}

export default App
