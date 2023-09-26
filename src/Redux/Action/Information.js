import { INFOSECTION } from "../Type";

export const PersonalDetails = (values) => async (dispatch) => {
  try {
    localStorage.setItem("personal-details", JSON.stringify(values));
    await dispatch({ type: INFOSECTION, payload: values });
    return Promise.resolve(values);
  } catch (error) {
    return Promise.resolve(error);
  }
};
 