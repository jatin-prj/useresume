/* eslint-disable array-callback-return */
import { cloneElement, lazy, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Responsive, WidthProvider } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import { AiFillEdit } from "react-icons/ai";
import { IoTabletLandscape } from "react-icons/io5";
import { GrStatusInfoSmall } from "react-icons/gr";
import { PiTextTBold } from "react-icons/pi";
import { BsBorderAll } from "react-icons/bs";
import { GoCircle, GoCircleSlash } from "react-icons/go";
import { ImDownload } from "react-icons/im";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {
  Sections,
  Template1,
  Template2,
  Template3,
} from "Components/Template/TemplateLayouts/Templates";
import { Templates } from "Components/Template/TemplateLayouts/TemplateOptions";
const Loader = lazy(() => import("Components/Loader/Loader"));
const EditSection = lazy(() =>
  import("Components/Template/TemplatePreview/EditSections/EditSection")
);

const ResponsiveReactGridLayout = WidthProvider(Responsive);
export default function TemplatePreview() {
  const location = useLocation();
  const navigate = useNavigate();
  const templateId = localStorage.getItem("template-id");
  const downloadRef = useRef();
  const divRef = useRef();
  const [isLoading, setIsLoading] = useState();
  const [rowHeight, setRowHeight] = useState();
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState();
  const [enableEditing, setEnableEditing] = useState(false);
  const [headBgColor, setHeadBgColor] = useState("#3a82f6");
  const [headTextColor, setHeadTextColor] = useState("#000004");
  const [bgColor, setBgColor] = useState("#13758f");
  const [textColor, setTextColor] = useState("#000004");
  const [borderNone, setBorderNone] = useState(true);
  const [borderColor, setBorderColor] = useState();

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
    : Template1;

  const handleSelectTemplate = (id) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, "300");
    localStorage.setItem("template-id", id);
    navigate(`/templates/preview/template-${id}`);
  };

  const onBreakpointChange = (newBreakpoint, newCols) => {
    if (newBreakpoint === "md") {
      console.log("md", newBreakpoint);
      setRowHeight(31);
    } else if (newBreakpoint === "sm") {
      console.log("sm", newBreakpoint);
      setRowHeight(22);
    } else if (newBreakpoint === "xs") {
      console.log("xs", newBreakpoint);
      setRowHeight(15);
    }
  };

  const printDocument = (downloadRef) => {
    console.log("downloadRef", downloadRef);
    html2canvas(downloadRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  };

  return (
    <>
      <div className="w-full">
        <div className="w-full h-full">
          <div className="flex w-full h-full ">
            {/* Preview section Start */}
            <div className="flex sm:w-full sm:h-full">
              <div className="relative sm:w-[100%] xl:w-[82%] flex sm:p-1 ">
                <div className="shadow p-2 flex  justify-between md:w-full">
                  <div className="flex justify-around xl:justify-normal md:w-full">
                    {/* Template preview section Start */}
                    <div className="xl:w-[75%] w-[70%]">
                      <div className="bg-slate-100 h-full flex justify-center items-center p-2">
                        <div className="xl:w-[793px] md:w-[600px] w-[400px]">
                          {isLoading ? (
                            <div className="h-[51rem] flex justify-center items-center">
                              <Loader />
                            </div>
                          ) : (
                            <div className="" ref={downloadRef}>
                              <ResponsiveReactGridLayout
                                className={`layout bg-[${bgColor}] p-0 w-full`}
                                layout={Layout}
                                breakpoints={{
                                  xl: 1280,
                                  lg: 1024,
                                  md: 768,
                                  sm: 640,
                                  xs: 480,
                                }}
                                cols={{
                                  xl: 10,
                                  lg: 10,
                                  md: 10,
                                  sm: 10,
                                  xs: 10,
                                }}
                                rowHeight={rowHeight}
                                margin={enableEditing ? [5, 5] : [1, 1]}
                                isDraggable={enableEditing}
                                isResizable={enableEditing}
                                onBreakpointChange={(newBreakpoint, newCols) =>
                                  onBreakpointChange(newBreakpoint, newCols)
                                }
                              >
                                {Layout.map((layout, index) => (
                                  <div
                                    key={index}
                                    data-grid={layout}
                                    className={`w-full h-full ${
                                      borderNone &&
                                      `border border-[${borderColor}]`
                                    }   ${
                                      enableEditing && `cursor-grab`
                                    } text-[${textColor}]`}
                                    id="download"
                                  >
                                    {Sections.map((section, index) => {
                                      if (layout && layout.id === section.id) {
                                        return (
                                          <div
                                            key={index}
                                            ref={divRef}
                                            id={`${section.id}`}
                                            className={`w-full h-full overflow-hidden`}
                                          >
                                            {cloneElement(section.component, {
                                              headBgColor,
                                              headTextColor,
                                            })}
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
                    {/* Template preview section End */}

                    <div
                      className="xl:w-[25%] w-[20%] md:p-2 sm:text-2xl
                    "
                    >
                      <div className={`btn-text`}>
                        <button
                          className="w-full"
                          onClick={() => {
                            setEnableEditing(!enableEditing);
                          }}
                        >
                          {enableEditing
                            ? "Save Changes"
                            : "Enable Customization"}
                        </button>
                      </div>
                      <div className="sm:p-5">
                        <div className="w-full">
                          {Sections.map((section, index) => (
                            <div
                              key={index}
                              className={`flex text-base font-bold text-cyan-700 justify-between`}
                            >
                              <div
                                className={`block text-left text-lg `}
                                aria-current="true"
                              >
                                {section.name}
                              </div>
                              <div className={`${!enableEditing && "hidden"}`}>
                                <button onClick={() => handleEdit(section)}>
                                  <AiFillEdit className="w-full h-full text-lg" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <hr />
                      {/* Edit Section  */}
                      {enableEditing ? (
                        <div className=" bg-[#fcfcfc] sm:p-5 mt-2">
                          <div className="w-full">
                            <div
                              className={`flex text-base font-bold justify-between w-full`}
                            >
                              <div className="flex flex-col w-full">
                                <div className="flex justify-between items-center">
                                  <div className="flex items-center ">
                                    <GrStatusInfoSmall
                                      className={`text-[${bgColor}]`}
                                    />
                                    <p className={`ml-1 text-[${bgColor}]`}>
                                      Background
                                    </p>
                                  </div>

                                  <div className="flex justify-center w-6">
                                    <input
                                      type="color"
                                      value={bgColor}
                                      onChange={(e) => {
                                        setBgColor(e.target.value);
                                      }}
                                    />
                                  </div>
                                </div>

                                <div className="flex justify-between items-center">
                                  <div className="flex items-center">
                                    <PiTextTBold
                                      className={`text-[${textColor}]`}
                                    />
                                    <p className={`ml-1 text-[${textColor}]`}>
                                      Text Color
                                    </p>
                                  </div>

                                  <div className="flex justify-center w-6">
                                    <input
                                      type="color"
                                      value={textColor}
                                      onChange={(e) => {
                                        setTextColor(e.target.value);
                                      }}
                                    />
                                  </div>
                                </div>

                                <div className="flex justify-between items-center">
                                  <div className="flex items-center">
                                    <IoTabletLandscape
                                      className={`text-[${headBgColor}]`}
                                    />
                                    <p className={`ml-1 text-[${headBgColor}]`}>
                                      Header background
                                    </p>
                                  </div>

                                  <div className="flex justify-center w-6">
                                    <input
                                      type="color"
                                      value={headBgColor}
                                      onChange={(e) => {
                                        setHeadBgColor(e.target.value);
                                      }}
                                    />
                                  </div>
                                </div>

                                <div className="flex justify-between items-center">
                                  <div className="flex items-center">
                                    <PiTextTBold
                                      className={`text-[${headTextColor}]`}
                                    />
                                    <p
                                      className={`ml-1 text-[${headTextColor}]`}
                                    >
                                      Header Text Color
                                    </p>
                                  </div>

                                  <div className="flex justify-center w-6">
                                    <input
                                      type="color"
                                      value={headTextColor}
                                      onChange={(e) => {
                                        setHeadTextColor(e.target.value);
                                      }}
                                    />
                                  </div>
                                </div>

                                <div className="flex justify-between items-center">
                                  <div className="flex items-center">
                                    <BsBorderAll
                                      className={`text-[${borderColor}]`}
                                    />
                                    <p className={`ml-1 text-[${borderColor}]`}>
                                      Border
                                    </p>
                                  </div>

                                  <div className="flex justify-between items-center">
                                    <div
                                      className="text-lg"
                                      onClick={() => setBorderNone(!borderNone)}
                                    >
                                      {borderNone ? (
                                        <GoCircleSlash />
                                      ) : (
                                        <GoCircle />
                                      )}
                                    </div>

                                    <div className="flex justify-center w-6">
                                      <input
                                        type="color"
                                        className={`${
                                          !borderNone && `opacity-25`
                                        }  `}
                                        disabled={!borderNone}
                                        value={borderColor}
                                        onChange={(e) => {
                                          setBorderColor(e.target.value);
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className={`btn-text mt-2`}>
                          <button
                            className="w-full flex justify-center"
                            onClick={() => {
                              printDocument(downloadRef);
                            }}
                          >
                            <div className="flex items-center">
                              <ImDownload className={``} />
                              <p className={`ml-1 `}>Download</p>
                            </div>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* Preview section End */}

              {/* Tempalte Option section Start */}
              <div
                className="p-2 bg-cyan-700 lg:w-[18%] flex flex-col flex xl:block hidden right-0 fixed"
                id="sideNav"
              >
                <div className="bg-white h-[45rem] py-4">
                  <div className="flex flex-wrap justify-center items-center gap-2 h-full overflow-y-auto">
                    {Templates.map((template, index) => (
                      <div
                        key={index}
                        className="cursor-pointer w-32 h-max image-scale"
                        onClick={() => {
                          handleSelectTemplate(template.id);
                        }}
                      >
                        <div className="flex flex-col text-center">
                          {template.template}
                          <p>{` ${
                            template.id === 1
                              ? "50-50 Layout"
                              : template.id === 2
                              ? "30-70 Layout"
                              : template.id === 3
                              ? "60-40 Layout"
                              : ""
                          }`}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="block mt-3 text-base text-slate-900 py-2.5 px-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white mt-auto">
                  Kuldip Chhatrala
                </div>
                <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mt-2"></div>
                <div className="mb-1 px-5 py-3 text-left text-sm text-cyan-100 flex ">
                  <span className="mr-1">©️</span> WCG@2023
                </div>
              </div>
            </div>
            {/* Te  mpalte Option section End */}
          </div>
        </div>
      </div>
      {open && <EditSection open={open} setOpen={setOpen} section={section} />}
    </>
  );
}
