/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./styles.css";
import Header from "../../TemplateSections/Header";
import Contact from "../../TemplateSections/Contact";
import AboutMe from "../../TemplateSections/AboutMe";
import Skills from "../../TemplateSections/Skills";
import Experience from "../../TemplateSections/Experience";
import Project from "../../TemplateSections/Project";

export default function TwoColumnLayout() {
  const [isDragStart, setIsDragStart] = useState();
  const [dragId, setDragId] = useState();
  const [dragOver, setDragOver] = useState();
  const [dragOverId, setDragOverId] = useState();
  const [boxes, setBoxes] = useState([
    {
      id: "header",
      name: <Header />,
      order: 1,
    },
    {
      id: "contact",
      name: <Contact />,
      order: 2,
    },
    {
      id: "about-me",
      name: <AboutMe />,
      order: 3,
    },
    {
      id: "skills",
      name: <Skills />,
      order: 4,
    },
    {
      id: "experience",
      name: <Experience />,
      order: 5,
    },
    {
      id: "project",
      name: <Project />,
      order: 6,
    },
    // {
    //   id: "other",
    //   name: <div>Other</div>,
    //   order: 7,
    // },
  ]);
  // const [boxes, setBoxes] = useState([
  //   {
  //     id: "Box-1",
  //     color: "red",
  //     order: 1,
  //   },
  //   {
  //     id: "Box-2",
  //     color: "green",
  //     order: 2,
  //   },
  //   {
  //     id: "Box-3",
  //     color: "blue",
  //     order: 3,
  //   },
  // ]);

  // const arrayLayout = [
  //   { id: "header", className: "w-full mt-1" },
  //   { id: "contact", className: "w-[29%] mt-1" },
  //   { id: "about-me", className: "w-[69%] mt-1" },
  //   { id: "project", className: " w-[69%] mt-1" },
  //   { id: "skills", className: "w-[29%] mt-1" },
  //   { id: "experience", className: "w-full mt-1" },
  //   { id: "other", className: " w-full mt-1" },
  // ];

  const arrayLayout = [
    { id: "header", className: "w-full mt-1" },
    { id: "contact", className: "w-[29%] mt-1" },
    { id: "about-me", className: "w-[69%] mt-1" },
    { id: "project", className: " w-[69%] mt-1" },
    { id: "skills", className: "w-[29%] mt-1" },
    { id: "experience", className: "w-full mt-1" },
    { id: "other", className: " w-full mt-1" },
  ];
  const handleDrag = (e) => {
    setDragId(e.target.id);
    setIsDragStart(true);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
    setDragOverId(e.target.id);
  };
  console.log("dragOver", dragOverId);

  const handleDrop = (e) => {
    setIsDragStart(false);
    setDragOver(false);
    const dragBox = boxes.find((box) => box.id === dragId);
    const dropBox = boxes.find((box) => box.id === e.target.id);

    const dragBoxOrder = dragBox.order;
    const dropBoxOrder = dropBox.order;
    console.log("dragBoxOrder", dragBoxOrder);
    console.log("dropBoxOrder", dropBoxOrder);

    const newBoxState = boxes.map((box) => {
      if (box.id === dragId) {
        box.order = dropBoxOrder;
      }
      if (box.id === e.target.id) {
        box.order = dragBoxOrder;
      }
      return box;
    });

    // Set a temporary transform property to reset the scale to 1
    const resetBoxState = newBoxState.map((box) => {
      box.transform = "scale(1)";
      return box;
    });

    setBoxes(resetBoxState);

    // Use a small timeout to apply the new transform property
    setTimeout(() => {
      setBoxes(newBoxState);
    }, 10);
  };
  console.log("dragId>>>>>", dragId);

  return (
    <div className="grid">
      <div className="flex justify-center ">
        <div className="bg-white shadow-2xl mt-5 w-auto h-auto mb-1 p-1">
          <div className="flex flex-wrap p-1">
            {boxes
              .sort((a, b) => a.order - b.order)
              .map((box) => (
                <Box
                  key={box.id}
                  boxNumber={box.id}
                  boxName={box.name}
                  draggable={true}
                  handleDrag={(e) => handleDrag(e)}
                  handleDrop={(e) => handleDrop(e)}
                  handleDragOver={(e) => handleDragOver(e)}
                  transform={box.transform}
                  isDragStart={isDragStart}
                  dragOverId={dragOverId}
                  dragOver={dragOver}
                  dragId={dragId}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export function Box({
  boxNumber,
  boxName,
  draggable,
  handleDrag,
  handleDrop,
  handleDragOver,
  transform,
  isDragStart,
  dragOverId,
  dragOver,
  dragId,
}) {
  return (
    <div
      draggable={draggable}
      id={boxNumber}
      onDragOver={(e) => handleDragOver(e)}
      onDragStart={handleDrag}
      onDrop={handleDrop}
      className={`w-auto h-auto p-5 my-2 mx-2 cursor-grab ${
        isDragStart && dragId === boxNumber && "opacity-[.01]"
      } ${dragOver && dragOverId === boxNumber && "border-4 border-sky-500"}`}
      style={{ transform }} // Apply the transform property
    >
      {boxName}
    </div>
  );
}
