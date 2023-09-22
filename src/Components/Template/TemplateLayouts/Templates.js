import AboutMe from "../TemplateSections/AboutMe";
import Contact from "../TemplateSections/Contact";
import Education from "../TemplateSections/Education";
import Experience from "../TemplateSections/Experience";
import Header from "../TemplateSections/Header";
import Project from "../TemplateSections/Project";
import Skills from "../TemplateSections/Skills";

export const Template1 = [
  {
    i: "personal-details",
    x: 0,
    y: 0,
    w: 6,
    h: 6,
    static: true,
  },
  {
    i: "contact-details",
    x: 0,
    y: 2,
    w: 6,
    h: 7,
  },
  {
    i: "user-short-pitch",
    x: 0,
    y: 1,
    w: 6,
    h: 5,
  },
  {
    i: "experience-details",
    x: 0,
    y: 3,
    w: 6,
    h: 10,
  },
  {
    i: "skills-details",
    x: 0,
    y: 4,
    w: 6,
    h: 7,
  },
  {
    i: "project-details",
    x: 0,
    y: 5,
    w: 6,
    h: 10,
  },
  {
    i: "education-details",
    x: 0,
    y: 6,
    w: 6,
    h: 10,
  },
];
export const Template2 = [
  {
    i: "personal-details",
    x: 0,
    y: 0,
    w: 6,
    h: 6,
    static: true,
  },
  {
    i: "user-short-pitch",
    x: 0,
    y: 1,
    w: 4,
    h: 6,
  },
  {
    i: "contact-details",
    x: 4,
    y: 1,
    w: 2,
    h: 6,
  },
  {
    i: "experience-details",
    x: 0,
    y: 2,
    w: 4,
    h: 18,
  },
  {
    i: "skills-details",
    x: 4,
    y: 2,
    w: 2,
    h: 18,
  },
  {
    i: "project-details",
    x: 4,
    y: 3,
    w: 2,
    h: 18,
  },
  {
    i: "education-details",
    x: 0,
    y: 3,
    w: 4,
    h: 18,
  },
];
export const Template3 = [
  {
    i: "personal-details",
    x: 0,
    y: 0,
    w: 6,
    h: 6,
    static: true,
  },
  {
    i: "user-short-pitch",
    x: 2,
    y: 1,
    w: 4,
    h: 6,
  },
  {
    i: "contact-details",
    x: 0,
    y: 1,
    w: 2,
    h: 6,
  },
  {
    i: "experience-details",
    x: 4,
    y: 2,
    w: 4,
    h: 18,
  },
  {
    i: "skills-details",
    x: 0,
    y: 2,
    w: 2,
    h: 18,
  },
  {
    i: "project-details",
    x: 0,
    y: 3,
    w: 2,
    h: 18,
  },
  {
    i: "education-details",
    x: 4,
    y: 4,
    w: 4,
    h: 18,
  },
];
export const Template4 = [
  {
    i: "personal-details",
    x: 0,
    y: 0,
    w: 6,
    h: 6,
    static: true,
  },
  {
    i: "user-short-pitch",
    x: 3,
    y: 1,
    w: 3,
    h: 8,
  },
  {
    i: "contact-details",
    x: 0,
    y: 1,
    w: 3,
    h: 8,
  },
  {
    i: "experience-details",
    x: 0,
    y: 2,
    w: 3,
    h: 30,
  },
  {
    i: "skills-details",
    x: 3,
    y: 2,
    w: 3,
    h: 10,
  },
  {
    i: "project-details",
    x: 3,
    y: 3,
    w: 3,
    h: 20,
  },
  {
    i: "education-details",
    x: 0,
    y: 4,
    w: 6,
    h: 20,
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
