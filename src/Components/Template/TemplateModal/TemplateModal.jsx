import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
export default function TemplateModal({ open, setOpen, template }) {
  //   const [open, setOpen] = useState(true)
  const navigate = useNavigate();

  const cancelButtonRef = useRef(null);

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
                style={{ width: "85.5rem", height: "50rem" }}
              >
                {/* sm:max-w-lg */}
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="relative flex items-center justify-end bottom-[1.4rem] left-[1rem] sm:mx-0 sm:h-10">
                    <button onClick={() => setOpen(false)}>
                      <RxCross2 className="text-[2rem]" />
                    </button>
                  </div>

                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                      <div className="flex justify-between mt-2">
                        <div className="w-[63%] h-[35rem] bg-slate-50 flex items-center justify-center">
                          <div className="w-[20rem]">
                            <div>{template.template}</div>
                          </div>
                        </div>
                        <div className="flex flex-wrap w-[34%]">
                          <div className="w-full">
                            <Dialog.Title
                              as="h3"
                              className="text-base font-semibold leading-6 text-gray-900"
                            >
                              {`Template ${template.id}`}
                            </Dialog.Title>
                            <div className="mt-2">
                              <p className="text-sm text-gray-600 font-bold">
                                One of the Best Templates for your Resume.
                              </p>
                              <p className="mt-3">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Aliquid illo voluptatibus
                                minima voluptate alias totam deserunt, adipisci
                                in animi quae vel vitae nostrum, amet veritatis
                                aspernatur deleniti quos mollitia doloribus!
                                Omnis, libero? Rem, earum facilis officia
                                ratione recusandae impedit suscipit deserunt?
                                Dolorum, molestiae placeat optio cupiditate quod
                                soluta facere doloremque culpa ad dolorem, sunt
                                totam repudiandae praesentium, amet assumenda
                                quia.
                              </p>
                            </div>
                            <div className="relative top-[12rem] text-center">
                              <button
                                className="rounded bg-cyan-500 text-white p-3 hover:bg-cyan-700"
                                onClick={() => {
                                  navigate("/templates/info");
                                }}
                              >
                                Customize this template
                              </button>
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
