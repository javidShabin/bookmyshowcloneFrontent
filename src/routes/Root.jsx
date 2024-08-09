import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <>
      <header className='shadow-lg flex justify-center py-6 w-full z-[999] bg-white sticky top-0 left-0'>
        <div className="container md:w-[90%] flex justify-between items-center">
            <h1 className="ml-3 sm:text-[21px] font-bold">BookMyMovie</h1>
            <nav className='hidden sm:flex'>
                <ul className="flex gap-6 font-semibold">
                    <li><a href="#"></a>Home</li>
                    <li><a href="#"></a>About</li>
                    <li><a href="#"></a>Movie</li>
                    <li><a href="#"></a>Contact</li>
                </ul>
            </nav>
            <div>
                <i class="ri-menu-line font-bold text-[23px] mr-3"></i>
            </div>
        </div>
      </header>
      <Outlet/>
      <footer></footer>
    </>
  )
}
