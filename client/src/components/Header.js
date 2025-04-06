// import UnderConstruction from './UnderConstruction';
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [prevScrollY, setPrevScrollY] = useState(0); // State to store the previous scrollY value
  const [showHeader, setShowHeader] = useState(true); // State to track whether the header should be visible
    
    useEffect(() => {
      // Function to log the scroll position
      
      const handleScroll = () => {
        const currScrollY = window.scrollY;

        if (currScrollY < prevScrollY ) {
          setShowHeader(true);
        } else {
          setShowHeader(false);
        }

        // Update previous scrollY val
        setPrevScrollY(currScrollY);
      };

      // Add the event listener when the component mounts
      window.addEventListener('scroll', handleScroll);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollY]); // dependency array ensures this runs once when 'prevScrollY' changes


    return (
      <header 
        className={`fixed top-0 left-0 w-full flex items-center justify-between py-6 w-full z-50 transition-all duration-300 ${
          showHeader ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="ml-[5%] text-sm lg:text-base">
          <ul className="list fade-in-diagonal">
              <li><a href="#about">about</a></li>
              <li><a href="#projects">projects</a></li>
              {/* <li><a href="#film">film</a></li> */}
              <li><a href="#contact">contact</a></li>
          </ul>
        </div>

        {/* <div>
          <UnderConstruction/>
        </div> */}

        <div className="mr-[5%]">
          <a href="#home" className="font-bold fade-in-diagonal">amanda yee</a>
        </div>

      </header>
    );
};

export default Header;
