import { EXPERIENCE } from "../Type";

export const EducationDetails = (values) => async (dispatch) => {
  try {
    localStorage.setItem("Education-info", JSON.stringify(values));
    await dispatch({ type: EXPERIENCE, payload: values });
    return Promise.resolve(values);
  } catch (error) {
    return Promise.resolve(error);
  }
};
