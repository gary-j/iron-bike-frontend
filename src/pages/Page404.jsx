import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Page404 = () => {
  return (
    <div>
     <div className="NavbarProductsList">
        <Navbar />
      </div>
      <div className='pageNoFound'>
          <img className='pageNoFoundImage' src='../images/404-error.png' alt='404'/>
      </div>
        <Footer/>
    </div>
  )
}

export default Page404