// import React, { useState } from "react";
// import Header from "../../TemplateSections/Header";
// import AboutMe from "../../TemplateSections/AboutMe";
// import Contact from "../../TemplateSections/Contact";
// import Skills from "../../TemplateSections/Skills";
// import Experience from "../../TemplateSections/Experience";
// import Project from "../../TemplateSections/Project";

// export default function TwoColumnLayout() {
//   const [dragSection, setDragSection] = useState();
//   const [swapSection, setSwapSection] = useState();
//   const [isDragStart, setIsDragStart] = useState();
//   const components = [
//     { id: "header", name: <Header /> },
//     { id: "contact", name: <Contact /> },
//     { id: "about-me", name: <AboutMe /> },
//     { id: "skills", name: <Skills /> },
//     { id: "experience", name: <Experience /> },
//     { id: "project", name: <Project /> },
//   ];

//   const dragStart = (e) => {
//     //dragStart event function to get know drag startex
//     // e.dataTransfer.setData("draggedPackage", JSON.stringify(packages));
//     setDragSection(e.target.id);
//     setIsDragStart(true);
//   };

//   const dragEnd = (e) => {
//     //dragEnd event function to get know drag ended
//     e.preventDefault();
//     // setDragSection(e);
//     setIsDragStart(false);
//   };

//   const dragOver = (e) => {
//     // DragOver event function to get on which truck package comes
//     e.preventDefault();
//     setSwapSection(e.target.id);
//     console.log("DragOver", e.target);
//   };
//   const drop = (e) => {
//     //Drop event function, for get the dropped package as well as truck in which package dropped
//   };
//   console.log("drag>>>>>>..", dragSection);
//   console.log("swap>>>>>..", swapSection);

//   // swapBoxes = (fromBox, toBox) => {
//   //   let boxes = this.state.boxes.slice();
//   //   let fromIndex = -1;
//   //   let toIndex = -1;

//   //   for (let i = 0; i < boxes.length; i++) {
//   //     if (boxes[i].id === fromBox.id) {
//   //       fromIndex = i;
//   //     }
//   //     if (boxes[i].id === toBox.id) {
//   //       toIndex = i;
//   //     }
//   //   }

//   //   if (fromIndex != -1 && toIndex != -1) {
//   //     let { fromId, ...fromRest } = boxes[fromIndex];
//   //     let { toId, ...toRest } = boxes[toIndex];
//   //     boxes[fromIndex] = { id: fromBox.id, ...toRest };
//   //     boxes[toIndex] = { id: toBox.id, ...fromRest };

//   //     this.setState({ boxes: boxes });
//   //   }
//   // };
//   return (
//     <div className="flex justify-center ">
//       <div className="bg-white shadow-2xl mt-5 w-[49.6rem] h-auto mb-1 p-1">
//         <div>
//           <Header
//             className={`cursor-grab ${
//               isDragStart && dragSection === "header" && "opacity-[.01]"
//             }`}
//             id="header"
//             draggable
//             onDragStart={(e) => dragStart(e)}
//             onDragEnd={(e) => dragEnd(e)}
//             onDragOver={(e) => dragOver(e)}
//             onDrop={(e) => drop(e)}
//           />
//         </div>

//         <div className="grid grid-rows-3 grid-flow-col gap-1 ">
//           {/* ////////////////////////////////////// */}
//           <div className="row-span-3 bg-slate-500">
//             <Header
//               className={`cursor-grab ${
//                 isDragStart && dragSection === "contact" && "opacity-[.01]"
//               }`}
//               id="contact"
//               draggable
//               onDragStart={(e) => dragStart(e)}
//               onDragEnd={(e) => dragEnd(e)}
//               onDragOver={(e) => dragOver(e)}
//               onDrop={(e) => drop(e)}
//             />
//           </div>

//           <div className="col-span-2 flex flex-wrap bg-slate-500" id="about-me">
//             <AboutMe
//               className={`cursor-grab ${
//                 isDragStart && dragSection === "about-me" && "opacity-[.01]"
//               }`}
//               id="about-me"
//               draggable
//               onDragStart={(e) => dragStart(e)}
//               onDragEnd={(e) => dragEnd(e)}
//               onDragOver={(e) => dragOver(e)}
//               onDrop={(e) => drop(e)}
//             />
//           </div>

//           <div className="row-span-2 col-span-2 bg-slate-500">
//             <AboutMe
//               className={`cursor-grab ${
//                 isDragStart && dragSection === "skills" && "opacity-[.01]"
//               }`}
//               id="skills"
//               draggable
//               onDragStart={(e) => dragStart(e)}
//               onDragEnd={(e) => dragEnd(e)}
//               onDragOver={(e) => dragOver(e)}
//               onDrop={(e) => drop(e)}
//             />
//           </div>
//           {/* //////////////////////////////////// */}
//         </div>

//         <div className="grid gap-4 grid-cols-2 grid-flow-row auto-rows-max p-1">
//           <div className="bg-slate-500 flex flex-wrap">
//             <Experience
//               className={`cursor-grab ${
//                 isDragStart && dragSection === "experience" && "opacity-[.01]"
//               }`}
//               id="experience"
//               draggable
//               onDragStart={(e) => dragStart(e)}
//               onDragEnd={(e) => dragEnd(e)}
//               onDragOver={(e) => dragOver(e)}
//               onDrop={(e) => drop(e)}
//             />
//           </div>

