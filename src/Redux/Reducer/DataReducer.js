import {
  ABOUTME,
  CONTACT,
  EDUCATION,
  EXPERIENCE,
  INFOSECTION,
  PROJECT,
  SKILL,
} from "../Type";

const initialState = {
  infoSection:
    localStorage.getItem("Personal-info") &&
    JSON.parse(localStorage.getItem("Personal-info")),
  experience:
    localStorage.getItem("Experience-info") &&
    JSON.parse(localStorage.getItem("Experience-info")),
  education:
    localStorage.getItem("Education-info") &&
    JSON.parse(localStorage.getItem("Education-info")),
  skill:
    localStorage.getItem("Skill-info") &&
    JSON.parse(localStorage.getItem("Skill-info")),
  project:
    localStorage.getItem("Project-info") &&
    JSON.parse(localStorage.getItem("Project-info")),
  about:
    localStorage.getItem("About-info") &&
    JSON.parse(localStorage.getItem("About-info")),
  contact:
    localStorage.getItem("Contact-info") &&
    JSON.parse(localStorage.getItem("Contact-info")),
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
