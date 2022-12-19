import React from 'react';
import { useState, useEffect } from 'react';
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

import 'animate.css';



const Home = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
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
    <div name="home" className='flex h-screen w-full bg-gradient-to-b overflow-hidden from-black via-black to-gray-800 '>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="30"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center">
        <div className='flex flex-1 flex-col pt-10 justify-center transform-none sm:w-[400px] w-[300px] '>
          <h1 className='text-4xl sm:text-6xl font-bold tracking-wide text-white'>Hi, I'm Jesus </h1>
          <h2 className='text-4xl pb-4 sm:text-6xl font-bold tracking-wide sm:w-[530px]  text-cyan-400'><span className='txt-rotate' data-rotate='{"Web Developer"}'><span className='border-r-2 border-solid'>{text}</span></span></h2>
          <div>
            <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  from-cyan-700 via-cyan-500 to-blue-300 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="my_profile"
            className=' m-auto w-auto h-auto pb-28 border-indigo-600 ' />
        </div>
      </div>
    </div>
  )
}

export default Home