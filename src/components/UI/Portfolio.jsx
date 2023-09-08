import react from 'react'; 
import data from '../../assets/data/portfolioData'

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
                data ?.map((Portfolio,index)=>(
                    <div className='group max-w-full sm:w-[48.5%] md:w-[31.8] lg:w-[32.2%] relative z-[1]'>
                        <figure>
                            <img className='rounded-[8px]' src ={Portfolio.imgUrl } alt=" " />
                        </figure>

                    </div>
                ))
            }
             </div>

    </div>


</section>
};

export default Portfolio;