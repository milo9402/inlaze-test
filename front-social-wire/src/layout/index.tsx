
import React from 'react'
import Footer from 'components/Footer'
import Header from 'components/Header'

export default function Layout({children}: any) {

  return (
    <div className='layout_container'>
        <Header/>
        <main>
          Aqui esta el inicio de las cosas
          {children}
        </main>
        <Footer/>
    </div>
  )
}