import React from 'react';
import HomeImg from '../assets/home.png';

function Home() {
  return (
    <section className="w-full h-4/5 flex flex-col-reverse justify-center items-center lg:flex-row lg:justify-around lg:items-center mt-10 md:mt-5">
      <div className="text-center lg:w-1/2 md:mt-0 mt-10">
        <h2 className="mb-8 md:text-4xl sm:text-2xl text-xl font-bold">Welcome to the</h2>
        <h1 className="mb-8 md:text-5xl sm:text-3xl text-2xl font-bold">South Indian Restaurant</h1>
        <h3 className="mb-8 md:text-xl sm:text-lg text-sm font-bold">Contact us for free home delivery</h3>
      </div>
      <div className="lg:w-1/2 lg:pl-10">
        <img src={HomeImg} alt="Homepage img" className="w-full" />
      </div>
    </section>
  );
}

export default Home;
