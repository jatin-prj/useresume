import Contact from "../../TemplateSections/Contact";
import Skills from "../../TemplateSections/Skills";
import Education from "../../TemplateSections/Education";
import AboutMe from "../../TemplateSections/AboutMe";
import Header from "../../TemplateSections/Header";
import Project from "../../TemplateSections/Project";
import Experience from "../../TemplateSections/Experience";
import { useState } from "react";

export default function SingleColumnTemplate() {
  const [dragItem, setDragItem] = useState();
  const [dragOverIndex, setDragOverIndex] = useState();

  const [list, setList] = useState([
    <Header />,
    <AboutMe />,
    <Contact />,
    <Skills />,
    <Education />,
    <Experience />,
    <Project />,
  ]);
  const handleDragStart = (e, index) => {
    setDragItem(list[index]);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
  };

  const handleDragOver = (e, index) => {
    setDragOverIndex(list[index]);

    // if the item is dragged over itself

    if (dragItem === dragOverIndex) {
      return;
    }

    // filter out the currently dragged item
    let items = list.filter((item) => item !== dragItem);

    // add the dragged item after the dragged over item
    items.splice(index, 0, dragItem);

    setList(items);
  };
  const handleDragEnd = () => {
    setDragItem(null);
  };

  // const swapElements = (arr, index1, index2) => {
  //   arr[index1] = arr.splice(index2, 1, arr[index1])[0];
  //   return arr;
  // };

  return (
    <>
      <div className="bg-gray-100 p-4  mx-auto w-1/2 ">
        <ul className="containe   w-100 overflow-auto">
          {list &&
            list.map((item, index) => (
              <li
                className={` ${
                  dragItem === list[index]
                    ? "opacity-[.01]  m-2 shadow-2xl border-2 p-2 rouded-lg bg-white cursor-grab "
                    : "m-2 p-2 rounded-lg shadow-2xl bg-white  border-2"
                }`}
                key={index}
                onDragOver={(e) => handleDragOver(e, index)}
              >
                <div
                  draggable
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragEnd={(e) => handleDragEnd(e)}
                >
                  {item}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
