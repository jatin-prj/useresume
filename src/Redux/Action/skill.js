import { SKILL } from "../Type";

export const SkillDetails = (values) => async (dispatch) => {
  try {
    localStorage.setItem("skills-details", JSON.stringify(values));
    await dispatch({ type: SKILL, payload: values });
    return Promise.resolve(values);
  } catch (error) {
    return Promise.resolve(error);
  }
};
