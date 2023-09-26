import AboutMe from "../TemplateSections/AboutMe";
import Contact from "../TemplateSections/Contact";
import Education from "../TemplateSections/Education";
import Experience from "../TemplateSections/Experience";
import Header from "../TemplateSections/Header";
import Project from "../TemplateSections/Project";
import Skills from "../TemplateSections/Skills";

export const Template1 = [
  {
    i: "",
    id: "personal-details",
    x: 0,
    y: 0,
    w: 10,
    h: 4 ,
    static: true,
  },
  {
    i: "",
    id: "contact-details",
    x: 0,
    y: 1,
    w: 5,
    h: 5,
  },
  {
    i: "",
    id: "user-short-pitch",
    x: 5,
    y: 2,
    w: 5,
    h: 5,
  },
  {
    i: "",
    id: "experience-details",
    x: 0,
    y: 3,
    w: 5,
    h: 13,
  },
  {
    i: "",
    id: "skills-details",
    x: 5,
    y: 4,
    w: 5,
    h: 10,
  },
  {
    i: "",
    id: "education-details",
    x: 0,
    y: 6,
    w: 5,
    h: 12,
  },
  {
    i: "",
    id: "project-details",
    x: 5,
    y: 5,
    w: 5,
    h: 15,
  },
];
export const Template2 = [
  {
    i: "",
    id: "personal-details",
    x: 0,
    y: 0,
    w: 10,
    h:  4,
    static: true,
  },
  {
    i: "",
    id: "user-short-pitch",
    x: 0,
    y: 1,
    w: 7,
    h: 6,
  },
  {
    i: "",
    id: "contact-details",
    x: 7,
    y: 1,
    w: 3,
    h: 6,
  },
  {
    i: "",
    id: "experience-details",
    x: 0,
    y: 2,
    w: 7,
    h: 18,
  },
  {
    i: "",
    id: "skills-details",
    x: 7,
    y: 2,
    w: 3,
    h: 18,
  },
  {
    i: "",
    id: "education-details",
    x: 0,
    y: 3,
    w: 7,
    h: 18,
  },
  {
    i: "",
    id: "project-details",
    x: 7,
    y: 3,
    w: 3,
    h: 18,
  },
];
export const Template3 = [
  {
    i: "",
    id: "personal-details",
    x: 0,
    y: 0,
    w: 10,
    h:  4,
    static: true,
  },
  {
    i: "",
    id: "user-short-pitch",
    x: 4,
    y: 1,
    w: 6,
    h: 5,
  },
  {
    i: "",
    id: "contact-details",
    x: 0,
    y: 1,
    w: 4,
    h: 5,
  },
  {
    i: "",
    id: "experience-details",
    x: 4,
    y: 2,
    w: 6,
    h: 11,
  },
  {
    i: "",
    id: "skills-details",
    x: 0,
    y: 2,
    w: 4,
    h: 11,
  },
  {
    i: "",
    id: "project-details",
    x: 0,
    y: 3,
    w: 4,
    h: 11,
  },
  {
    i: "",
    id: "education-details",
    x: 4,
    y: 4,
    w: 6,
    h: 11,
  },
];

export const Sections = [
  {
    id: "personal-details",
    name: "Header",
    component: <Header />,
  },
  {
    id: "contact-details",
    x: 0,
    y: 1,
    w: 5,
    h: 7,
    name: "Contact",
    component: <Contact />,
  },
  {
    id: "user-short-pitch",
    name: "Short Pitch",
    component: <AboutMe />,
  },
  { id: "experience-details", name: "Experiences", component: <Experience /> },
  { id: "skills-details", name: "Skills", component: <Skills /> },
  { id: "project-details", name: "Projects", component: <Project /> },
  { id: "education-details", name: "Education", component: <Education /> },
];
