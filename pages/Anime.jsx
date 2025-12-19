import React from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import { useParams } from 'react-router-dom'
import Details from '../components/reuse/details'

const AnimePage = () => {
  const {malid} = useParams();
  return (

    <div>
       
      <Navbar />
      
      {/* <Sidebar /> */}
      <Details malId={malid}/>
    </div>
    
  )
}

export default AnimePage