"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      <nav className="bg-white p-4 w-full shadow-md z-20 relative">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" legacyBehavior>
            <a className="hidden lg:block pl-4">
              <Image
                src="/pretonialogo.png"
                alt="Logo"
                width={80}
                height={50}
                className="cursor-pointer"
              />
            </a>
          </Link>
          <div className="hidden lg:flex space-x-10 justify-center flex-1">
            <Link href="/" legacyBehavior>
              <a className="text-[#01451E] font-aeonik font-light text-[16px] text-center hover:bg-orange-500 hover:text-white px-3 py-2 rounded transition duration-300">
                Home
              </a>
            </Link>
            <div className="relative group">
              <button className="text-gray-500 font-aeonik font-light text-[16px] hover:bg-orange-500 hover:text-white px-3 py-2 rounded transition duration-300 flex items-center">
                About Us <ArrowDropDownIcon />
              </button>
              <div className="absolute top-full left-0 bg-white shadow-md mt-2 w-48 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href="/about" legacyBehavior>
                  <a className="block px-4 py-2 text-gray-500 font-aeonik font-light text-[16px] hover:bg-orange-500 hover:text-white">
                    Our Story & Partners
                  </a>
                </Link>
                <Link href="/team" legacyBehavior>
                  <a className="block px-4 py-2 text-gray-500 font-aeonik font-light text-[16px] hover:bg-orange-500 hover:text-white">
                    Leadership
                  </a>
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-500 font-aeonik font-light text-[16px] hover:bg-orange-500 hover:text-white px-3 py-2 rounded transition duration-300 flex items-center">
                Join Us <ArrowDropDownIcon />
              </button>
              <div className="absolute top-full left-0 bg-white shadow-md mt-2 w-48 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href="/outreach" legacyBehavior>
                  <a className="block px-4 py-2 text-gray-500 font-aeonik font-light text-[16px] hover:bg-orange-500 hover:text-white">
                    Join Our Outreach
                  </a>
                </Link>
              </div>
            </div>
            <Link href="/news" legacyBehavior>
              <a className="text-gray-500 font-aeonik font-light text-[16px] hover:bg-orange-500 hover:text-white px-3 py-2 rounded transition duration-300">
                News & Events
              </a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="text-gray-500 font-aeonik font-light text-[16px] text-center hover:bg-orange-500 hover:text-white px-3 py-2 rounded transition duration-300">
                Contact Us
              </a>
            </Link>
          </div>
          <div className="lg:hidden flex items-center justify-between w-full">
            <Link href="/" legacyBehavior>
              <a className="ml-0">
                <Image
                  src="/landmarknav.png"
                  alt="Logo"
                  width={100}
                  height={30}
                  className="cursor-pointer"
                />
              </a>
            </Link>
            <button
              onClick={toggleMenu}
              className="text-gray-500 font-aeonik font-light text-[16px]"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden">
            <Link href="/" legacyBehavior>
              <a className="block text-gray-500 font-aeonik font-light text-[16px] py-2 hover:bg-orange-500 hover:text-white">
                Home
              </a>
            </Link>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="block text-gray-500 font-aeonik font-light text-[16px] py-2 w-full text-left hover:bg-orange-500 hover:text-white"
              >
                About Us <ArrowDropDownIcon />
              </button>
              {isDropdownOpen && (
                <div className="bg-white">
                  <Link href="/about" legacyBehavior>
                    <a className="block px-4 py-2 text-gray-500 font-aeonik font-light text-[16px] hover:bg-orange-500 hover:text-white">
                    Our Story & Partners 
                    </a>
                  </Link>
                  <Link href="/team" legacyBehavior>
                    <a className="block px-4 py-2 text-gray-500 font-aeonik font-light text-[16px] hover:bg-orange-500 hover:text-white">
                      Leadership
                    </a>
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="block text-gray-500 font-aeonik font-light text-[16px] py-2 w-full text-left hover:bg-orange-500 hover:text-white"
              >
                Join Us <ArrowDropDownIcon />
              </button>
              {isDropdownOpen && (
                <div className="bg-white">
                  <Link href="/outreach" legacyBehavior>
                    <a className="block px-4 py-2 text-gray-500 font-aeonik font-light text-[16px] hover:bg-orange-500 hover:text-white">
                      Join Our Outreach
                    </a>
                  </Link>
                </div>
              )}
            </div>
            <Link href="/contact" legacyBehavior>
              <a className="block text-gray-500 font-aeonik font-light text-[16px] py-2 hover:bg-orange-500 hover:text-white">
                Contact Us
              </a>
            </Link>
            <Link href="/news" legacyBehavior>
              <a className="block text-gray-500 font-aeonik font-light text-[16px] py-2 hover:bg-orange-500 hover:text-white">
                News
              </a>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;



// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <header>
//       <nav className="bg-white p-4 w-full shadow-md z-20 relative">
//         <div className="container mx-auto flex justify-between items-center">
//           <Link href="/" legacyBehavior>
//             <a className="pl-4">
//               <Image
//                 src="/landmarknav.png"
//                 alt="Logo"
//                 width={150}
//                 height={50}
//                 className="cursor-pointer"
//               />
//             </a>
//           </Link>

//           {/* Desktop Links */}
//           <div className="hidden lg:flex space-x-10 justify-center flex-1">
//             <Link href="/" legacyBehavior>
//               <a className="text-[#01451E] font-aeonik font-light text-[16px] text-center hover:bg-orange-500 hover:text-white px-3 py-2 rounded transition duration-300">
//                 Home
//               </a>
//             </Link>
//             <div className="relative group">
//               <button className="text-gray-500 font-aeonik font-light text-[16px] hover:bg-orange-500 hover:text-white px-3 py-2 rounded transition duration-300 flex items-center">
//                 About Us <ArrowDropDownIcon />
//               </button>
//               <div className="absolute top-full left-0 bg-white shadow-md mt-2 w-48 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <Link href="/about" legacyBehavior>
//                   <a className="block px-4 py-2 text-gray-500 font-aeonik font-light text-[16px] hover:bg-orange-500 hover:text-white">
//                     Our Story
//                   </a>
//                 </Link>
//                 <Link href="/team" legacyBehavior>
//                   <a className="block px-4 py-2 text-gray-500 font-aeonik font-light text-[16px] hover:bg-orange-500 hover:text-white">
//                     Leadership
//                   </a>
//                 </Link>
//               </div>
//             </div>
//             <div className="relative group">
//               <button className="text-gray-500 font-aeonik font-light text-[16px] hover:bg-orange-500 hover:text-white px-3 py-2 rounded transition duration-300 flex items-center">
//                 Join Us <ArrowDropDownIcon />
//               </button>
//               <div className="absolute top-full left-0 bg-white shadow-md mt-2 w-48 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <Link href="/outreach" legacyBehavior>
//                   <a className="block px-4 py-2 text-gray-500 font-aeonik font-light text-[16px] hover:bg-orange-500 hover:text-white">
//                     Join Our Outreach
//                   </a>
//                 </Link>
//               </div>
//             </div>
//             <Link href="/news" legacyBehavior>
//               <a className="text-gray-500 font-aeonik font-light text-[16px] hover:bg-orange-500 hover:text-white px-3 py-2 rounded transition duration-300">
//                 News & Events
//               </a>
//             </Link>
//             <Link href="/contact" legacyBehavior>
//               <a className="text-gray-500 font-aeonik font-light text-[16px] text-center hover:bg-orange-500 hover:text-white px-3 py-2 rounded transition duration-300">
//                 Contact Us
//               </a>
//             </Link>
//           </div>

//           {/* Mobile Menu Icon */}
//           <div className="lg:hidden flex items-center justify-between w-full">
//             <Link href="/" legacyBehavior>
//               <a className="ml-0">
//                 <Image
//                   src="/landmarknav.png"
//                   alt="Logo"
//                   width={100}
//                   height={30}
//                   className="cursor-pointer"
//                 />
//               </a>
//             </Link>
//             <button
//               onClick={toggleMenu}
//               className="text-gray-500 font-aeonik font-light text-[16px]"
//             >
//               {isOpen ? <CloseIcon /> : <MenuIcon />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Links */}
//         {isOpen && (
//           <div className="lg:hidden">
//             <Link href="/" legacyBehavior>
//               <a className="block text-gray-500 font-aeonik font-light text-[16px] py-2 hover:bg-orange-500 hover:text-white">
//                 Home
//               </a>
//             </Link>
//             <div className="relative">
//               <button
//                 onClick={toggleDropdown}
//                 className="block text-gray-500 font-aeonik font-light text-[16px] py-2 w-full text-left hover:bg-orange-500 hover:text-white"
//               >
//                 About Us <ArrowDropDownIcon />
//               </button>
//               {isDropdownOpen && (
//                 <div className="bg-white">
//                   <Link href="/about" legacyBehavior>
//                     <a className="block px-4 py-2 text-gray-500 font-aeonik font-light text-[16px] hover:bg-orange-500 hover:text-white">
//                       Our Story
//                     </a>
//                   </Link>
//                   <Link href="/team" legacyBehavior>
//                     <a className="block px-4 py-2 text-gray-500 font-aeonik font-light text-[16px] hover:bg-orange-500 hover:text-white">
//                       Leadership
//                     </a>
//                   </Link>
//                 </div>
//               )}
//             </div>
//             <div className="relative">
//               <button
//                 onClick={toggleDropdown}
//                 className="block text-gray-500 font-aeonik font-light text-[16px] py-2 w-full text-left hover:bg-orange-500 hover:text-white"
//               >
//                 Join Us <ArrowDropDownIcon />
//               </button>
//               {isDropdownOpen && (
//                 <div className="bg-white">
//                   <Link href="/outreach" legacyBehavior>
//                     <a className="block px-4 py-2 text-gray-500 font-aeonik font-light text-[16px] hover:bg-orange-500 hover:text-white">
//                       Join Our Outreach
//                     </a>
//                   </Link>
//                 </div>
//               )}
//             </div>
//             <Link href="/contact" legacyBehavior>
//               <a className="block text-gray-500 font-aeonik font-light text-[16px] py-2 hover:bg-orange-500 hover:text-white">
//                 Contact Us
//               </a>
//             </Link>
//             <Link href="/news" legacyBehavior>
//               <a className="block text-gray-500 font-aeonik font-light text-[16px] py-2 hover:bg-orange-500 hover:text-white">
//                 News
//               </a>
//             </Link>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
