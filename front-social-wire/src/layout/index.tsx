
import React from 'react'
import Header from 'components/Header'
import { useLocation } from 'react-router-dom'


export default function Layout({children}: any) {
  const { pathname } = useLocation();

  return (
    <div className='layout_container'>
        { pathname !=='/' &&  <Header/>}
        <main>
          {children}
        </main>
    </div>
  )
}