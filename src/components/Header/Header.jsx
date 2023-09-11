import react ,{ useEffect, useRef } from "react";
// import react {useRef, useEffect} from 'react'; 


const Header = () =>{
    const headerRef = useRef(null)

    const steackyHeaderFunc = ()=>{
        window.addEventListener('scroll', ()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop >80)
            {
                headerRef.current.classList.add('sticky_header')
            }else
            {
                headerRef.current.classList.remove('sticky_header')
            }
        })
    }

    useEffect(()=>{
        steackyHeaderFunc()

        return window.removeEventListener('scroll', steackyHeaderFunc)
    },[]);

    const handleClick = (e) => {
        e.preventDefault();
      
        const targetAttr = e.target.getAttribute('href');
      
        // Check if targetAttr exists and is not empty
        if (targetAttr) {
          // Remove the '#' symbol from targetAttr to get the selector
          const selector = targetAttr.slice(1); // Remove the '#' symbol
      
          // Find the target element using the selector
          const targetElement = document.getElementById(selector); // Assuming you are using IDs as selectors
      
          // Check if the target element exists
          if (targetElement) {
            const location = targetElement.offsetTop;
      
            window.scrollTo({
              top: location - 80,
              left: 0,
            });
          } else {
            console.error(`Element with ID '${selector}' not found.`);
          }
        }
      };

return <header ref= {headerRef} 
className = "w-full h-[80px] leading-[80px] flex items-center">

    <div className="container">
        <div className = "flex items-center justify-between">
            {/* =========== logo ======== */}
            <div className = "flex items-center gap-[10px]">
                <span className = "w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
                    L
                </span>
                <div className="leading -[20px]">
                    <h2 className = "text-xl text-smallTextColor font-[700]">Lelethu </h2>
                    {/* <p className = " text-smallTextColor text-[14px] font-[500]">
                        Personal
                    </p> */}
                </div>
            </div>
            {/* =========== logo end======== */}
            {/* =========== menue start ======== */}
            <div className="menue">
                <ul className="flex items-center gap-10">
                    <li>
                        {/* <a onClick = {handleClick} className="text-smallTextColor font-[600]" href = "About">About </a> */}
                        <a onClick={handleClick} className="text-smallTextColor font-[600]" href="#about">About</a>

                    </li>
                    <li>
                        <a onClick = {handleClick}  className="text-smallTextColor font-[600]" href = "services"> Services</a>
                    </li>
                    <li>
                        <a onClick = {handleClick}  className="text-smallTextColor font-[600]" href = "Portfolio">Portfolio </a>
                    </li>
                    <li>
                        <a onClick = {handleClick}  className="text-smallTextColor font-[600]" href = "Contact"> Contact</a>
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