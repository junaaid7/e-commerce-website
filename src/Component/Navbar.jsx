// import React from "react";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";
// import assets from "../assets/user.png";
// import { CiSearch } from "react-icons/ci";
// import { FiShoppingCart } from "react-icons/fi";

// function Navbar() {
//   const [Token, setToken] = useState(true);
//   return (
//     <nav className="bg-white-900 text-black px-6 py-4 flex items-center justify-between shadow-md m-auto max-w-5xl border-b border-gray-300">
//       {/* Logo */}
//       <NavLink to="/">
//         <div className="text-[24px] font-bold  w-[118px] h-[240x]">
//           Exclusive
//         </div>
//       </NavLink>

//       {/* Navigation Links */}
//       <ul className="flex gap-[68px] text-sm md:text-base ml-30">
//         <NavLink to="/">
//           <li className="hover:text-blue-400 cursor-pointer">Home</li>
//         </NavLink>
//         <NavLink to="/about">
//           <li className="hover:text-blue-400 cursor-pointer">About</li>
//         </NavLink>
//         <NavLink to="/contact">
//           <li className="hover:text-blue-400 cursor-pointer">Contact</li>
//         </NavLink>
//       </ul>
//       <div className="flex items-center ml-27 gap-6">
//         <div className="flex items-center gap-2 relative">
//           <input type="text" placeholder="search" size="20" />
//           <CiSearch className=" top-1 right-1  absolute font-medium" />
//         </div>
//         <NavLink to="/addcard">
//           <FiShoppingCart />
//         </NavLink>
//       </div>
//       {/* Right section: Search + Profile */}
//       <div>
//         {Token ? (
//           <div className="flex items-center gap-2 cursor-pointer group relative">
//             <img className="w-8 rounded-full" src={assets} alt="" />
//             <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
//               <div className=" flex flex-col roounded min-w-48 p-4 gap-4 bg-stone-200">
//                 <p className="hover:text-black cursor-pointer">
//                   Manage My Account
//                 </p>
//                 <p className="hover:text-black cursor-pointer">My Order</p>
//                 <p className="hover:text-black cursor-pointer">My Reviews</p>
//                 <p
//                   onClick={() => setToken()}
//                   className="hover:text-black cursor-pointer"
//                 >
//                   Logout
//                 </p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <button className=" text-black  md:px-3 md:py-2 md:text-base  cursor-pointer hover:bg-zinc-300 transition-all duration-300 shadow-md">
//             <NavLink to="/signup">Sign up</NavLink>
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
///////////////////////////////////////////////////

// import React from "react";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";
// import assets from "../assets/user.png";
// import { CiSearch } from "react-icons/ci";
// import { FiShoppingCart } from "react-icons/fi";

// function Navbar() {
//   const [Token, setToken] = useState(true);
//   return (
//     <nav className="sticky top-0 z-50 bg-white text-black px-6 py-4 flex items-center justify-between shadow-md m-auto max-w-5xl border-b border-gray-300">
//       {/* Logo */}
//       <NavLink to="/">
//         <div className="text-[24px] font-bold  w-[118px] h-[240x]">
//           Exclusive
//         </div>
//       </NavLink>

//       {/* Navigation Links */}
//       <ul className="flex gap-[68px] text-sm md:text-base ml-30">
//         <NavLink to="/">
//           <li className="hover:text-blue-400 cursor-pointer">Home</li>
//         </NavLink>
//         <NavLink to="/about">
//           <li className="hover:text-blue-400 cursor-pointer">About</li>
//         </NavLink>
//         <NavLink to="/contact">
//           <li className="hover:text-blue-400 cursor-pointer">Contact</li>
//         </NavLink>
//       </ul>
//       <div className="flex items-center ml-27 gap-6">
//         <div className="flex items-center gap-2 relative">
//           <input type="text" placeholder="search" size="20" />
//           <CiSearch className=" top-1 right-1  absolute font-medium" />
//         </div>
//         <NavLink to="/addcard">
//           <FiShoppingCart />
//         </NavLink>
//       </div>
//       {/* Right section: Search + Profile */}
//       <div>
//         {Token ? (
//           <div className="flex items-center gap-2 cursor-pointer group relative">
//             <img className="w-8 rounded-full" src={assets} alt="" />
//             <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
//               <div className=" flex flex-col roounded min-w-48 p-4 gap-4 bg-stone-200">
//                 <p className="hover:text-black cursor-pointer">
//                   Manage My Account
//                 </p>
//                 <p className="hover:text-black cursor-pointer">My Order</p>
//                 <p className="hover:text-black cursor-pointer">My Reviews</p>
//                 <p
//                   onClick={() => setToken()}
//                   className="hover:text-black cursor-pointer"
//                 >
//                   Logout
//                 </p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <button className=" text-black  md:px-3 md:py-2 md:text-base  cursor-pointer hover:bg-zinc-300 transition-all duration-300 shadow-md">
//             <NavLink to="/signup">Sign up</NavLink>
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

