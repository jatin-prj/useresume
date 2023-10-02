import { lazy } from "react";

const AboutMeForm = lazy(() => import("Components/DataForm/AboutMeForm"));
const ContactForm = lazy(() => import("Components/DataForm/ContactForm"));
const EducationForm = lazy(() => import("Components/DataForm/EducationForm"));
const ExperienceForm = lazy(() => import("Components/DataForm/ExperienceForm"));
const InfoSection = lazy(() => import("Components/DataForm/InfoSection"));
const ProjectForm = lazy(() => import("Components/DataForm/ProjectForm"));
const SkillsForm = lazy(() => import("Components/DataForm/SkillsForm"));

export const Forms = [
  {
    id: "personal-details",
    name: "Header",
    component: <InfoSection />,
  },
  {
    id: "contact-details",
    x: 0,
    y: 1,
    w: 5,
    h: 7,
    name: "Contact",
    component: <ContactForm />,
  },
  {
    id: "user-short-pitch",
    name: "Short Pitch",
    component: <AboutMeForm />,
  },
  {
    id: "experience-details",
    name: "Experiences",
    component: <ExperienceForm />,
  },
  { id: "skills-details", name: "Skills", component: <SkillsForm /> },
  { id: "project-details", name: "Projects", component: <ProjectForm /> },
  { id: "education-details", name: "Education", component: <EducationForm /> },
];
