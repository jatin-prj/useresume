import AboutMeForm from "../AboutMeForm";
import ContactForm from "../ContactForm";
import EducationForm from "../EducationForm";
import ExperienceForm from "../ExperienceForm";
import InfoSection from "../InfoSection";
import ProjectForm from "../ProjectForm";
import SkillsForm from "../SkillsForm";

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
