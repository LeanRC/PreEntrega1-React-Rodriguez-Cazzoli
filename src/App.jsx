import React from 'react'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'


const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Bienvenidos"/>
    </>
  )
}

export default App