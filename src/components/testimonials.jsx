import React from 'react';
import Slider from 'react-slick';

const TestimonialsData = [
    {
        id: 1,
        name: "Shaqq",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        img: "https://picsum.photos/201/201", // Replace "#" with actual image paths
    },
    {
        id: 2,
        name: "David",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        img: "https://picsum.photos/202/202",
    },
    {
        id: 3,
        name: "Carlos",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        img: "https://picsum.photos/203/203",
    },
    {
        id: 4,
        name: "Gaby",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        img: "https://picsum.photos/204/204",
    },
    {
        id: 5,
        name: "Juan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        img: "https://picsum.photos/205/205",
    }
];

const Testimonials = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1, // Corrected the property name
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='py-14 mb-10'>
            <div className='container'> {/* Fixed className spelling */}
                {/* Header section */}
                <div className='text-center mb-20'>
                    <h1 className='text-4xl font-bold text-gray-800'>
                        Testimonials
                    </h1>
                </div>

                {/* Testimonials Cards Section */}
                <div>
                    <Slider {...settings}>
                        {TestimonialsData.map((data) => (
                            <div key={data.id} className='my-6'>
                                <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative'>
                                    {/* Image section */}
                                    <div className='mb-4'>
                                        <img src={data.img} alt="" className='rounded-full w-20 h-20'/>
                                    </div>
                                    {/* Content section */}
                                    <div className='flex flex-col items-center gap-4'> {/* Fixed className spelling */}
                                        <div className='space-y-3'>
                                            <p className='text-xs text-gray-500'>{data.text}</p>
                                            <h1 className='text-xl font-bold text-black/80'>{data.name}</h1> {/* Adjusted text size and opacity */}
                                        </div>
                                    </div>
                                    <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>
                                        ,,
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonials; // Capitalized to match React component naming conventions
