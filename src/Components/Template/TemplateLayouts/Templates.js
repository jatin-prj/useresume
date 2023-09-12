import AboutMe from "../TemplateSections/AboutMe";
import Contact from "../TemplateSections/Contact";
import Education from "../TemplateSections/Education";
import Experience from "../TemplateSections/Experience";
import Header from "../TemplateSections/Header";
import Project from "../TemplateSections/Project";
import Skills from "../TemplateSections/Skills";

export const Template1 = [
  {
    id: "header",
    x: 0,
    y: 0,
    w: 6,
    h: 6,
    static: true,
  },
  {
    id: "contact",
    x: 0,
    y: 1,
    w: 6,
    h: 7,
  },
  {
    id: "about-me",
    x: 0,
    y: 2,
    w: 6,
    h: 6,
  },
  {
    id: "experience",
    x: 0,
    y: 3,
    w: 6,
    h: 10,
  },
  {
    id: "skills",
    x: 0,
    y: 4,
    w: 6,
    h: 6,
  },
  {
    id: "project",
    x: 0,
    y: 6,
    w: 6,
    h: 10,
  },
  {
    id: "education",
    x: 0,
    y: 6,
    w: 6,
    h: 10,
  },
];
export const Template2 = [
  {
    id: "header",
    x: 0,
    y: 0,
    w: 6,
    h: 6,
    static: true,
  },
  {
    id: "about-me",
    x: 0,
    y: 1,
    w: 4,
    h: 8,
  },
  {
    id: "contact",
    x: 4,
    y: 1,
    w: 2,
    h: 8,
  },

  {
    id: "experience",
    x: 1,
    y: 2,
    w: 5,
    h: 20,
  },
  {
    id: "skills",
    x: 0,
    y: 2,
    w: 1,
    h: 20,
  },
  {
    id: "project",
    x: 0,
    y: 3,
    w: 6,
    h: 9,
  },
  {
    id: "education",
    x: 0,
    y: 4,
    w: 6,
    h: 20,
  },
];
export const Template3 = [
  {
    id: "header",
    x: 0,
    y: 0,
    w: 6,
    h: 6,
    static: true,
  },
  {
    id: "about-me",
    x: 2,
    y: 1,
    w: 4,
    h: 8,
  },
  {
    id: "contact",
    x: 0,
    y: 1,
    w: 2,
    h: 8,
  },
  {
    id: "experience",
    x: 0,
    y: 2,
    w: 4,
    h: 20,
  },
  {
    id: "skills",
    x: 4,
    y: 2,
    w: 2,
    h: 20,
  },
  {
    id: "project",
    x: 0,
    y: 3,
    w: 6,
    h: 9,
  },
  {
    id: "education",
    x: 0,
    y: 4,
    w: 6,
    h: 20,
  },
];
export const Template4 = [
  {
    id: "header",
    x: 0,
    y: 0,
    w: 6,
    h: 6,
    static: true,
  },
  {
    id: "about-me",
    x: 3,
    y: 1,
    w: 3,
    h: 8,
  },
  {
    id: "contact",
    x: 0,
    y: 1,
    w: 3,
    h: 8,
  },
  {
    id: "experience",
    x: 0,
    y: 2,
    w: 3,
    h: 30,
  },
  {
    id: "skills",
    x: 3,
    y: 3,
    w: 3,
    h: 10,
  },
  {
    id: "project",
    x: 3,
    y: 2,
    w: 3,
    h: 20,
  },
  {
    id: "education",
    x: 0,
    y: 4,
    w: 6,
    h: 20,
  },
];

export const Sections = [
  {
    id: "header",
    name: <Header />,
  },
  { id: "contact", x: 0, y: 1, w: 5, h: 7, name: <Contact /> },
  {
    id: "about-me",

    name: <AboutMe />,
  },
  { id: "experience", name: <Experience /> },
  { id: "skills", name: <Skills /> },
  { id: "project", name: <Project /> },
  { id: "education", name: <Education /> },
];
