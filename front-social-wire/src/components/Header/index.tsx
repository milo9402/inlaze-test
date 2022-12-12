import React from 'react'
import Navbar from 'components/Navbar';

export default function Header({children}:any) {
  return (
    <div className='header_container'>
      <h1 className='header_title'> Wires </h1>
      <Navbar/>
    </div>
  )
}