import { PROJECT } from "Redux/Type";

export const ProjectDetails = (values) => async (dispatch) => {
  try {
    localStorage.setItem("project-details", JSON.stringify(values));
    await dispatch({ type: PROJECT, payload: values });
    return Promise.resolve(values);
  } catch (error) {
    return Promise.resolve(error);
  }
};
