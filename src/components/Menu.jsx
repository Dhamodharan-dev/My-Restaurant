import React from 'react'
import MenuImg1 from '../assets/menu1.png'
import MenuImg2 from '../assets/menu2.png'

function Menu() {
    const southFoods = [
        { dish: 'Idli', price: '5.00' },
        { dish: 'Dosa', price: '20.00' },
        { dish: 'Parata Set', price: '30.00' },
        { dish: 'Uttappam', price: '20.00' },
        { dish: 'Onion Uttappam', price: '25.00' },
        { dish: 'Egg Uttappam', price: '30.00' },
        { dish: 'Egg Roast', price: '20.00' },
        { dish: 'Nehi Roast', price: '18.00' },
        { dish: 'Roast', price: '15.00' },
        { dish: 'Mutta Parata', price: '20.00' },
        { dish: 'Veech Parata', price: '25.00' },
        { dish: 'Egg Veech Parata', price: '30.00' },
        { dish: 'Kalaki', price: '15.00' },
        { dish: 'Mutta Porial', price: '15.00' },
        { dish: 'Puri Set', price: '30.00' },
        { dish: 'Pongal', price: '25.00' },
        { dish: 'Khichidi', price: '25.00' },
        { dish: 'Semiya', price: '40.00' },
        { dish: 'Upma', price: '40.00' }
    ]
    const nonVegFoods = [
        { dish: 'Mutton Biryani', price: '130.00' },
        { dish: 'Chicken Biryani', price: '100.00' },
        { dish: 'Egg Biryani', price: '70.00' },
        { dish: 'Chicken Rice', price: '100.00' },
        { dish: 'Egg Rice', price: '80.00' },
        { dish: 'Chicken Noodles', price: '100.00' },
        { dish: 'Egg Noodles', price: '80.00' },
        { dish: 'Chicken Manchurian', price: '100.00' },
        { dish: 'Chicken Fry', price: '90.00' },
        { dish: 'Butter Chicken', price: '100.00' },
        { dish: 'Garlic Chicken', price: '100.00' },
        { dish: 'Kadai Chicken', price: '80.00' },
        { dish: 'Egg Masala', price: '70.00' },
        { dish: 'Chicken Chettinad', price: '110.00' },
        { dish: 'Chicken Lollypop', price: '100.00' },
        { dish: 'Chicken 65', price: '100.00' },
        { dish: 'Chicken Spring Roll', price: '60.00' },
        { dish: 'Egg Spring Roll', price: '40.00' },
        { dish: 'Chicken Soup', price: '25.00' },
    ]
    return (
        <div id='menu' className='flex items-center justify-center mt-28 mb-24 pb-24 pt-24 relative'>
            <img src={MenuImg1} alt="Menu img" className='absolute top-0 right-0 w-60 md:w-96'/>
            <img src={MenuImg2} alt="Menu img" className='absolute bottom-0 left-0 w-60 md:w-96'/>
            <div className='flex flex-col items-center justify-center w-4/5 bg-white text-black p-10 rounded-md'>
                <h1 className='text-4xl p-5'>Menu</h1>
                <div className='w-full flex flex-col items-center md:flex-row md:justify-around'>
                    <div className='z-10'>
                        <h1 className='text-3xl text-center'>South indian</h1>
                        <div>
                            <ul className='flex items-center justify-center flex-col md:items-start'>
                                {southFoods.map((item, index) => [
                                    <li key={index}>{item.dish}-{item.price}</li>
                                ])}
                            </ul>
                        </div>
                    </div>
                    <div className='z-10'>
                        <h1 className='text-3xl text-center md:text-left'>Non veg</h1>
                        <div>
                            <ul className='flex items-center justify-center flex-col md:items-start'>
                                {nonVegFoods.map((item, index) => [
                                    <li key={index}>{item.dish}-{item.price}</li>
                                ])}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu