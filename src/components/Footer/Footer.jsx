import React from 'react'; 

const Footer = () =>{
return <footer className='bg-[#12141e] pt-12' >
     {/* ==========footer top======== */}

     <div className='container'>
        <div className='sm:flex items center justify-between md:gap-8'>
            <div className='w-full sm:w-1/2'>
                <h2 className='text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]'>Contacts:</h2>
                <a href="Contact">
                            <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-3 rounded-[8px]'><i class = "ri-mail--line"></i> Hire me</button></a>
                            <a href = "Portfolio" class ="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor "
                            >
                                See portfolio
                            </a>

            </div>
            {/* <div className='flex items-center gap-4 flex-wrap md:gap-2 mt-10 '>
                <span className='text-gray-300 font-[600] text-[15px]'>
                    Follow me:
                </span>
                <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                    <a href = "github" className='text-gray-300 font-[500] text-[18px]'>
                        <i class='ri-github-line'></i>
                         </a>
                </span>
                <span>
                            <a
                            href = "Linkedin"
                            className='text-smallTextColor text-[30px] font-[600]'
                            >
                               <i class="ri-linkedin-line"></i>

                            </a>
                            </span>
            </div> */}
             </div>

     </div>
        {/* ==========footer top end======== */}


</footer>
};

export default Footer;