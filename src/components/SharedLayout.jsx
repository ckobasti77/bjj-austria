import React from 'react'
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

const SharedLayout = ({ open, setOpen, theme, setTheme, scrollToTop }) => {
  return (
    <div className="h-full">
        <Nav open={open} setOpen={setOpen} theme={theme} setTheme={setTheme} scrollToTop={scrollToTop} />
        <Outlet />
        <Footer scrollToTop={scrollToTop}/>
    </div>
  )
}

export default SharedLayout