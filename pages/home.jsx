import React from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Main from '../components/main'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      
      <Sidebar />
      <Main/>
    </div>
  )
}

export default HomePage