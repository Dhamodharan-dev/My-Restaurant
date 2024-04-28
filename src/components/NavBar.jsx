import React from 'react'
import Logo from '../assets/logo.png'

function NavBar() {
  return (
    <section id='home' className="w-full flex justify-between flex-col md:flex-row">
      <aside className='aside-1'>
        <img src={Logo} alt="Logo" className='w-20' />
      </aside>
      <aside className="md:pr-10">
        <ul className='flex justify-center items-center w-full h-full gap-4 md:gap-8'>
          <a href="#home"><li className='hover:text-black hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Home</li></a>
          <a href="#menu"><li className='hover:text-black hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Menu</li></a>
          <a href="#contact"><li className='hover:text-black hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Contact</li></a>
        </ul>
      </aside>
    </section>
  )
}

export default NavBar