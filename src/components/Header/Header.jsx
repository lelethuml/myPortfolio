import react from 'react'; 

const Header = () =>{
return <header className = "w-full h-[80px] leading-[80px] flex items-center">

    <div className="container">
        <div className = "flex items-center justify-between">
            {/* =========== logo ======== */}
            <div className = "flex items-center gap-[10px]">
                <span className = "w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
                    L
                </span>
                <div className="leading -[20px]">
                    <h2 className = "text-xl text-smallTextColor font-[700]">Lelethu </h2>
                    <p className = " text-smallTextColor text-[14px] font-[500]">
                        Personal
                    </p>
                </div>
            </div>
            {/* =========== logo end======== */}
            {/* =========== menue start ======== */}
            <div className="menue">
                <ul className="flex items-center gap-10">
                    <li>
                        <a className="text-smallTextColor font-[600]" href = "About">About </a>
                    </li>
                    <li>
                        <a className="text-smallTextColor font-[600]" href = "Services"> Services</a>
                    </li>
                    <li>
                        <a className="text-smallTextColor font-[600]" href = "Portfolio">Portfolio </a>
                    </li>
                    <li>
                        <a className="text-smallTextColor font-[600]" href = "Contact"> Contact</a>
                    </li>
                    

                </ul>

            </div>
            {/* =========== menue end======== */}
             {/* =========== menue right======== */}
             <div className="flex items-center gap-4"> 
             <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300">
                <i class = "ri-send-plane-line"></i> Lets talk
             </button>
             <span className="text-2xl text-smallTextColor ">
                <i class ="ri-menu-line"></i> 
                </span>
             
             </div>
              {/* =========== menue end======== */}
             </div>

    </div>
</header>
};

export default Header;







// (
//     <header classname  = "w-full h-[80px] leading-[80px] flex items-center">
//     <div>Header</div>;
//     };