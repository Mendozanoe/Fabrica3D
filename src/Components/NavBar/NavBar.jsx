import React,{useState} from 'react'
import img from "../../assets/logoPico.png"
import "../NavBar/navbar.css"

const NavBar = () => {
  return (
    <div className='container-navbar'>
      <img className='logo' src={img} alt="logo" />
      <div className='navigate'>
       <div className='nav-block'>
       <a className="we" href="">Inicio</a>
        <a className='we' href="">Servicios </a>
        <a className='we' href="">Blog </a>
        <a className='we' href="">Contacto</a>
       </div>
      </div>
    </div>
  )
}

export default NavBar