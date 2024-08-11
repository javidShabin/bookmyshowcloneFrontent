import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Root() {
    const showToggleBar = () => {
        alert("ShowToggle")
    }
  return (
    <>
      <header className='h-[60px] shadow-lg flex justify-center py-6 w-full z-[999] bg-white sticky top-0 left-0 md:h-[80px] '>
        <div className="container md:w-[90%] flex justify-between items-center">
            <h1 className="ml-3 sm:text-[21px] font-bold">BookMyMovie</h1>
            <nav className='hidden md:flex'>
                <ul className="flex gap-6 font-semibold cursor-pointer">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><a href="#"></a>About</li>
                    <li><a href="#"></a>Movie</li>
                    <li><a href="#"></a>Contact</li>
                    <li><Link to={"/login"}>Login</Link></li>
                </ul>
            </nav>
            <div className='md:hidden' onClick={showToggleBar}>
                <i className="ri-menu-line font-bold text-[23px] mr-3"></i>
            </div>
        </div>
      </header>
      <Outlet/>
      <footer></footer>
    </>
  )
}
