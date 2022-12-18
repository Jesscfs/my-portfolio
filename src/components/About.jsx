import React from 'react'
import "animate.css";
import bioImg from "../assets/heroImage.jpg";


const About = () => {
    return (

        <section name="about" className=' h-screen w-screen bg-gradient-to-b from-gray-800 to-black text-white ' >
            <div className='container mx-auto h-full '>
                <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16 '
                    data-aos="fade-down"
                    data-aos-offset="200"
                    data-aos-delay="30"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center">
                    <div className='flex-1 h-max sm:max-h-max  overflow-hidden'>
                        <img src={bioImg} alt="" />
                    </div>
                    <div className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto flex flex-col justify-center items-center lg:items-start'>
                        <h1 className='text-[54px] lg:text-[90px] font-bold leading-[120%] tracking-[-0.05em] mb-2 capitalize'>About me</h1>
                        <p className=' mb-12 max-w-sm text-justify ' >
                            I am a front-end web developer with a <b>passion</b> in coding, as well as learning different technologies; from building/fixing computers to developing websites.
                            As an artist, I am able to express my creativity on every website I create.

                            
                            <br />
                            <br />
                            My websites are primarily coded using <b>HTML, CSS,</b> and <b>React</b> a JavaScript library.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

















// import React from 'react'
// import "animate.css";
// import TrackVisibility from 'react-on-screen'

// const About = () => {
//     return (

//         <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
//             <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
//                 <TrackVisibility>
//                     {({ isVisible }) =>
//                         <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
//                             <div className='pb-8'>
//                                 <p className=' sm:mt-4 text-4xl inline font-bold border-b-2  border-gray-500  '>About</p>
//                             </div>
//                             <div>
//                                 <p className='text-xl mt-5 text-justify'>
//                                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//                                     ipsa iste exercitationem sapiente eaque velit quo culpa, laboriosam
//                                     consectetur nemo expedita veniam ipsum quasi aperiam sed ut reprehenderit
//                                     cupiditate, voluptas obcaecati? Nobis ab corporis tempore voluptates odit
//                                     quae ex error, ad eius assumenda. Cumque libero veniam amet facilis sint voluptatibus!
//                                 </p>
//                                 <br />
//                                 <p className='text-xl text-justify'>
//                                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//                                     ipsa iste exercitationem sapiente eaque velit quo culpa, laboriosam
//                                     consectetur nemo expedita veniam ipsum quasi aperiam sed ut reprehenderit
//                                     cupiditate, voluptas obcaecati? Nobis ab corporis tempore voluptates odit
//                                     quae ex error, ad eius assumenda. Cumque libero veniam amet facilis sint voluptatibus!
//                                 </p>
//                             </div>
//                         </div>}
//                 </TrackVisibility >
//             </div>
//         </div>
//     )
// }

// export default About