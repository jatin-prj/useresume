import { PROJECT } from "../Type";

export const ProjectDetails = (values) => async (dispatch) => {
  try {
    localStorage.setItem("Project-info", JSON.stringify(values));
    await dispatch({ type: PROJECT, payload: values });
    return Promise.resolve(values);
  } catch (error) {
    return Promise.resolve(error);
  }
};
