/* eslint-disable array-callback-return */
import { useLocation, useNavigate } from "react-router-dom";
import { lazy, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import {
  Sections,
  Template1,
  Template2,
  Template3,
  Template4,
} from "../TemplateLayouts/Templates";
import { Templates } from "../TemplateLayouts/TemplateOptions";
import { AiFillEdit } from "react-icons/ai";
import EditSection from "../TemplateSections/EditSections/EditSection";
const Loader = lazy(() => import("../../Loader/Loader"));

const ResponsiveReactGridLayout = WidthProvider(Responsive);
export default function TemplatePreview() {
  const location = useLocation();
  const navigate = useNavigate();
  const templateId = localStorage.getItem("template-id");
  const [isLoading, setIsLoading] = useState();
  const [onHover, setOnHover] = useState(false);
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState();

  const handleEdit = (sectionId) => {
    setOpen(true);
    setSection(sectionId);
    navigate(`/templates/preview/template-${templateId}/edit-section`);
  };

  const Layout = location.pathname.includes("template-1")
    ? Template1
    : location.pathname.includes("template-2")
    ? Template2
    : location.pathname.includes("template-3")
    ? Template3
    : location.pathname.includes("template-4")
    ? Template4
    : Template1;

  const handleSelectTemplate = (id) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, "300");
    localStorage.setItem("template-id", id);
    navigate(`/templates/preview/template-${id}`);
  };

  return (
    <>
      <div className="sm:w-full ">
        <div className="sm:w-full h-full">
          <div className="flex h-screen sm:w-full sm:h-full ">
            <div className="flex sm:w-full sm:h-full">
              <div className="relative md:w-[82%] flex sm:p-1 ">
                <div className="shadow p-2 flex  justify-between md:w-full">
                  <div className="flex justify-between  md:w-full">
                    <div className="md:w-[75%]">
                      <div className="bg-slate-200 h-full flex justify-center items-center md:p-1">
                        <div className="">
                          {isLoading ? (
                            <div className="h-[51rem] flex justify-center items-center">
                              <Loader />
                            </div>
                          ) : (
                            <div className="flex justify-center w-full">
                              <ResponsiveReactGridLayout
                                className={"layout bg-white"}
                                style={{ width: "800px" }}
                                layout={Layout}
                                rowHeight={30}
                                compactType={"vertical"}
                                autoSize={true}
                                isBounded={true}
                                margin={[8, 2]}
                                isResizable={onHover}
                              >
                                {Layout.map((layout, index) => (
                                  <div
                                    key={index}
                                    data-grid={layout}
                                    className="cursor-grab w-full h-full border-b-2 bg-cyan-900 p-1"
                                  >
                                    {Sections.map((section, index) => {
                                      if (layout && layout.id === section.id) {
                                        return (
                                          <div
                                            key={index}
                                            id={`${section.id}`}
                                            className={`w-full h-full`}
                                            onMouseMove={() =>
                                              setOnHover(!onHover)
                                            }
                                          >
                                            {section.component}
                                          </div>
                                        );
                                      }
                                    })}
                                  </div>
                                ))}
                              </ResponsiveReactGridLayout>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div
                      className=" md:w-[25%] md:p-2 sm:text-2xl 
                    "
                    >
                      <div className="flex justify-center">Sections</div>
                      <div className="sm:p-5">
                        {/* <ul className="sm:text-base list-disc"> */}
                        <div className="w-full">
                          {Sections.map((section, index) => (
                            <div
                              className={`flex text-base font-bold text-cyan-700`}
                              key={index}
                            >
                              <div
                                type="button"
                                className={`block w-[40%] text-left text-lg `}
                                aria-current="true"
                              >
                                {section.name}
                              </div>
                              <span>
                                <button onClick={() => handleEdit(section)}>
                                  <AiFillEdit className="w-full h-full text-lg mt-1" />
                                </button>
                              </span>
                            </div>
                          ))}
                        </div>
                        {/* </ul> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="p-2 bg-cyan-700 md:w-[18%] flex flex-col md:flex hidden md:fixed right-0"
                id="sideNav"
              >
                <div className="bg-white h-[45rem]">
                  <div className="flex flex-wrap justify-center items-center gap-2 h-full overflow-y-auto">
                    {Templates.map((template, index) => (
                      <div
                        key={index}
                        className="cursor-pointer w-32 h-max"
                        onClick={() => {
                          handleSelectTemplate(template.id);
                        }}
                      >
                        {template.template}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="block mt-3 text-base text-slate-900 py-2.5 px-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white mt-auto">
                  Kuldip Chatrala
                </div>
                <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mt-2"></div>
                <div className="mb-1 px-5 py-3 text-left text-sm text-cyan-100 flex ">
                  <span className="mr-1">©️</span> WCG@2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {open && <EditSection open={open} setOpen={setOpen} section={section} />}
    </>
  );
}
