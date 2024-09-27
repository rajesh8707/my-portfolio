import React, { useEffect } from 'react';
import pdf from '../pdf/Resume.pdf';
import hero1 from '../../public/assets/hero/hero1.jpg';
import '../App.css';


const Home = () => {
//   const typedRef = useRef(null);
//   useEffect(() => {

//     const options = {
//       strings: ["Welcome to my profile", "My Name is Rajesh kumar", "I'm Frontend developer"],
//       typeSpeed: 50,
//       backSpeed: 50,
//       loop: true
//     };

//     const typed = new Typed(typedRef.current, options);
//     return () => {
//       typed.destroy();

//     };
//   }, []);

  return (
    <>
      <div className="containar home" id="home">
        <div className="left">
          {/* <h1 ref={typedRef}>

          </h1> */}
          <h1>My Name is Rajesh kumar</h1>
          <p>I'm a frontend web developer.</p>

          <a 
          href={pdf}
           download="Resume.pdf"
            className="btn btn-outline-warning my-3"
            >
              Download Resume
              </a>
        </div>
        <div className="right">
          <div className='img' data-aos="fade-up-left"data-aos-duration="1000">
            <img className='profile-img' src={hero1} alt="" />
          </div>

        </div>
      </div>
    </>
  )
}

export default Home