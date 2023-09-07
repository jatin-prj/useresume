/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../../TemplateSections/Header";
import AboutMe from "../../TemplateSections/AboutMe";
import Contact from "../../TemplateSections/Contact";
import Skills from "../../TemplateSections/Skills";
import Experience from "../../TemplateSections/Experience";
import Project from "../../TemplateSections/Project";

// const arrayComponent = [
//   {
//     id: "header",
//     name: <Header />,
//   },
//   {
//     id: "contact",
//     name: <Contact />,
//   },
//   {
//     id: "about-me",
//     name: <AboutMe />,
//   },
//   {
//     id: "skills",
//     name: <Skills />,
//   },
//   {
//     id: "experience",
//     name: <Experience />,
//   },
//   {
//     id: "project",
//     name: <Project />,
//   },
//   {
//     id: "other",
//     name: <div>Other</div>,
//   },
// ];

export default function TwoColumnLayout() {
  const [dragSection, setDragSection] = useState();
  const [swapSection, setSwapSection] = useState();
  const [isDragStart, setIsDragStart] = useState();
  const [dragItem, setDragItem] = useState();
  const [dragOverIndex, setDragOverIndex] = useState();
  const [component, setComponent] = useState([
    {
      id: "header",
      name: <Header />,
    },
    {
      id: "contact",
      name: <Contact />,
    },
    {
      id: "about-me",
      name: <AboutMe />,
    },
    {
      id: "skills",
      name: <Skills />,
    },
    {
      id: "experience",
      name: <Experience />,
    },
    {
      id: "project",
      name: <Project />,
    },
    {
      id: "other",
      name: <div>Other</div>,
    },
  ]);
  const [dragId, setDragId] = useState();

  const arrayLayout = [
    { id: "header", className: "w-full mt-1" },
    { id: "contact", className: "w-[29%] mt-1" },
    { id: "about-me", className: "w-[69%] mt-1" },
    { id: "project", className: " w-[69%] mt-1" },
    { id: "skills", className: "w-[29%] mt-1" },
    { id: "experience", className: "w-full mt-1" },
    { id: "other", className: " w-full mt-1" },
  ];

  // const dragStart = (e, index) => {
  //   //dragStart event function to get know drag startex
  //   e.dataTransfer.setData("dragContent", JSON.stringify());
  //   setDragSection(e.target.id);
  //   setIsDragStart(true);
  // };
  // const dragOver = (e, index) => {
  //   // DragOver event function to get on which truck package comes
  //   e.preventDefault();
  //   setSwapSection(e.target.id);
  //   // console.log("DragOver", e.target);
  // };
  // const swapElements = (arr, index1, index2) => {
  //   arr[index1] = arr.splice(index2, 1, arr[index1])[0];
  //   return arr;
  // };

  // const dragEnd = (e) => {
  //   //dragEnd event function to get know drag ended
  //   e.preventDefault();
  //   setDragSection(e);
  //   setIsDragStart(false);
  // };

  const handleDrag = (ev) => {
    setDragId(ev.currentTarget.id);
  };
  const handleDrop = (ev) => {
    const dragBox = component.find((box) => box.id === dragId);
    const dropBox = component.find((box) => box.id === ev.currentTarget.id);

    const dragBoxOrder = dragBox.order;
    const dropBoxOrder = dropBox.order;

    const newBoxState = component.map((box) => {
      if (box.id === dragId) {
        box.order = dropBoxOrder;
      }
      if (box.id === ev.currentTarget.id) {
        box.order = dragBoxOrder;
      }
      return box;
    });

    // Set a temporary transform property to reset the scale to 1
    const resetBoxState = newBoxState.map((box) => {
      box.transform = "scale(1)";
      return box;
    });

    setComponent(resetBoxState);

    // Use a small timeout to apply the new transform property
    setTimeout(() => {
      setComponent(newBoxState);
    }, 10);
  };

  return (
    <div className="flex justify-center ">
      <div className="bg-white shadow-2xl mt-5 w-[49.6rem] h-auto mb-1 p-1">
        <div className="flex flex-wrap justify-between p-1">
          {arrayLayout.map((layout, key) => (
            <div className={`bg-slate-500 ${layout.className}`} key={key}>
              {component &&
                component.map((component, key) => {
                  if (layout.id === component.id) {
                    return (
                      <div
                        key={key}
                        className={`cursor-grab ${
                          isDragStart &&
                          dragSection === component.id &&
                          "opacity-[.01]"
                        }`}
                        id={component.id}
                        draggable
                        onDragOver={(e) => e.preventDefault()}
                        onDragStart={(e) => {
                          handleDrag(e);
                        }}
                        onDrop={(e) => {
                          handleDrop(e);
                        }}
                        // onDragEnd={(e) => dragEnd(e)}
                        // onDragOver={(e) => dragOver(e, key)}
                        // onDrop={(e) => drop(e)}
                      >
                        {" "}
                        {component.name}{" "}
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
