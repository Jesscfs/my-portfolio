import React from 'react';
import supermarket from "../assets/portfolio/supermarket.png"
import e_commerce from "../assets/portfolio/e-commerce.png";
import gaming from "../assets/portfolio/gaming.png";
// import installNode from "../assets/portfolio/installNode.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: supermarket,
      name: "Supermarket Website",
      code: "React, HTML, CSS",
      href: "https://master--neon-kleicha-8ec1b3.netlify.app/"
    },
    {
      id: 2,
      src: gaming,
      name: "Gaming Website",
      code: "Next.js, HTML, Tailwind",
      href:"https://master--transcendent-parfait-621312.netlify.app/",
    },
    {
      id: 3,
      src: e_commerce,
      name: "E-commerce Website",
      code: "React, HTML, Sass",
      href: "https://639e3173e97dd369fd989dcd--jocular-mermaid-b10991.netlify.app/"
    },
    // {
    //   id: 4,
    //   src: reactSmooth
    // },
    // {
    //   id: 5,
    //   src: installNode
    // },
    // {
    //   id: 6,
    //   src: reactWeather
    // },
  ]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className=" pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-10 sm:px-0'>

          {portfolios.map(({ id, src, name, href, code }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <a href={href}><img src={src} alt="" className='rounded-md duration-300  object-cover hover:scale-105' /></a>
              <div className='flex items-center justify-center'>
                <p className='w-1/2 px-6 py-3 m-4 duration-200 font-bold hover:scale-105'>Technologies:<br/>
                  {code}
                </p>

              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  )
}

export default Portfolio