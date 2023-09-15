import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#12141e] pt-12">
      {/* ==========footer top======== */}
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Contacts:
            </h2>
            {/* Contact Information */}
            <ul className="text-white">
              <li className="mb-2">
                <i className="ri-phone-line mr-2"></i>Phone: +27 740 132 936
              </li>
              <li className="mb-2">
                <i className="ri-mail-line mr-2"></i>
                Email: lelethumlinjana99@gmail.com
              </li>
              <li>
                <i className="ri-map-pin-line mr-2"></i>
                Address: 335 Hospital view, Tembisa 1632
                
              </li>
            </ul>
          </div>
          {/* Other Footer Content */}
        </div>
      </div>
      {/* ==========footer top end======== */}
    </footer>
  );
};

export default Footer;
