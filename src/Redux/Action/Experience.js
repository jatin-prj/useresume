import { EXPERIENCE } from "../Type";

export const ExperienceDetails = (values) => async (dispatch) => {
  try {
    console.log(values ,"valuesvaluesvaluesvaluesvaluesvaluesvaluesvaluesvaluesvalues");
    localStorage.setItem("Experience-info", JSON.stringify(values));
    await dispatch({ type: EXPERIENCE, payload: values });
    return Promise.resolve(values);
  } catch (error) {
    return Promise.resolve(error);
  }
};
