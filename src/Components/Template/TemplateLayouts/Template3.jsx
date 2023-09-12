/* eslint-disable no-unused-vars */
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

export default function Template3() {
  const [compactType, setcompactType] = useState("vertical");
  const [mounted, setMounted] = useState(false);
  const [isDraggable, setIsDraggable] = useState();

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
    { i: "contact", x: 0, y: 1, w: 2, h: 8, name: <Contact /> },
    {
      i: "about-me",
      x: 2,
      y: 1,
      w: 3,
      h: 8,
      name: <AboutMe />,
    },
    { i: "experience", x: 0, y: 2, w: 4, h: 20, name: <Experience /> },
    { i: "skills", x: 4, y: 2, w: 1, h: 20, name: <Skills /> },
    { i: "project", x: 0, y: 3, w: 5, h: 9, name: <Project /> },
    { i: "education", x: 0, y: 4, w: 5, h: 20, name: <Education /> },
  ]);

  useEffect(() => {
    setMounted(true);
  }, []);
  console.log(layout);
  return (
    <div className="bg-slate-100 h-auto w-[52rem]">
      <div className="flex relative w-full">
        <ResponsiveReactGridLayout
          className={"layout "}
          style={{ width: "50rem", marginLeft: "1rem" }}
          rowHeight={15}
          cols={{ lg: 14, md: 10, sm: 6, xs: 4, xxs: 2 }}
          layout={layout}
          compactType={compactType}
          preventCollision={!compactType}
          isDroppable={true}
          isResizable={false}
          // isDraggable={false}
          droppingItem={{ i: "xx", h: 50, w: 250 }}
        >
          {layout.map((itm, i) => (
            <div key={i} data-grid={itm} className="absolute bg-slate-500">
              {itm.name}
            </div>
          ))}
        </ResponsiveReactGridLayout>
      </div>
    </div>
  );
}