//           <div className="bg-slate-500">
//             <Project
//               className={`cursor-grab ${
//                 isDragStart && dragSection === "project" && "opacity-[.01]"
//               }`}
//               id="project"
//               draggable
//               onDragStart={(e) => dragStart(e)}
//               onDragEnd={(e) => dragEnd(e)}
//               onDragOver={(e) => dragOver(e)}
//               onDrop={(e) => drop(e)}
//             />
//           </div>

//           <div className="bg-slate-500">
//             <div
//               className={`cursor-grab ${isDragStart && "opacity-[.01]"}`}
//               id=""
//               draggable
//               onDragStart={(e) => dragStart(e)}
//               onDragEnd={(e) => dragEnd(e)}
//               onDragOver={(e) => dragOver(e)}
//               onDrop={(e) => drop(e)}
//             >
//               03
//             </div>
//           </div>

//           <div className="bg-slate-500">
//             <div
//               className={`cursor-grab ${isDragStart && "opacity-[.01]"}`}
//               id=""
//               draggable
//               onDragStart={(e) => dragStart(e)}
//               onDragEnd={(e) => dragEnd(e)}
//               onDragOver={(e) => dragOver(e)}
//               onDrop={(e) => drop(e)}
//             >
//               04
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

{/* <div>
          <Header
            className={`cursor-grab ${
              isDragStart && dragSection === "header" && "opacity-[.01]"
            }`}
            id="header"
            draggable
            onDragStart={(e) => dragStart(e)}
            onDragEnd={(e) => dragEnd(e)}
            onDragOver={(e) => dragOver(e)}
            onDrop={(e) => drop(e)}
          />
        </div>

        <div className="flex flex-wrap justify-between p-1">
        
          <div className="bg-slate-500 w-[29%]">
            <Contact
              className={`cursor-grab ${
                isDragStart && dragSection === "contact" && "opacity-[.01]"
              }`}
              id="contact"
              draggable
              onDragStart={(e) => dragStart(e)}
              onDragEnd={(e) => dragEnd(e)}
              onDragOver={(e) => dragOver(e)}
              onDrop={(e) => drop(e)}
            />
          </div>

          <div className=" bg-slate-500 w-[69%]" id="about-me">
            <AboutMe
              className={`cursor-grab ${
                isDragStart && dragSection === "about-me" && "opacity-[.01]"
              }`}
              id="about-me"
              draggable
              onDragStart={(e) => dragStart(e)}
              onDragEnd={(e) => dragEnd(e)}
              onDragOver={(e) => dragOver(e)}
              onDrop={(e) => drop(e)}
            />
          </div>

          <div className="bg-slate-500 w-[69%] h-72 mt-1">
            <Project
              className={`cursor-grab ${
                isDragStart && dragSection === "project" && "opacity-[.01]"
              }`}
              id="project"
              draggable
              onDragStart={(e) => dragStart(e)}
              onDragEnd={(e) => dragEnd(e)}
              onDragOver={(e) => dragOver(e)}
              onDrop={(e) => drop(e)}
            />
          </div>
          <div className="bg-slate-500 w-[29%] h-72 mt-1">
            <Skills
              className={`cursor-grab ${
                isDragStart && dragSection === "skills" && "opacity-[.01]"
              }`}
              id="skills"
              draggable
              onDragStart={(e) => dragStart(e)}
              onDragEnd={(e) => dragEnd(e)}
              onDragOver={(e) => dragOver(e)}
              onDrop={(e) => drop(e)}
            />
          </div>

          <div className="bg-slate-500 w-full mt-1">
            <Experience
              className={`cursor-grab ${
                isDragStart && dragSection === "experience" && "opacity-[.01]"
              }`}
              id="experience"
              draggable
              onDragStart={(e) => dragStart(e)}
              onDragEnd={(e) => dragEnd(e)}
              onDragOver={(e) => dragOver(e)}
              onDrop={(e) => drop(e)}
            />
          </div>

          <div className="bg-slate-500 w-[49%] mt-1">
            <div
              className={`cursor-grab ${isDragStart && "opacity-[.01]"}`}
              id=""
              draggable
              onDragStart={(e) => dragStart(e)}
              onDragEnd={(e) => dragEnd(e)}
              onDragOver={(e) => dragOver(e)}
              onDrop={(e) => drop(e)}
            >
              03
            </div>
          </div>

          <div className="bg-slate-500 w-[49%] mt-1">
            <div
              className={`cursor-grab ${isDragStart && "opacity-[.01]"}`}
              id=""
              draggable
              onDragStart={(e) => dragStart(e)}
              onDragEnd={(e) => dragEnd(e)}
              onDragOver={(e) => dragOver(e)}
              onDrop={(e) => drop(e)}
            >
              04
            </div>
          </div>
         
        </div> */}


        // const handleDragStart = (e, index) => {
        //     console.log("indexd", index);
        //     setDragItem(index);
        //   };
        
        //   const handleDragEnter = (e, index) => {
        //     console.log("Enter index", index);
        //     setDragOverIndex(index);
        //   };
        
        //   const handleDragLeave = (e) => {
        //     setDragOverIndex(undefined);
        //   };
        //   const swapElements = (arr, index1, index2) => {
        //     arr[index1] = arr.splice(index2, 1, arr[index1])[0];
        //     return arr;
        //   };
        //   const handleDrop = (e, index) => {
        //     const newList = [...list];
        //     setList(swapElements(newList, dragItem, index));
        //   };
        //   const handleDragEnd = (e) => {
        //     setDragItem(undefined);
        //     setDragOverIndex(undefined);
        //   };