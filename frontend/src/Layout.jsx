import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer'
import { Welcome } from './components/index';

function Layout() {
    return (
        <>
        <div className="bg-black">
            <Navbar/>
            {/* <Welcome/> */}
            </div>
            < Outlet/>
            <Footer/>
            
      </>
    )
}

export default Layout