/* eslint-disable no-unused-vars */
import { Link, useLocation } from "react-router-dom";
import { navigation, userNavigation } from "Routes/Paths";
import { user } from "Layout/Adminboard/Profile/Profile";
import { useState } from "react";

export default function Navbar({ scrollTop }) {
  const location = useLocation();
  const [dropDownShow, setDropDownShow] = useState(false);
  const [navLinkShow, setNavLinkShow] = useState(false);

  return (
    <nav
      className={`fixed bg-white w-full h-[4rem] border-b-2 border-slate-50 shadow  z-10`}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              className="relative inline-flex p-2 bg-white text-cyan-800 rounded-lg border"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setNavLinkShow(!navLinkShow)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link to={"/"}>
                <div className="flex items-center w-52">
                  <p className="inline-block align-middle text-[#0e7490] text-3xl font-semibold w-full">
                    useResume
                  </p>
                </div>
              </Link>
            </div>
            <div className={`hidden sm:ml-6 sm:block`}>
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`
                              ${
                                location.pathname.includes(item.path)
                                  ? "nav-link"
                                  : "active-nav-link group"
                              }
                            `}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                    <span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-[#07919e] transition-all duration-200 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <!-- Profile dropdown --> */}
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-700"
                  id="user-menu-button"
                  onClick={() => setDropDownShow(!dropDownShow)}
                >
                  <span className="absolute -inset-1.5"></span>
                  {/* <span className="sr-only">Open user menu</span> */}
                  <img
                    className="h-8 w-8 rounded-full"
                    src={user.imageUrl}
                    alt=""
                  />
                </button>
              </div>

              {/* <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}

              <div
                className={`${
                  dropDownShow ? "block" : "hidden"
                } absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-cyan-400 ring-opacity-5 focus:outline-none flex flex-col`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
              >
                {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                {userNavigation.map((item) => (
                  <button key={item.name}>
                    <Link
                      to={item.path}
                      className={` ${"block px-4 py-2 text-sm text-gray-700 text-start"}`}
                    >
                      {item.name}
                    </Link>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div
        className={`${navLinkShow ? "block sm:hidden" : "hidden"} 
        " id="mobile-menu bg-white`}
      >
        <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col bg-[#fefefe] border-2">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`
                              ${
                                location.pathname.includes(item.path)
                                  ? "text-white px-3 py-2 text-sm font-semibold bg-cyan-700 rounded-md"
                                  : "text-cyan-700 group relative inline-block overflow-hidden px-3 py-2 text-sm font-medium "
                              }
                            `}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

// return (
//   <>
//     <div className={`min-h-full`}>
//       <nav
//         as="nav"
//         // shadow-[0px_1px_10px_#999]
//         className="fixed bg-white w-full h-[4rem] border-b-2 border-slate-50 shadow  z-10  "
//       >
//         {({ open }) => (
//           <>
//             {/* <span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-[#07919e] transition-all duration-200 group-hover:w-full"></span> */}
//             <div className="mx-auto max-w-screen-2xl px-4 sm:px-6  w-full ">
//               <div className="flex h-[4.5rem] items-center justify-between ">
//                 <div className="flex ">
//                   <div className="flex">
//                     <Link to={"/"}>
//                       <div className="flex items-center w-52">
//                         <p className="logo">useResume</p>
//                       </div>
//                     </Link>
//                   </div>
//                   <div className="2xl:flex xl:flex lg:flex items-center md:block hidden">
//                     <div className="flex items-baseline space-x-4">
//                       {navigation.map((item) => (
//                         <Link
//                           key={item.name}
//                           to={item.path}
//                           className={`
//                             ${
//                               location.pathname.includes(item.path)
//                                 ? "nav-link"
//                                 : "active-nav-link group"
//                             }

//                           `}
//                           aria-current={item.current ? "page" : undefined}
//                         >
//                           {item.name}
//                           <span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-[#07919e] transition-all duration-200 group-hover:w-full"></span>
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="grid w-full justify-items-end">
//                   <div className="ml-4 flex items-center md:ml-6">
//                     {" "}
//                     {/* Profile dropdown */}
//                     {/* <Menu as="div" className="relative ml-3">
//                       <div>
//                         <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                           <span className="absolute -inset-1.5" />
//                           <span className="sr-only">Open user menu</span>
//                           <img
//                             className="h-8 w-8 rounded-full"
//                             src={user.imageUrl}
//                             alt=""
//                           />
//                         </Menu.Button>
//                       </div>
//                       <Transition
//                         as={Fragment}
//                         enter="transition ease-out duration-100"
//                         enterFrom="transform opacity-0 scale-95"
//                         enterTo="transform opacity-100 scale-100"
//                         leave="transition ease-in duration-75"
//                         leaveFrom="transform opacity-100 scale-100"
//                         leaveTo="transform opacity-0 scale-95"
//                       >
//                         <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                           {userNavigation.map((item) => (
//                             <Menu.Item key={item.name}>
//                               {({ active }) => (
//                                 <a
//                                   href={item.href}
//                                   className={`
//                                     ${
//                                       (active ? "bg-gray-100" : "",
//                                       "block px-4 py-2 text-sm text-gray-700")
//                                     }
//                                   `}
//                                 >
//                                   {item.name}
//                                 </a>
//                               )}
//                             </Menu.Item>
//                           ))}
//                         </Menu.Items>
//                       </Transition>
//                     </Menu> */}
//                   </div>
//                 </div>
//                 <div className="-mr-2 flex md:hidden">
//                   {/* Mobile menu button */}
//                 </div>
//               </div>
//             </div>

//             <div className="md:hidden">
//               <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
//                 {navigation.map((item) => (
//                   <button
//                     key={item.name}
//                     as="a"
//                     href={item.href}
//                     className={`
//                       ${
//                         (item.current
//                           ? "bg-gray-900 text-white"
//                           : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                         "block rounded-md px-3 py-2 text-base font-medium")
//                       }
//                     `}
//                     aria-current={item.current ? "page" : undefined}
//                   >
//                     {item.name}
//                   </button>
//                 ))}
//               </div>
//               <div className="border-t border-gray-700 pb-3 pt-4">
//                 <div className="flex items-center px-5">
//                   <div className="flex-shrink-0">
//                     <img
//                       className="h-10 w-10 rounded-full"
//                       src={user.imageUrl}
//                       alt=""
//                     />
//                   </div>
//                   <div className="ml-3">
//                     <div className="text-base font-medium leading-none text-white">
//                       {user.name}
//                     </div>
//                     <div className="text-sm font-medium leading-none text-gray-400">
//                       {user.email}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-3 space-y-1 px-2">
//                   {userNavigation.map((item) => (
//                     <button
//                       key={item.name}
//                       as="a"
//                       href={item.href}
//                       className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
//                     >
//                       {item.name}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </nav>
//     </div>
//   </>
// );
