import React from 'react'
import NavBar from '../NavBar/NavBar'
import { NavLink } from 'react-router-dom'
import { ItemNavbar } from '../../Components/ItemNavbar'

const Header = () => {
  return (
    <>
      
    <header>
        <h1>Rick and morty</h1>
        <ItemNavbar  route="RickAndMorty/"
             myStyles="text-white fond-bold m-2 hover:text-sky-400 hover:underline"
             contentItem="RickAndMorty"/>
              <ItemNavbar  route="RickAndMorty/"
             myStyles="text-white fond-bold m-2 hover:text-sky-400 hover:underline"
             contentItem="cats"/>
              <ItemNavbar  route="RickAndMorty/"
             myStyles="text-white fond-bold m-2 hover:text-sky-400 hover:underline"
             contentItem="Gift  "/>
    </header>
    </>
  )
}

export default Header
