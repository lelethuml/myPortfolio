import React from 'react'; 
import frontendImg from '../../assets/images/front-end.png'
import backendImg from '../../assets/images/backend.png'

const Services = () =>{
return (
    <section id = "Services">
        <div className='container lg:pt-5'>
            <div className='text-center'>
                <h2 className='text-headingColor font-[800] text-[2.4rem] mb-5'>
                    Services
                    </h2>
                    <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7'> As a skilled software developer and full-stack engineer, I offer a range of services to help businesses and individuals harness the power of technology to solve problems and drive success. Here's what I offer:
                    </p>

            </div>
            <div className='flex flex-col justify-center sm:py-12'>
                <div className='w-full py-3 sm:max-2-xl sm:mx-auto sm:px-0'>
                    <div className='relative text-gray-700 antialiased text-sm font-semibold'>
                          {/* =========== vertical line running through the middle======== */}
                          <div className='hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2'></div>
                           {/* =========== left card======== */}

                           <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>

                                <div className='flex justify-start w-full mx-auto items-center'>
                                    <div className=' w-full sm:w-1/2 sm:pr-8'>
                                        <div 
                                        data-aos = 'fade-right' 
                                        data-aos-duration = '1200' 
                                        className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600]text-xl '>Front-end Development</h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                                            Responsive Web Design: Craft visually stunning and user-friendly websites and web applications that adapt seamlessly to various devices.

Interactive User Interfaces: Create engaging front-end experiences using HTML, CSS, and JavaScript along with modern frameworks like React and Angular.

Cross-Browser Compatibility: Ensure your web applications work flawlessly across different web browsers, providing a consistent user experience.
                                                </p>

                                        </div>
                                    </div>
                                </div>
                                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 left-8 absolute-left-1/2 transform  -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                    <figure>
                                        <img src= {frontendImg} alt = " "/>
                                    </figure>

                                </div>

                                

                            </div>

                           </div>
                           {/* =========== right card======== */}
                           <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>
                                <div className='flex justify-end w-full mx-auto items-center'>
                                    <div className=' w-full sm:w-1/2 sm:pl-8'>
                                        <div 
                                        data-aos = 'fade-left'
                                        data-aos-delay = '50'
                                         data-aos-duration = '1400'
                                          className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600]text-xl '>Back-end Development</h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                                            Server-Side Logic: Develop robust server-side applications using Node.js to handle data processing, authentication, and business logic.

API Development: Design and build RESTful APIs that facilitate data exchange between front-end and back-end systems, enabling seamless communication.

Middleware Integration: Integrate third-party services, tools, and middleware to enhance your application's functionality and connectivity.
                                                </p>

                                        </div>
                                    </div>
                                </div>
                                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 left-8 absolute-left-1/2 transform  -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                    <figure>
                                        <img src= {backendImg } alt = " "/>
                                    </figure>

                                </div>

                                

                            </div>

                           </div>
                           {/* =========== left card======== */}
                           <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>

                                <div className='flex justify-start w-full mx-auto items-center'>
                                    <div className=' w-full sm:w-1/2 sm:pr-8'>
                                        <div 
                                        data-aos = 'fade-right' 
                                        data-aos-duration = '1600' 
                                        className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600]text-xl '>Database Services</h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                                            Database Design: Create structured and efficient database schemas tailored to your application's data storage and retrieval requirements.

Database Optimization: Fine-tune database performance, indexing, and query optimization to ensure fast and reliable data access.

Data Migration: Seamlessly migrate data between databases or platforms while preserving data integrity and minimizing downtime.
                                                </p>

                                        </div>
                                    </div>
                                </div>
                                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 left-8 absolute-left-1/2 transform  -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                    <figure>
                                        <img src= {frontendImg} alt = " "/>
                                    </figure>

                                </div>

                                

                            </div>

                           </div>
                           {/* =========== right card======== */}
                           <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>
                                <div className='flex justify-end w-full mx-auto items-center'>
                                    <div className=' w-full sm:w-1/2 sm:pl-8'>
                                        <div 
                                        data-aos = 'fade-left'
                                        data-aos-delay = '50'
                                         data-aos-duration = '1400'
                                          className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600]text-xl '>UI/UX Design</h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                                            User-Centric Design: Prioritize user experience with intuitive and user-friendly interface design, ensuring high user satisfaction and engagement.
                                                </p>

                                        </div>
                                    </div>
                                </div>
                                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 left-8 absolute-left-1/2 transform  -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                    <figure>
                                        <img src= {backendImg } alt = " "/>
                                    </figure>

                                </div>

                                

                            </div>

                           </div>
                           

                    </div>

                </div>

            </div>

        </div>

    </section>
)
};

export default Services;