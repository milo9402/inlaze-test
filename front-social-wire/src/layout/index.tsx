
import React from 'react'
import Footer from 'components/Footer'
import Header from 'components/Header'

export default function Layout({children}: any) {

  return (
    <div className='layout_container'>
        <Header/>
        {/* <main>
          {children}
        </main>
        <Footer/> */}
    </div>
  )
}