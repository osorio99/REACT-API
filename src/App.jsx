import React from 'react'
import './App.css'
import Header from './Layout/Header/Header'
import Main from './Layout/Main/Main'
import { Routes ,Route } from "react-router-dom"
import { RickAndMorty } from './Pages/RickAndMorty/RickAndMorty'
const App = () => {
  return (
    <>
    <Header/>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/RickAndMorty" element={<RickAndMorty/>}/>
            <Route path="/cats" element={<Main/>}/>
            <Route path="/Gift" element={<Main/>}/>
        </Routes>
    {/* <Main/> */}
    
    </>
  )
}

export default App
