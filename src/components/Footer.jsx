import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import FooterBg from "../assets/footer.jpg";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};

const Footer = () => {
  return (
    <div style={bgImage} className="text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <a href="#" className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive">
              Coffee Links
            </a>
            <p className="pt-4">
              Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect Espresso Escape
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a href="https://www.facebook.com/richicoffee1/?locale=es_LA" target="_blank" className="inline-flex items-center bg-[#3d2517] py-2 px-4 text-sm rounded-full">
                <FaFacebook className="mr-2" />
                Facebook
              </a>
              <a href="https://www.instagram.com/richicoffee1/" target="_blank" className="inline-flex items-center bg-[#3d2517] py-2 px-4 text-sm rounded-full">
                <FaInstagram className="mr-2" />
                Instagram
              </a>
            </div>
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            {FooterLinks.map((data, index) => (
              <div className="py-8 px-4" key={index}>
                <h1 className="text-xl font-semibold sm:text-left mb-3">
                  {data.title}
                </h1>
                <a href={data.link} className="inline-block hover:scale-105 duration-200">
                  Visit
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

