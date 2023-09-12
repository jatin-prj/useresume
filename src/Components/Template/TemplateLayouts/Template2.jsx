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

export default function Template2() {
  const [mounted, setMounted] = useState(false);
  const [isDraggable, setIsDraggable] = useState();

  const [layout, setLayout] = useState([
    {
      i: "header",
      x: 0,
      y: 0,
      w: 6,
      h: 5,
      name: <Header />,
      static: true,
    },
    {
      i: "about-me",
      x: 0,
      y: 1,
      w: 4,
      h: 8,

      name: <AboutMe />,
    },
    { i: "contact", x: 4, y: 1, w: 2, h: 8, name: <Contact /> },
    { i: "experience", x: 1, y: 2, w: 5, h: 20, name: <Experience /> },
    { i: "skills", x: 0, y: 2, w: 1, h: 20, name: <Skills /> },
    { i: "project", x: 0, y: 3, w: 6, h: 9, name: <Project /> },
    { i: "education", x: 0, y: 4, w: 6, h: 20, name: <Education /> },
  ]);

  useEffect(() => {
    setMounted(true);
    console.log(">>>>>>>>>>>..");
  }, []);
  return (
    <div className="bg-slate-100 h-auto w-[52rem]">
      <div className="flex relative w-full">
        <ResponsiveReactGridLayout
          className={"layout "}
          style={{ width: "50rem", marginLeft: "1rem" }}
          rowHeight={20}
          cols={{ lg: 10, md: 10, sm: 6, xs: 4, xxs: 2 }}
          layout={layout}
          compactType={"vertical"}
          isDroppable={true}
          isResizable={false}
          // isDraggable={false}
        >
          {layout.map((section, i) => (
            <div
              key={section.i}
              data-grid={section}
              className="bg-slate-500 cursor-grab"
            >
              {section.name}
            </div>
          ))}
        </ResponsiveReactGridLayout>
      </div>
    </div>
  );
}
