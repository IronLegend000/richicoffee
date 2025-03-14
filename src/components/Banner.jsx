import React from 'react';
import chiapas from '../assets/chiapas.png';
import BgTexture from '../assets/coffee-texture.jpg';
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const bgImage = {
    backgroundImage: `url(${BgTexture})`,
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const Banner = () => {
  return (
    <div style={bgImage}>
        <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div>
                    <img src={chiapas} alt="Boss Coffee Image" className='max-w-[430px] w-full mx-auto spin drop-shadow-xl'/>
                </div>
                <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                    <h1 className='text-3xl sm:text-4xl font-bold font-cursive'>Premium Blend Coffee</h1>
                    <p className='text-sm text-gray-500 tracking-wide leading-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat temporibus expedita aliquid facere ipsum deleniti vero dolorem, delectus vitae laborum animi iste ipsam veritatis a omnis minima iusto enim eveniet.
                    </p>
                    <div className='grid grid-cols-2 gap-6'>
                        <div className='space-y-5'>
                            <div className='flex items-center gap-3'>
                                <GrSecure className='text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100'/>
                                <span>Premium Coffee</span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <IoFastFood className='text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100'/>
                                <span>Hot Coffee</span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <GiFoodTruck className='text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100'/>
                                <span>De Caff Blend</span>
                            </div>
                        </div>
                        <div className='border-1-4 border-primary/50 pl-6  space-y-3'>
                            <h1 className='text-2xl font-semibold font-cursive '>Coffee Lover</h1>
                            <p className=' text-gray-500 text-sm'>
                                {""}
                                Descubre el auténtico sabor del café en
                                 cada taza con la variedad única que Richi Coffee ofrece.
                                  
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Banner;
