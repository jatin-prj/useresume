import React, { useState } from "react";
import Header from "../../TemplateSections/Header";
import AboutMe from "../../TemplateSections/AboutMe";
import Contact from "../../TemplateSections/Contact";
import Skills from "../../TemplateSections/Skills";
import Experience from "../../TemplateSections/Experience";
import Project from "../../TemplateSections/Project";

const arrayComponent = [
  {
    id: "header",
    name: <Header />,
    // name: (
    //   <Header
    //     className={`cursor-grab ${
    //       isDragStart && dragSection === "header" && "opacity-[.01]"
    //     }`}
    //     id="header"
    //     draggable
    //     onDragStart={(e) => dragStart(e)}
    //     onDragEnd={(e) => dragEnd(e)}
    //     onDragOver={(e) => dragOver(e)}
    //     onDrop={(e) => drop(e)}
    //   />
    // ),
  },
  {
    id: "contact",
    name: <Contact />,
    // name: (
    //   <Contact
    //     className={`cursor-grab ${
    //       isDragStart && dragSection === "contact" && "opacity-[.01]"
    //     }`}
    //     id="contact"
    //     draggable
    //     onDragStart={(e) => dragStart(e)}
    //     onDragEnd={(e) => dragEnd(e)}
    //     onDragOver={(e) => dragOver(e)}
    //     onDrop={(e) => drop(e)}
    //   />
    // ),
  },
  {
    id: "about-me",
    name: <AboutMe />,
    // name: (
    //   <AboutMe
    //     className={`cursor-grab ${
    //       isDragStart && dragSection === "about-me" && "opacity-[.01]"
    //     }`}
    //     id="about-me"
    //     draggable
    //     onDragStart={(e) => dragStart(e)}
    //     onDragEnd={(e) => dragEnd(e)}
    //     onDragOver={(e) => dragOver(e)}
    //     onDrop={(e) => drop(e)}
    //   />
    // ),
  },
  {
    id: "skills",
    name: <Skills />,
    // name: (
    //   <Skills
    //     className={`cursor-grab ${
    //       isDragStart && dragSection === "skills" && "opacity-[.01]"
    //     }`}
    //     id="skills"
    //     draggable
    //     onDragStart={(e) => dragStart(e)}
    //     onDragEnd={(e) => dragEnd(e)}
    //     onDragOver={(e) => dragOver(e)}
    //     onDrop={(e) => drop(e)}
    //   />
    // ),
  },
  {
    id: "experience",
    name: <Experience />,
    // name: (
    //   <Experience
    //     className={`cursor-grab ${
    //       isDragStart && dragSection === "experience" && "opacity-[.01]"
    //     }`}
    //     id="experience"
    //     draggable
    //     onDragStart={(e) => dragStart(e)}
    //     onDragEnd={(e) => dragEnd(e)}
    //     onDragOver={(e) => dragOver(e)}
    //     onDrop={(e) => drop(e)}
    //   />
    // ),
  },
  {
    id: "project",
    name: <Project />,
    // name: (
    //   <Project
    //     className={`cursor-grab ${
    //       isDragStart && dragSection === "project" && "opacity-[.01]"
    //     }`}
    //     id="project"
    //     draggable
    //     onDragStart={(e) => dragStart(e)}
    //     onDragEnd={(e) => dragEnd(e)}
    //     onDragOver={(e) => dragOver(e)}
    //     onDrop={(e) => drop(e)}
    //   />
    // ),
  },
  {
    id: "other",

    name: <div>Other</div>,
  },
];

export default function TwoColumnLayout() {
  const [dragSection, setDragSection] = useState();
  const [swapSection, setSwapSection] = useState();
  const [dragItem, setDragItem] = useState();
  const [dragOverIndex, setDragOverIndex] = useState();
  const [isDragStart, setIsDragStart] = useState();
  const [array, setArray] = useState([...arrayComponent]);

  const arrayLayout = [
    { id: "header", className: "w-full mt-1" },
    { id: "contact", className: "w-[29%] mt-1" },
    { id: "about-me", className: "w-[69%] mt-1" },
    { id: "project", className: " w-[69%] mt-1" },
    { id: "skills", className: "w-[29%] mt-1" },
    { id: "experience", className: "w-full mt-1" },
    { id: "other", className: " w-full mt-1" },
  ];

  const dragStart = (e, index) => {
    //dragStart event function to get know drag startex
    e.dataTransfer.setData("dragContent", JSON.stringify());
    // setDragSection(e.target.id);
    // setIsDragStart(true);
    setDragItem(index);
  };
  console.log("dragItem", dragItem);

  const dragOver = (e, index) => {
    // DragOver event function to get on which truck package comes
    e.preventDefault();
    // setSwapSection(e.target.id);
    // console.log("DragOver", e.target);
    setDragOverIndex(index);
  };
  console.log("dragOverIndex",dragOverIndex);

  const swapElements = (arr, index1, index2) => {
    arr[index1] = arr.splice(index2, 1, arr[index1])[0];
    return arr;
  };

  const drop = (e, index) => {
    //Drop event function, for get the dropped package as well as truck in which package dropped
    setDragOverIndex(undefined);
    const newList = [...arrayComponent];
    setArray(swapElements(newList, dragItem, index));
  };
  // const dragLeave=(e)=>{
  //   setDragOverIndex(undefined);
  // }

  const dragEnd = (e) => {
    //dragEnd event function to get know drag ended
    e.preventDefault();
    // setDragSection(e);
    // setIsDragStart(false);
    setDragItem(undefined);
    setDragOverIndex(undefined);
  };

  console.log("drag>>>>>>..", dragSection);
  console.log("swap>>>>>..", swapSection);

  return (
    <div className="flex justify-center ">
      <div className="bg-white shadow-2xl mt-5 w-[49.6rem] h-auto mb-1 p-1">
        <div className="flex flex-wrap justify-between p-1">
          {arrayLayout.map((layout, key) => (
            <div className={`bg-slate-500 ${layout.className}`} key={key}>
              {array.map((component, key) => {
                if (layout.id === component.id) {
                  return (
                    <div
                      className={`cursor-grab ${
                        isDragStart &&
                        dragSection === component.id &&
                        "opacity-[.01]"
                      }`}
                      id={component.id}
                      draggable
                      onDragStart={(e) => dragStart(e, key)}
                      onDragEnd={(e) => dragEnd(e)}
                      onDragOver={(e) => dragOver(e, key)}
                      onDrop={(e) => drop(e, key)}
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
