import React from 'react'

function Contact() {
  return (
    <div id='contact' className='w-full bg-black mt-10'>
        <h1 className='text-4xl p-10 text-center'>Contact</h1>
        <div className='pb-10'>
            <p className='md:text-xl text-lg p-2 text-center'>044-83472374</p>
            <p className='md:text-xl text-lg p-2 text-center'>southindianfoods@gmail.com</p>
        </div>
        <ul className='flex justify-around pb-10'>
            <li><a href="">About</a></li>
            <li><a href="">Feedback</a></li>
            <li><a href="">helpsif@gmail.com</a></li>
        </ul>
        <footer className='text-center'>©copyright 2024</footer>
    </div>
  )
}

export default Contact