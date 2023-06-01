import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {

  return (
    <div>
      <NavBar/>
      <ItemListContainer greetings={'Bienvenido a Aguas JC'}/>
    </div>
    


  )
}

export default App
