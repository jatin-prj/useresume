import {
  ABOUTME,
  CONTACT,
  EDUCATION,
  EXPERIENCE,
  INFOSECTION,
  PROJECT,
  SKILL,
} from "Redux/Type";

const initialState = {
  infoSection:
    localStorage.getItem("personal-details") &&
    JSON.parse(localStorage.getItem("personal-details")),
  experience:
    localStorage.getItem("experience-details") &&
    JSON.parse(localStorage.getItem("experience-details")),
  education:
    localStorage.getItem("education-details") &&
    JSON.parse(localStorage.getItem("education-details")),
  skill:
    localStorage.getItem("skills-details") &&
    JSON.parse(localStorage.getItem("skills-details")),
  project:
    localStorage.getItem("project-details") &&
    JSON.parse(localStorage.getItem("project-details")),
  about:
    localStorage.getItem("user-short-pitch") &&
    JSON.parse(localStorage.getItem("user-short-pitch")),
  contact:
    localStorage.getItem("contact-details") &&
    JSON.parse(localStorage.getItem("contact-details")),
};
export default function ResumeDetails(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case INFOSECTION:
      return {
        ...state,
        infoSection: payload,
      };
    case EXPERIENCE:
      return {
        ...state,
        experience: payload,
      };
    case EDUCATION:
      return {
        ...state,
        education: payload,
      };
    case SKILL:
      return {
        ...state,
        skill: payload,
      };
    case PROJECT:
      return {
        ...state,
        project: payload,
      };
    case ABOUTME:
      return {
        ...state,
        about: payload,
      };
    case CONTACT:
      return {
        ...state,
        contact: payload,
      };
    default:
      return state;
  }
}