///////////////////////////////////////////////////////////////////

// import React from "react";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";
// import assets from "../assets/user.png";
// import { CiSearch } from "react-icons/ci";
// import { FiShoppingCart } from "react-icons/fi";

// function Navbar() {
//   const [Token, setToken] = useState(true);
//   return (
//     <nav className="sticky top-0 z-50 bg-white text-black px-6 py-4 flex items-center justify-between shadow-md m-auto max-w-5xl border-b border-gray-300">
//       {/* Logo */}
//       <NavLink to="/">
//         <div className="text-[24px] font-bold  w-[118px] h-[240x]">
//           Exclusive
//         </div>
//       </NavLink>

//       {/* Navigation Links */}
//       <ul className="flex gap-[68px] text-sm md:text-base ml-30">
//         <NavLink to="/">
//           <li className="hover:text-blue-400 cursor-pointer">Home</li>
//         </NavLink>
//         <NavLink to="/about">
//           <li className="hover:text-blue-400 cursor-pointer">About</li>
//         </NavLink>
//         <NavLink to="/contact">
//           <li className="hover:text-blue-400 cursor-pointer">Contact</li>
//         </NavLink>
//       </ul>
//       <div className="flex items-center ml-27 gap-6">
//         <div className="flex items-center gap-2 relative">
//           <input type="text" placeholder="search" size="20" />
//           <CiSearch className=" top-1 right-1  absolute font-medium" />
//         </div>
//         <NavLink to="/addcard">
//           <FiShoppingCart />
//         </NavLink>
//       </div>
//       {/* Right section: Search + Profile */}
//       <div>
//         {Token ? (
//           <div className="flex items-center gap-2 cursor-pointer group relative">
//             <img className="w-8 rounded-full" src={assets} alt="" />
//             <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
//               <div className=" flex flex-col roounded min-w-48 p-4 gap-4 bg-stone-200">
//                 <p className="hover:text-black cursor-pointer">
//                   Manage My Account
//                 </p>
//                 <p className="hover:text-black cursor-pointer">My Order</p>
//                 <p className="hover:text-black cursor-pointer">My Reviews</p>
//                 <p
//                   onClick={() => setToken()}
//                   className="hover:text-black cursor-pointer"
//                 >
//                   Logout
//                 </p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <button className="text-black md:px-3 md:py-2 md:text-base cursor-pointer hover:bg-zinc-300 active:bg-zinc-400 transition-all duration-300 shadow-md">
//             <NavLink
//               to="/signup"
//               className={({ isActive }) =>
//                 isActive ? "text-blue-500 font-semibold" : ""
//               }
//             >
//               Sign up
//             </NavLink>
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

//////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import assets from "../assets/user.png";
// import { CiSearch } from "react-icons/ci";
// import { FiShoppingCart } from "react-icons/fi";

// function Navbar() {
//   const navigate = useNavigate();
//   const [Token, setToken] = useState(null);

//   // Check localStorage token on page load + when token changes
//   useEffect(() => {
//     const storedToken = localStorage.getItem("token");
//     setToken(storedToken); // agar token mila to set ho jayega
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setToken(null);
//     navigate("/login");
//   };

//   return (
//     <nav className="sticky top-0 z-50 bg-white text-black px-6 py-4 flex items-center justify-between shadow-md m-auto max-w-5xl border-b border-gray-300">
//       {/* Logo */}
//       <NavLink to="/">
//         <div className="text-[24px] font-bold">Exclusive</div>
//       </NavLink>

//       {/* Links */}
//       <ul className="flex gap-[68px] text-sm md:text-base ml-30">
//         <NavLink to="/">
//           <li className="hover:text-blue-400 cursor-pointer">Home</li>
//         </NavLink>
//         <NavLink to="/about">
//           <li className="hover:text-blue-400 cursor-pointer">About</li>
//         </NavLink>
//         <NavLink to="/contact">
//           <li className="hover:text-blue-400 cursor-pointer">Contact</li>
//         </NavLink>
//       </ul>

//       {/* Search + Cart */}
//       <div className="flex items-center ml-27 gap-6">
//         <div className="flex items-center gap-2 relative">
//           <input type="text" placeholder="search" size="20" />
//           <CiSearch className="top-1 right-1 absolute font-medium" />
//         </div>
//         <NavLink to="/addcard">
//           <FiShoppingCart />
//         </NavLink>
//       </div>

