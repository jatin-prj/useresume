import { lazy } from "react";

const AboutMe = lazy(() =>
  import("Components/Template/TemplateSections/AboutMe")
);
const Contact = lazy(() =>
  import("Components/Template/TemplateSections/Contact")
);
const Education = lazy(() =>
  import("Components/Template/TemplateSections/Education")
);
const Experience = lazy(() =>
  import("Components/Template/TemplateSections/Experience")
);
const Header = lazy(() =>
  import("Components/Template/TemplateSections/Header")
);
const Project = lazy(() =>
  import("Components/Template/TemplateSections/Project")
);
const Skills = lazy(() =>
  import("Components/Template/TemplateSections/Skills")
);

export const Template1 = [
  {
    i: "",
    id: "personal-details",
    x: 0,
    y: 0,
    w: 10,
    h: 3.5,
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
    h: 15,
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
    x: 5,
    y: 6,
    w: 5,
    h: 15,
  },
  {
    i: "",
    id: "project-details",
    x: 0,
    y: 5,
    w: 5,
    h: 12,
  },
];
export const Template2 = [
  {
    i: "",
    id: "personal-details",
    x: 0,
    y: 0,
    w: 10,
    h: 3.5,
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
    h: 15,
  },
  {
    i: "",
    id: "skills-details",
    x: 7,
    y: 2,
    w: 3,
    h: 15,
  },
  {
    i: "",
    id: "education-details",
    x: 0,
    y: 3,
    w: 7,
    h: 15,
  },
  {
    i: "",
    id: "project-details",
    x: 7,
    y: 3,
    w: 3,
    h: 15,
  },
];
export const Template3 = [
  {
    i: "",
    id: "personal-details",
    x: 0,
    y: 0,
    w: 10,
    h: 3.5,
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
    h: 15,
  },
  {
    i: "",
    id: "skills-details",
    x: 0,
    y: 2,
    w: 4,
    h: 15,
  },
  {
    i: "",
    id: "project-details",
    x: 0,
    y: 3,
    w: 4,
    h: 15,
  },
  {
    i: "",
    id: "education-details",
    x: 4,
    y: 4,
    w: 6,
    h: 15,
  },
];

export const Sections = [
  {
    id: "personal-details",
    name: "Info",
    component: <Header />,
  },
  {
    id: "user-short-pitch",
    name: "About Me",
    component: <AboutMe />,
  },
  {
    id: "contact-details",
    x: 0,
    y: 1,
    w: 5,
    h: 7,
    name: "Contact Details",
    component: <Contact />,
  },
  { id: "experience-details", name: "Experiences ", component: <Experience /> },
  { id: "skills-details", name: "Skills", component: <Skills /> },
  { id: "project-details", name: "Projects", component: <Project /> },
  { id: "education-details", name: "Education", component: <Education /> },
];
