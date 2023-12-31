import React from 'react'; 
import profileImg from '../../assets/images/Profilepic-portfolio.jpeg';
import CountUp from 'react-countup';
// import resume from '../../assets/images/'


const Hero = () =>{
return (
    <section className='pt-0' id='About'>
        <div className="container pt-14">
            <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                 {/* =========== hero left content======== */}
                 <div className='w-full md:basis-1/2'>
                    <h5 data-aos = "fade-right" 
                    data-aos-duration = '1500' 
                    className='text-headingColor font-[600] text-[16px]'>
                        Hello welcome,
                    </h5>
                    <h1 data-aos = "fade-up" 
                    data-aos-duration = '1500' 
                    className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'>I am Lelethu Mlinjana<br />Full Stack Developer
                    </h1>
                    <div data-aos = "fade-up" 
                    data-aos-duration = '1800' data-aos-delay= "200" 
                    className='flex items-center gap-6 mt-7'
                    >
                        {/* <a href="Contact">
                            <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-3 rounded-[8px]'><i class = "ri-mail--line"></i> Hire me</button></a> */}
                            {/* <a href = "Portfolio" class ="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor "
                            >
                                See portfolio
                            </a> */}
                    </div>
                    <p
                       data-aos = "fade-left" 
                       data-aos-duration = '1500' 
                       className="flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pr-10" 
                       >
                        <span>
                            <i class="ri-apps-2-line"></i>
                        </span>
                        -with a passion for tackling real-world challenges through code.I have  1 year experience in the field and a strong foundation in communication networks, my journey into software development began in Digital Academy and has been marked by continuous learning and growth. I specialize in both front-end and back-end development, proficient in technologies like React, Angular and  Node.js. I'm dedicated to crafting clean and maintainable code, and I believe in the power of collaboration and open-source contributions. Beyond coding, you'll find me exercising which fuel my creativity and energy levels being high for when I am at work. I'm always eager to connect with fellow developers and collaborators to explore new opportunities and create meaningful solutions. Let's connect and innovate together!





                        </p>
                        {/* <div style={{ marginTop: '20px' }}>
  <a href="https://drive.google.com/file/d/1Za6jsVbyKxf6KdDQIiqxwh7OTJXcYrWl/view?usp=drive_link" target="_blank" rel="noopener noreferrer" download>
    <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-3 rounded-[8px]'>
      <i className="ri-mail--line"></i> Hire me
    </button>
  </a>
</div> */}
                        <div className = "flex items-center gap-9 mt-14">
                            <span className='text-smallTextColor text-[15px] font-[600]'>
                                Follow me:
                            </span>
                            <span>
                            <a
                            href = " https://github.com/lelethuml"
                            className='text-smallTextColor text-[30px] font-[600]'
                            >
                                <i class="ri-github-line"></i>

                            </a>
                            </span>
                            <span>
                            <a
                            href = " https://www.linkedin.com/feed/"
                            className='text-smallTextColor text-[30px] font-[600]'
                            >

                                <i class="ri-linkedin-box-fill"></i>

                            </a>
                            </span>
                        
                            <span>
                            <a
                            href = "Instagram"
                            className='text-smallTextColor text-[30px] font-[600]'
                            >
                                <i class="ri-instagram-fill"></i>

                            </a>
                            </span>

                            

                        </div>
                 </div>
                 {/* =========== hero left content======== */}
                  {/* =========== hero img======== */}
                  <div className='basis-1/3 mt-10 sm:mt-0'>
                    <figure className='flex items-center justify-center '>
                        <img src={profileImg} alt = "" style={{ borderRadius: '25%' }} />

                    </figure>

                  </div>
                    {/* =========== hero img end======== */}
                    {/* =========== hero content right======== */}
                    <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end'>
                        <div className='mb-10'>
                            <h2 className='text-headingColor font-[700] text-[32px]'> 
                            <CountUp start = {0} end = {1} duration={2} suffix='+'/>
                            
                            </h2>
                         <h4 className='text-headingColor font-[600] text-[18px]'>
                            Year/s of Experience
                            </h4>   

                        </div>
                        <div className='mb-10'>
                            <h2 className='text-headingColor font-[700] text-[32px]'> 
                            <CountUp start = {0} end = {2} duration={2} suffix='+'/>
                            
                            </h2>
                         <h4 className='text-headingColor font-[600] text-[18px]'>
                            Projects Completed
                            </h4>   

                        </div>
                        {/* <div className='mb-10'>
                            <h2 className='text-headingColor font-[700] text-[32px]'> 
                            <CountUp start = {0} end = {6} duration={2} suffix='+'/>
                            
                            </h2>
                         <h4 className='text-headingColor font-[600] text-[18px]'>
                            Years of experience
                            </h4>   

                        </div> */}

                    </div>
                    {/* =========== hero content right end======== */}


            </div>

        </div>

    </section>
)
};

export default Hero;