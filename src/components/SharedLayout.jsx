import React from 'react'
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

const SharedLayout = ({ open, setOpen}) => {
  return (
    <div className="h-full">
        <Nav open={open} setOpen={setOpen} />
        <Outlet />
        <Footer />
    </div>
  )
}

export default SharedLayout