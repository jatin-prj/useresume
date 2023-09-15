/* eslint-disable no-unused-vars */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import { navigation, userNavigation } from "../../Routes/Paths";
import { user } from "../../Layout/Adminboard/Profile/Profile";
import { Link, useLocation } from "react-router-dom";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Navbar() {
  const location = useLocation();
  return (
    <>
      <div className={`min-h-full`}>
        <Disclosure
          as="nav"
          // shadow-[0px_1px_10px_#999]
          className="fixed bg-white w-full h-[4rem] border-b-2 border-slate-50 shadow   z-10"
        >
          {({ open }) => (
            <>
              <div className="mx-auto max-w-screen-2xl px-4 sm:px-6  w-full">
                <div className="flex h-[4.5rem] items-center justify-between">
                  <div className="flex">
                    <div className="flex">
                      {/* <div className="flex items-center w-14 h-14">
                        <button className="rounded-md w-full text-white hover:bg-gray-700">
                          {Icons.barIcon}
                        </button>
                      </div> */}
                      <Link to={"/"}>
                        <div className="flex items-center w-52">
                          <p className="inline-block align-middle text-[#07919e] text-3xl w-full">
                            useResume
                          </p>
                        </div>
                      </Link>
                    </div>
                    <div className="2xl:flex xl:flex lg:flex items-center md:block hidden">
                      <div className=" flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className={`
                              ${
                                location.pathname.includes(item.path)
                                  ? "text-[#066970] px-3 py-2 text-sm font-medium"
                                  : "text-[#07919e] group relative inline-block overflow-hidden px-3 py-2 text-sm font-normal"
                              }
                            `}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                            <span class="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-[#07919e] transition-all duration-200 group-hover:w-full"></span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="grid w-full justify-items-end">
                    <div className="ml-4 flex items-center md:ml-6">
                      {" "}
                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            {/* <span className="sr-only">Open user menu</span> */}
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={`
                                      ${
                                        (active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700")
                                      }
                                    `}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={`
                        ${
                          (item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block rounded-md px-3 py-2 text-base font-medium")
                        }
                      `}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
