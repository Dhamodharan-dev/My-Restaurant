import React from 'react'

function Contact() {
  return (
    <div id='contact' className='w-full bg-black mt-10'>
        <h1 className='text-4xl p-10 text-center'>Contact</h1>
        <div className='pb-10'>
            <p className='md:text-xl text-lg p-2 text-center hover:text-yellow-400 cursor-pointer'>044-83472374</p>
            <p className='md:text-xl text-lg p-2 text-center hover:text-yellow-400 cursor-pointer'>southindianfoods@gmail.com</p>
        </div>
        <ul className='flex gap-10 justify-center pb-10'>
            <li className='hover:text-yellow-400'><a href="">About</a></li>
            <li className='hover:text-yellow-400'><a href="">Feedback</a></li>
            <li className='hover:text-yellow-400'><a href="">helpsif@gmail.com</a></li>
        </ul>
        <footer className='text-center'>©copyright 2024</footer>
    </div>
  )
}

export default Contact