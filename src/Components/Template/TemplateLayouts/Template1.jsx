/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import Header from "../TemplateSections/Header";
import AboutMe from "../TemplateSections/AboutMe";
import Contact from "../TemplateSections/Contact";
import Experience from "../TemplateSections/Experience";
import Skills from "../TemplateSections/Skills";
import Project from "../TemplateSections/Project";
import Education from "../TemplateSections/Education";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function Template1() {
  // const [mounted, setMounted] = useState(false);
  // const [isDraggable, setIsDraggable] = useState();

  const [layout, setLayout] = useState([
    {
      i: "header",
      x: 0,
      y: 0,
      w: 5,
      h: 5,
      name: <Header />,
      static: true,
    },
    { i: "contact", x: 0, y: 1, w: 5, h: 7, name: <Contact /> },
    {
      i: "about-me",
      x: 0,
      y: 2,
      w: 5,
      h: 6,

      name: <AboutMe />,
    },
    { i: "experience", x: 0, y: 3, w: 5, h: 10, name: <Experience /> },
    { i: "skills", x: 0, y: 4, w: 5, h: 6, name: <Skills /> },
    { i: "project", x: 0, y: 5, w: 5, h: 10, name: <Project /> },
    { i: "education", x: 0, y: 6, w: 5, h: 10, name: <Education /> },
  ]);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  return (
    <div className="bg-slate-100 h-auto w-[52rem]">
      <div className="flex relative w-full">
        <ResponsiveReactGridLayout
          className={"layout "}
          style={{ width: "50rem", marginLeft: "1rem" }}
          rowHeight={15}
          cols={{ lg: 6, md: 10, sm: 6, xs: 4, xxs: 2 }}
          layout={layout}
          autoSize={true}
          // breakpoints={{ lg: 100 }}
          compactType={"vertical"}
          isDroppable={true}
          isResizable={false}
          isBounded={true}
          droppingItem={{ i: "xx", h: 50, w: 250 }}
        >
          {layout.map((itm, i) => (
            <div
              key={i}
              data-grid={itm}
              className="absolute bg-slate-500 w-full cursor-grab"
            >
              {itm.name}
            </div>
          ))}
        </ResponsiveReactGridLayout>
      </div>
    </div>
  );
}
