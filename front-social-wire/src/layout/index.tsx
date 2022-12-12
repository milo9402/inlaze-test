
import React from 'react'
import Footer from 'components/Footer'
import Header from 'components/Header'

export default function Layout({children}: any) {

  return (
    <div className='layout_container'>
        <Header>
        </Header>
        <main>
          Aqui esta el inicio de las cosas
        </main>
        <Footer/>
    </div>
  )
}