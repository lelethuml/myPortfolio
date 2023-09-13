import React from 'react'; 
// import data from '../../assets/data/portfolioData'
import secure from '../../assets/images/Secure-legacy.png'
import movie from '../../assets/images/Movie-room.png'

const Portfolio = () =>{
return <section id= "portfolio">
    <div className="container" >
        <div className='flex items-center justify-between flex-wrap '>
            <div className='mb-7 sm:mb-0'>
                <h3 className='text-headingColor text-2rem font-[700] '>
                     My projects
                </h3>

            </div>

        </div>
        <div className='flex item-center gap-4 flex-wrap mt-12'>
            {
                // data ?.map((Portfolio,index)=>(
                    <div class=' flex  justify-between group max-w-full sm:w-[48.5%] md:w-[31.8] lg:w-[32.2%] flex-row relative z-[1]'>
                        {/* <figure>
                            
                        </figure> */}
                       

                        <img class='mr-8 justify-between rounded-[8px]' src ={secure} alt=" " />
                            <img className='rounded-[8px]' src ={movie} alt=" " />
                       
                        


                    </div>
                    
                    
                // ))
            }
             </div>

    </div>


</section>
};

export default Portfolio;