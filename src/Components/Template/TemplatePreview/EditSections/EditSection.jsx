/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { Forms } from "../EditSections/FormList";
export default function EditSection({ open, setOpen, section }) {
  const navigate = useNavigate();
  const cancelButtonRef = useRef(null);
  const templateId = localStorage.getItem("template-id");

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 transition ease-in-out delay-150"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${
              open && "transition ease-in-out delay-150"
            }`}
          />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full"
                style={{ width: "85.5rem" }}
              >
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="relative flex items-center justify-end bottom-[1.4rem] left-[1rem] sm:mx-0 sm:h-10">
                    <button
                      onClick={() => {
                        navigate(`/templates/preview/template-${templateId}`);
                        setOpen(false);
                      }}
                    >
                      <RxCross2 className="text-[2rem]" />
                    </button>
                  </div>

                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                      <div className="flex justify-between mt-2">
                        <div className="w-full bg-slate-50 flex justify-center">
                          <div className="w-3/4 mt-3">
                            <div className="bg-cyan-700 rounded-t-lg">
                              {section.component}
                            </div>
                            <div className="my-[5rem] border-2 border-cyan-500">
                              {Forms.map((form, index) => {
                                if (section.id === form.id) {
                                  return (
                                    <div key={index} className="p-[2rem]">
                                      {form.component}
                                    </div>
                                  );
                                }
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
