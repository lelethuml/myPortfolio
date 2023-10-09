import React, { useState, useEffect } from "react";
import data from "../../assets/data/portfolioData";
import secure from "../../assets/images/Secure-legacy.png";
import movie from "../../assets/images/Movie-room.png";

const Portfolio = () => {
  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState("all");

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };
  
  useEffect(() => {
    if (selectTab === "all") {
      setPortfolios(data);
    }
    if (selectTab === "web-design") {
      const filteredData = data.filter((item) => item.category === "web design");
      setPortfolios(filteredData);
    }
  }, [selectTab]); // Add selectTab as a dependency to useEffect

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700]">
              My projects
            </h3>
          </div>
          <div className="flex gap-3">
            <button
              className="text-smallTextColor border border-solid  border-smallTextColor py-2 px-4 rounded-[8px]"
              onClick={() => setSelectTab("all")}
            >
              all
            </button>
          </div>
          <div className="flex gap-3">
            <button
              className="text-smallTextColor border border-solid  border-smallTextColor py-2 px-4 rounded-[8px]"
              onClick={() => setSelectTab("web-design")}
            >
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
          {portfolios?.slice(0, nextItems)?.map((project, index) => (
            <div
              key={index}
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
            >
              <figure>
                <img
                  className="rounded-[8px]"
                  src={project.imgUrl}
                  alt={project.title}
                />
              </figure>
              <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <p className="text-white text-center mb-4">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                  >
                    See details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          {nextItems < portfolios.length && data.length > 6 && (
            <button
              onClick={loadMoreHandler}
              className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
            >
              Load more
            </button>
          )}
          <button
            onClick={loadMoreHandler}
            className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
          >
            Load more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;


























///////////////////////////////2nd code///////////////////////////////////////////////////

// import React,{useState,useEffect} from "react";
// import data from '../../assets/data/portfolioData'
// import secure from '../../assets/images/Secure-legacy.png'
// import movie from '../../assets/images/Movie-room.png'

// const Portfolio = () =>{
//     const [nextItems, setNextItems] = useState(6)
//     const [portfolios, setPortfolios] = useState(data)
//     const [selectTab, setSelectTab] = useState("all")

//     const loadMoreHandler = () =>{
//         setNextItems(prev => prev + 3)
//     };
//     useEffect(()=>{
//         if(selectTab==="all"){
//             setPortfolios(data)
//         }
//         if(selectTab==="web-design"){
//             const filteredData = data.filter(item=> item.category === "web design")
//             setPortfolios(filteredData)
//         }
//     })
//     return(
//         <section id ="portfolio">
//             <div className="container">
//                 <div className="flex items-center justify-between flex-wrap">
//                     <div className="mb-7 sm:mb-0">
//                         <h3 className="text-headingColor text-[2rem] font-[700]">
//                             My projects

//                         </h3>

//                     </div>
//                     <div className="flex gap-3">
//                         <button className="text-smallTextColor border border-solid  border-smallTextColor py-2 px-4 rounded-[8px]">
//                             all
//                         </button>
//                     </div>
//                     <div className="flex gap-3">
//                         <button className="text-smallTextColor border border-solid  border-smallTextColor py-2 px-4 rounded-[8px]">
//                             web design 
//                         </button>
//                     </div>
//                     <div className="flex gap-3">
//                         <button className="text-smallTextColor border border-solid  border-smallTextColor py-2 px-4 rounded-[8px]">
//                             ux design
//                         </button>
//                     </div>

//                 </div>
//                 <div className="flex items-center gap-4 flex-wrap mt-12">
//                     {
//                         portfolios?.slice(0,nextItems)?.map((Portfolio,index) => (
//                             <div 
//                             key= {index}
//                             data-aos="fade-zoom-in"
//                              data-aos-delay="50" 
//                              data-aos-duration="1000" 
//                              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]">
//                                 <figure>
//                                     {/* <img className="rounded-[8px]" src={portfolio.imgUrl} alt=""/> */}
//                                     <img class='mr-8 justify-between rounded-[8px]' src ={secure} alt=" " />
                                    
//                                 </figure>
//                                 <div className="w-full h-full bg-primaryColor bg-opicity-40 absolute top-0 left-0 z-[5] hidden group-hover:block "> 
//                                 <div className="w-full h-full flex items-center justify-center">
//                                     <button className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200 ">See details</button>
//                                 </div>
                                
//                                 </div>
                                
//                             </div>


//                         ))
//                     }

//                 </div>
//                 <div className="text-center mt-6">
//                     {
//                         nextItems< portfolios.length && data.length > 6 && ( 
//                         <button 
//                         onclick= {loadMoreHandler} 
//                         className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200 ">Load more</button>
//                     )}
//                     <button 
//                         onclick= {loadMoreHandler} 
//                         className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200 ">Load more</button>
                

//                 </div>

//             </div>


//         </section>
//     )
// }
// export default Portfolio;













































///////////////////////////////////1st code//////////////////////////////////////////////////////////////


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