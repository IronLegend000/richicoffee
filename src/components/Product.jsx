import React from 'react';
import grano from '../assets/grano.png';
import century from '../assets/century.png';
import boss from '../assets/boss.png';
import coffeOg from '../assets/coffee-og.png';
import Mayoreo from '../assets/Mayoreo.png';
import Grano_Verde from '../assets/grano-verde.png';

// Datos de productos correctamente estructurados y actualizados
const ProductsData = [
    {
        id: 1,
        img: grano,
        name: "Grano Coffee",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni.",
        aosDelay: 100
    },
    {
        id: 2,
        img: century,
        name: "Century Brew",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni.",
        aosDelay: 150
    },
    {
        id: 3,
        img: boss,
        name: "BossCoffee Special",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni.",
        aosDelay: 200
    },
    {
        id: 4,
        img: coffeOg,
        name: "Original Coffee",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni.",
        aosDelay: 250
    },
    {
        id: 5,
        img: Mayoreo,
        name: "Mayoreo Mix",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni.",
        aosDelay: 300
    },
    {
        id: 6,
        img: Grano_Verde,
        name: "Green Grain",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni.",
        aosDelay: 350
    }
];

const Product = () => {
  return (
    <div className='py-10'>
        <div className="container">
            {/*header*/}
            <div className='text-center mb-20 '>
                <h1 className='text-4xl font-bold font-cursive text-gray-800'>
                    Best Coffee For You
                </h1>
            </div>
            {/* Products Card Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-14 place-items-center">
                {ProductsData.map((product, index) => (
                    <div key={index} className="card rounded-xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative"
                         data-aos="fade-up" data-aos-delay={product.aosDelay}>
                        <img src={product.img} alt={product.name} className="max-w-[280px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300"/>
                        <div className="p-4 text-center">
                            <h3 className="text-xl font-bold">{product.name}</h3>
                            <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Product;
