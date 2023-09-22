import { ABOUTME } from "../Type";

export const AboutDetails = (values) => async (dispatch) => {
  try {
    localStorage.setItem("user-short-pitch", JSON.stringify(values));
    await dispatch({ type: ABOUTME, payload: values });
    return Promise.resolve(values);
  } catch (error) {
    return Promise.resolve(error);
  }
};
