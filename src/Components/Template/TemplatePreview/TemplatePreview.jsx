/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import { useLocation, useNavigate } from "react-router-dom";
import React, { lazy, useState } from "react";
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
  return (
    <>
      <div className="mx-auto pt-4">
        <div className="flex gap-4 w-full">
          <div className="w-[69%]">
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
            <div className="">
              <div className="border flex justify-center">
                <div className="flex flex-wrap justify-center gap-4 mt-5">
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
      </div>
      {/* <div className="mx-auto pt-4">
        <div className="flex gap-4 w-full">
          <div className="w-[69%]">
            {templateId === "1" ? (
              <Template1 />
            ) : templateId === "2" ? (
              <Template2 />
            ) : templateId === "3" ? (
              <Template3 />
            ) : templateId === "4" ? (
              <Template4 />
            ) : (
              ""
            )}
          </div>
          <div className="h-[55rem] bg-slate-50">
            <div className="">
              <div className="border flex justify-center">
                <div className="flex flex-wrap justify-center gap-4 mt-5">
                  {Templates.map((template, index) => (
                    <div key={index} className="w-40">
                      <button
                        onClick={() => {
                          // handleSelect(template);
                          localStorage.setItem("template-id", template.id);
                          setTemplateId(localStorage.getItem("template-id"));
                        }}
                      >
                        {template.template}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
