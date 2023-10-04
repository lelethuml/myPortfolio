import React from "react";
import data from '../../assets/data/portfolioData'
import secure from '../../assets/images/Secure-legacy.png'
import movie from '../../assets/images/Movie-room.png'

const Portfolio = () =>{
    return(
        <section id ="portfolio">
            <div className="container">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="mb-7 sm:mb-0">
                        <h3 className="text-headingColor text-[2rem] font-[700]">
                            My projects

                        </h3>

                    </div>
                    <div className="flex gap-3">
                        <button className="text-smallTextColor border border-solid  border-smallTextColor py-2 px-4 rounded-[8px]">
                            all
                        </button>
                    </div>
                    <div className="flex gap-3">
                        <button className="text-smallTextColor border border-solid  border-smallTextColor py-2 px-4 rounded-[8px]">
                            web design 
                        </button>
                    </div>
                    <div className="flex gap-3">
                        <button className="text-smallTextColor border border-solid  border-smallTextColor py-2 px-4 rounded-[8px]">
                            ux design
                        </button>
                    </div>

                </div>
                <div className="flex items-center gap-4 flex-wrap mt-12">
                    {
                        data?.map((Portfolio,index) => (
                            <div className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]">
                                <figure>
                                    {/* <img className="rounded-[8px]" src={portfolio.imgUrl} alt=""/> */}
                                    <img class='mr-8 justify-between rounded-[8px]' src ={secure} alt=" " />
                                    
                                </figure>
                                
                            </div>


                        ))
                    }

                </div>

            </div>

        </section>
    )
}
export default Portfolio;
















































// import React from 'react'; 
// import data from '../../assets/data/portfolioData'
// import secure from '../../assets/images/Secure-legacy.png'
// import movie from '../../assets/images/Movie-room.png'

// const Portfolio = () =>{
// return <section id= "portfolio">
//     <div className="container" >
//         <div className='flex items-center justify-between flex-wrap '>
//             <div className='mb-7 sm:mb-0'>
//                 <h3 className='text-headingColor text-2rem font-[700] '>
//                      My projects
//                 </h3>

//             </div>

//         </div>
//         <div className='flex item-center gap-4 flex-wrap mt-12'>
//             {
//                 data ?.map((Portfolio,index)=>(
//                     <div class=' flex  justify-between group max-w-full sm:w-[48.5%] md:w-[31.8] lg:w-[32.2%] flex-row relative z-[1]'>
//                         <figure>
                            
//                         </figure>
                       

//                         <img class='mr-8 justify-between rounded-[8px]' src ={secure} alt=" " />
//                             <img className='rounded-[8px]' src ={movie} alt=" " />
                       
//                         <div className='w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block '>
//                             <button>see details</button>
//                         </div>


//                     </div>
                    
                    
                    
//                 ))
                
//             }
//              </div>

//     </div>


// </section>
// };

// export default Portfolio;