//       {/* Right Section */}
//       <div>
//         {Token ? (
//           <div className="flex items-center gap-2 cursor-pointer group relative">
//             <img className="w-8 h-8 rounded-full" src={assets} alt="profile" />
//             <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
//               <div className="flex flex-col rounded min-w-48 p-4 gap-4 bg-stone-200">
//                 <p className="hover:text-black cursor-pointer">
//                   Manage My Account
//                 </p>
//                 <p className="hover:text-black cursor-pointer">My Order</p>
//                 <p className="hover:text-black cursor-pointer">My Reviews</p>
//                 <p
//                   onClick={handleLogout}
//                   className="hover:text-black cursor-pointer"
//                 >
//                   Logout
//                 </p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <button className="text-black md:px-3 md:py-2 md:text-base cursor-pointer hover:bg-zinc-300 active:bg-zinc-400 transition-all duration-300 shadow-md">
//             <NavLink
//               to="/signup"
//               className={({ isActive }) =>
//                 isActive ? "text-blue-500 font-semibold" : ""
//               }
//             >
//               Sign up
//             </NavLink>
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

/////////////////////////////////////////////////

import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import assets from "../assets/user.png";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { token, logout } = useContext(AuthContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white text-black px-4 md:px-6 py-3 shadow-md border-b border-gray-300">
      {/* Logo */}
      <NavLink to="/">
        <div className="text-[20px] md:text-[24px] font-bold">Exclusive</div>
      </NavLink>
      {/* Desktop links */}
      <div className="hidden md:flex items-center w-full md:w-auto justify-center">
        <ul className="flex gap-6 text-sm md:text-base">
          <NavLink to="/">
            <li className="hover:text-blue-400 cursor-pointer">Home</li>
          </NavLink>
          <NavLink to="/about">
            <li className="hover:text-blue-400 cursor-pointer">About</li>
          </NavLink>
          <NavLink to="/contact">
            <li className="hover:text-blue-400 cursor-pointer">Contact</li>
          </NavLink>
        </ul>
      </div>

      {/* Search + Cart (desktop) */}
      <div className="hidden md:flex items-center gap-4">
        <div className="flex items-center gap-2 relative">
          <input
            className="px-2 py-1 border rounded-md text-sm"
            type="text"
            placeholder="search"
          />
          <CiSearch className="top-1 right-1 absolute font-medium" />
        </div>
        <NavLink to="/addcard">
          <FiShoppingCart />
        </NavLink>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden ml-2 p-2 rounded-md"
        onClick={() => setMobileOpen((s) => !s)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      {/* Right Section */}
      <div className="hidden md:block">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 h-8 rounded-full" src={assets} alt="profile" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="flex flex-col rounded min-w-48 p-4 gap-4 bg-stone-200">
                <p className="hover:text-black cursor-pointer">
                  Manage My Account
                </p>
                <p className="hover:text-black cursor-pointer">My Order</p>
                <p className="hover:text-black cursor-pointer">My Reviews</p>
                <p
                  onClick={() => {
                    logout();
                    localStorage.clear();
                    navigate("/login");
                  }}
                  className=" pl-0 hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button className="text-black md:px-3 md:py-2 md:text-base cursor-pointer hover:bg-zinc-300 active:bg-zinc-400 transition-all duration-300 shadow-md">
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-semibold" : ""
              }
            >
              Sign up
            </NavLink>
          </button>
        )}
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full bg-white shadow-md border-t border-gray-200 z-40">
          <div className="p-4 flex flex-col gap-3">
            <NavLink to="/">
              <button onClick={() => setMobileOpen(false)} className="text-left">Home</button>
            </NavLink>
            <NavLink to="/about">
              <button onClick={() => setMobileOpen(false)} className="text-left">About</button>
            </NavLink>
            <NavLink to="/contact">
              <button onClick={() => setMobileOpen(false)} className="text-left">Contact</button>
            </NavLink>
            <div className="flex items-center gap-2">
              <input className="flex-1 px-2 py-1 border rounded-md text-sm" type="text" placeholder="Search" />
              <NavLink to="/addcard">
                <FiShoppingCart />
              </NavLink>
            </div>
            <div>
              {token ? (
                <button
                  onClick={() => {
                    logout();
                    localStorage.clear();
                    navigate("/login");
                    setMobileOpen(false);
                  }}
                  className="w-full text-left"
                >
                  Logout
                </button>
              ) : (
                <NavLink to="/signup">
                  <button onClick={() => setMobileOpen(false)} className="w-full text-left">Sign up</button>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
