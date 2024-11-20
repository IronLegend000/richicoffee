import React from 'react';
import coffee2 from '../assets/coffee2.png';
import CoffeeHero from '../assets/coffe_hero.png';  // Correct path to the background image

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(${CoffeeHero})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '80px',  // Added margin to push the hero content below the navbar
  };

  const glassStyle = {
    backdropFilter: 'blur(3px) saturate(100%)',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',  // Adjusted opacity to 40%
    width: '100%',  // Covers the full width of the hero section
    height: '100%',  // Covers the full height of the hero section
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',  // Ensures text is visible against a lighter background
    padding: '20px',
  };

  return (
    <div style={heroStyle}>
      {/* Glassmorphism effect applied to the entire hero content */}
      <div style={glassStyle}>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Text content section */}
            <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Disfruta el Mejor <span style={{ color: '#E5A65E' }} className="font-cursive">Coffee</span> de México.
            </h1>

              <button className="mt-4 bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-4 py-2 hover:scale-105 duration-200">
                Coffee And Code
              </button>
            </div>
            {/* Image content section */}
            <div>
              <img src={coffee2} alt="Rich coffee" className="w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
