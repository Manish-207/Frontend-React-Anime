import React from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'

import Details from '../components/reuse/details'

const AnimePage = () => {
  return (
    <div>
       
      <Navbar />
      
      {/* <Sidebar /> */}
      <Details malId={20}/>
    </div>
    
  )
}

export default AnimePage