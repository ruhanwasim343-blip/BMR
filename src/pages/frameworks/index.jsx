import React from 'react'
import Framework1 from '../../components/framework/framework1'
import Footer2 from '../../components/footer/footer2'
import Framework2 from '../../components/framework/framework2'
import Navbar from '../../components/navbar'


export default function Framework() {
  return (
    <>
      <Navbar />
      <Framework1 />
      <Framework2 />
      <Footer2 />
    </>
  )
}
