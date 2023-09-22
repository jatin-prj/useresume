import { CONTACT } from "../Type";

export const ContactDetails = (values) => async (dispatch) => {
  try {
    localStorage.setItem("contact-details", JSON.stringify(values));
    await dispatch({ type: CONTACT, payload: values });
    return Promise.resolve(values);
  } catch (error) {
    return Promise.resolve(error);
  }
};
