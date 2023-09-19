/* eslint-disable no-eval */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
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
const Loader = lazy(() => import("../../Loader/Loader"));
// import Loader from "../../Loader/Loader";

const ResponsiveReactGridLayout = WidthProvider(Responsive);
export default function TemplatePreview() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState();

  const handleSelectTemplate = (id) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, "300");
    localStorage.setItem("template-id", id);
    navigate(`/templates/preview/template-${id}`);
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

  const getLayouts = () => {
    const savedLayout = localStorage.getItem("grid-layout");
    const layout = JSON.parse(savedLayout);
    const layoutArray = eval(layout);
    // console.log("??????????????", typeof eval(savedLayout), eval(savedLayout));
    // return savedLayout ? console.log("true") : console.log("false");
    return savedLayout ? layoutArray : Layout;
  };

  const handleLayoutChange = (layout, layouts) => {
    localStorage.setItem("grid-layout", JSON.stringify(layout));
    // console.log("layout", localStorage.getItem("grid-layout"));
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
                            <div className="flex justify-center w-full ">
                              <ResponsiveReactGridLayout
                                className={"layout bg-white"}
                                style={{ width: "800px" }}
                                layout={getLayouts()}
                                breakpoints={{
                                  lg: 1200,
                                  md: 996,
                                  sm: 768,
                                  xs: 480,
                                  xxs: 0,
                                }}
                                rowHeight={20}
                                cols={{ lg: 6, md: 5, sm: 3, xs: 2, xxs: 1 }}
                                compactType={"vertical"}
                                isBounded={true}
                                // isResizable={false}
                                onLayoutChange={handleLayoutChange}
                              >
                                {Layout.map((layout, index) => (
                                  <div
                                    // id={`${layout.id}`}
                                    key={index}
                                    data-grid={layout}
                                    className="cursor-grab w-full h-full p-2 border-b-2 bg-slate-500"
                                    // onClick={() => {
                                    //   layout.static
                                    // }}
                                  >
                                    {Sections.map((section, index) => {
                                      if (layout.id === section.id) {
                                        return (
                                          <div
                                            key={index}
                                            id={`${section.id}`}
                                            className="w-full h-full"
                                          >
                                            {section.name}
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
                        <ul className="sm:text-base list-disc">
                          {Sections.map((section, index) => (
                            <li key={index}>{section.id}</li>
                          ))}
                          {/* <li>
                            At least 10 characters (and up to 100 characters)
                          </li>
                          <li>At least one lowercase character</li>
                          <li>
                            Inclusion of at least one special character, e.g., !
                            @ # ?
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="p-2 bg-[#0a7c87] md:w-[18%] flex flex-col md:flex hidden md:fixed right-0"
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
                <a
                  className="block text-slate-800 py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white mt-auto"
                  href="#"
                >
                  Kuldip Chatrala
                </a>
                <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mt-2"></div>
                <p className="mb-1 px-5 py-3 text-left text-xs text-cyan-100">
                  Copyright WCG@2023
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mx-auto pt-4">
        <div className="flex gap-4 w-full">
          <div className="w-[69%] flex justify-center">
            <div className="bg-slate-100  w-[52rem] flex justify-center items-center">
              {isLoading ? (
                <div className="h-[51rem] flex justify-center items-center">
                  <Loader />
                </div>
              ) : (
                <div className="flex relative w-full">
                  <ResponsiveReactGridLayout
                    className={"layout"}
                    style={{ width: "50rem", marginLeft: "1rem" }}
                    rowHeight={15}
                    cols={{ lg: 6, md: 10, sm: 6, xs: 4, xxs: 2 }}
                    layout={Layout}
                    compactType={"vertical"}
                    isBounded={true}
                  >
                    {Layout.map((layout, index) => (
                      <div
                        key={index}
                        data-grid={layout}
                        className="bg-slate-500 w-full cursor-grab"
                      >
                        {Sections.map((section, index) => {
                          if (layout.id === section.id) {
                            return <div key={index}>{section.name}</div>;
                          }
                        })}
                      </div>
                    ))}
                  </ResponsiveReactGridLayout>
                </div>
              )}
            </div>
          </div>
          <div className="h-[55rem] bg-slate-50">
            <div className="w-[33rem]">
              <div className="border flex justify-center">
                <div className="flex flex-wrap justify-center gap-4 p-2">
                  {Templates.map((template, index) => (
                    <div
                      key={index}
                      className="cursor-pointer w-40"
                      onClick={() => {
                        handleSelectTemplate(template.id);
                      }}
                    >
                      {template.template}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    </>
  );
}
