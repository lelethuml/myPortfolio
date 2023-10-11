// import React, { useState, useEffect } from "react";
// import data from "../../assets/data/portfolioData";

// const Portfolio = () => {
//   const [nextItems, setNextItems] = useState(6);
//   const [portfolios, setPortfolios] = useState(data);
//   const [selectTab, setSelectTab] = useState("all");

//   const loadMoreHandler = () => {
//     setNextItems((prev) => prev + 3);
//   };

//   useEffect(() => {
//     if (selectTab === "all") {
//       setPortfolios(data);
//     }
//     if (selectTab === "web-design") {
//       const filteredData = data.filter((item) => item.category === "web design");
//       setPortfolios(filteredData);
//     }
//   }, [selectTab]);

//   return (
//     <section id="portfolio">
//       <div className="container">
//         <div className="flex items-center justify-between flex-wrap">
//           <div className="mb-7 sm:mb-0">
//             <h3 className="text-headingColor text-[2rem] font-[700]">
//               My projects
//             </h3>
//           </div>
//           <div className="flex gap-3">
//             <button
//               className="text-smallTextColor border border-solid  border-smallTextColor py-2 px-4 rounded-[8px]"
//               onClick={() => setSelectTab("all")}
//             >
//               all
//             </button>
//           </div>
//           <div className="flex gap-3">
//             <button
//               className="text-smallTextColor border border-solid  border-smallTextColor py-2 px-4 rounded-[8px]"
//               onClick={() => setSelectTab("web-design")}
//             >
//               web design
//             </button>
//           </div>
//           <div className="flex gap-3">
//             <button className="text-smallTextColor border border-solid  border-smallTextColor py-2 px-4 rounded-[8px]">
//               ux design
//             </button>
//           </div>
//         </div>
//         <div className="flex items-center gap-4 flex-wrap mt-12">
//           {portfolios?.slice(0, nextItems)?.map((project, index) => (
//             <div
//               key={index}
//               data-aos="fade-zoom-in"
//               data-aos-delay="50"
//               data-aos-duration="1000"
//               className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
//             >
//               <figure>
//                 <img
//                   className="rounded-[8px]"
//                   src={project.imgUrl}
//                   alt={project.title}
//                 />
//               </figure>
//               <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
//                 <div className="w-full h-full flex flex-col items-center justify-center">
//                   <p className="text-white text-center mb-4">
//                     {project.description}
//                   </p>
//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
//                   >
//                     See details
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="text-center mt-6">
//           {nextItems < portfolios.length && data.length > 6 && (
//             <button
//               onClick={loadMoreHandler}
//               className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
//             >
//               Load more
//             </button>
//           )}
//           <button
//             onClick={loadMoreHandler}
//             className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
//           >
//             Load more
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;


























///////////////////////////////2nd code///////////////////////////////////////////////////

import React from "react";
import secure from '../../assets/images/Secure-legacy.png'
import movie from '../../assets/images/Movie-room.png'
import portfolio from '../../assets/images/Portfolio 2023-10-11 at 09.38.45.png'

const ProjectPage = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      name: "The Movie Room",
      description: " Movie Room is your ultimate movie companion. Register, search for movies, and discover all the details you need, from release dates to actor information. Save movies for later and never miss a flick. It's your personal cinema at your fingertips!",
      imageUrl: movie, // Replace with your project image URL
      websiteUrl: "https://example.com/project3-website", // Add website URL for Project 3

    },
    {
      id: 2,
      name: "Secure Legacy",
      description: "Secure Legacy is your trusted guide to  your wealth insurance options. We demystify complex financial jargon and empower you with easy-to-understand insights, ensuring you make informed choices for a secure financial future.",
      imageUrl: secure, // Replace with your project image URL
      websiteUrl: "https://secure-legacy-v1.vercel.app/home", // Add website URL for Project 3
      

    },
    {
      id: 3,
      name: "Portfolio",
      description: "My web portfolio showcases my journey as a full-stack developer. Explore a collection of projects, from front-end designs to back-end functionality. Discover my skills, passion, and commitment to creating innovative web solutions.",
      imageUrl: portfolio,
      websiteUrl: "https://my-portfolio-blush-gamma.vercel.app/Portfolio", // Add website URL for Project 3

    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold mb-6">My Projects</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <li
            key={project.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={project.imageUrl}
            
              alt={project.name}
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
            <div className="bg-gray-100 px-6 py-4">
              {/* <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                See Details
              </a> */}
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primaryColor hover:underline"
              >
                Website
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectPage;















































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