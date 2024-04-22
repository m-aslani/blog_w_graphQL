import React from 'react'
import Footer from './Footer'
import Header from "./Header"

function Index({children}) {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default Index