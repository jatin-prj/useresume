import AboutMeForm from "../../../DataForm/AboutMeForm";
import ContactForm from "../../../DataForm/ContactForm";
import EducationForm from "../../../DataForm/EducationForm";
import ExperienceForm from "../../../DataForm/ExperienceForm";
import InfoSection from "../../../DataForm/InfoSection";
import ProjectForm from "../../../DataForm/ProjectForm";
import SkillsForm from "../../../DataForm/SkillsForm";

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
