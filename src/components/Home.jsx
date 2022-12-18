import React from 'react';
import { useState, useEffect } from 'react';
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

import 'animate.css';
import TrackVisibility from 'react-on-screen';


const Home = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index,setIndex] = useState(1);
  const toRotate = ["Web Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  },)

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(50);
    } else {
      index(prevIndex => prevIndex + 1);
    }
  }



  return (
    <div name="home" className='flex h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <TrackVisibility>
          {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__bounceInLeft" : ""}>
              <div className='flex flex-col justify-center h-full sm:w-[530px] '>
                <h1 className='text-4xl sm:text-6xl font-bold tracking-wide text-white'>Hi, I'm Jesus</h1>
                <h2 className='text-4xl pb-4 sm:text-6xl font-bold tracking-wide  text-cyan-400'><span className='txt-rotate' data-rotate='{"Web Developer"}'><span className='border-r-2 border-solid'>{text}</span></span></h2>
                
                <div>
                  <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-700 via-cyan-500 to-blue-300 cursor-pointer'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                      <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>}
        </TrackVisibility>
        <div>
          <img src={HeroImage} alt="my_profile"
            className='rounded-2xl mx-auto w-2/3 md:w-full ' />
        </div>
      </div>
    </div>
  )
}

export default Home