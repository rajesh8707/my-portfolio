import React, { useEffect } from 'react';
import pdf from '../pdf/Resume.pdf';
import hero1 from '../../public/assets/hero/hero1.jpg';
import Typed from "typed.js";
import '../App.css'
import { useRef } from 'react';


const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {

    const options = {
      strings: ["Welcome to my profile", "My Name is Rajesh kumar", "I'm Frontend developer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };

    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();

    };
  }, []);

  return (
    <>
      <div className="containar home">
        <div className="left">
          <h1 ref={typedRef}>

          </h1>

          <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning">Download Resume</a>
        </div>
        <div className="right">
          <div >
            <img className='profile-img' src={hero1} alt="" />
          </div>

        </div>
      </div>
    </>
  )
}

export default Home