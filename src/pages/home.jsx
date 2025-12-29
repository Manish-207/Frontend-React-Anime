import React from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Main from '../components/main'
import Carousel from '../components/reuse/carausel'
import Overlay from '../components/reuse/blurOverlay'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      
      <Sidebar />
      <Overlay/>
      <Carousel/>
      <Main/>
    </div>
  )
}

export default HomePage