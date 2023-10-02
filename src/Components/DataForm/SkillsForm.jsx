import { FieldArray, Form, Formik } from "formik";
import { lazy } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SkillDetails } from "Redux/Action/skill";
import { FaPlus, FaArrowLeft, FaTrash, FaArrowRight } from "react-icons/fa";
import { TagsInput } from "react-tag-input-component";
import "App.css";
import {
  formButtonCss,
  formHeadingCss,
} from "Components/TailwindCss/tailwindCss";
const CustomDropDown = lazy(() => import("Components/DataForm/CustomInput"));

export default function SkillsForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const templateId = localStorage.getItem("template-id");
  const expertise = ["Expert", "Intermediate", "Beginner"];

  // state for input fields
  const initialValues = {
    info: [
      {
        skill: [],
        rating: "Expert",
      },
    ],
  };

  // Add field function

  const addInputField = (values, setValues) => {
    // Add dynamic form
    const data = {
      skill: [],
      rating: "Expert",
    };
    setValues({ ...values, info: [...values?.info, data] });
  };
  // remove field function
  const removeInputFields = (i, values, setValues) => {
    const infoFilter = values?.info?.filter((item, index) => i !== index);
    setValues({ ...values, info: infoFilter });
  };

  // handleChange funtion is used when user change on Tagsinput
  const handleChange = (index, event, value, setValues) => {
    console.log("event", event);
    let list = [...value?.info];
    list[index]["skill"] = event;
    setValues({ ...value, info: list });
  };

  const handleSubmit = (values, { resetForm }) => {
    let data = {
      skillData: values?.info,
    };
    // dispatch for education
    dispatch(SkillDetails(data)).then((res) => {
      if (res) {
        navigate(`/templates/preview/template-${templateId}`);
      }
    });
    console.log("data", data);
    resetForm({ values: "" });
  };

  return (
    <>
      <div className="mx-5 p-5">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values, setValues }) => (
            <>
              {/* Add button and heading of form  */}
              <div className=" flex justify-between">
                <h3 className={` ${formHeadingCss}`}>Skills Details</h3>
                <button
                  type="button"
                  className={`${formButtonCss}`}
                  onClick={() => addInputField(values, setValues)}
                >
                  <FaPlus className="text-white" />
                </button>
              </div>

              <Form>
                <FieldArray name="info">
                  {() =>
                    values?.info?.map((item, index) => {
                      const { skill, rating } = item;

                      return (
                        <div key={index}>
                          {/* remove button  */}
                          <div className="flex justify-between ">
                            <h3 className={`${formHeadingCss}`}>
                              {index > 0 && "More Skills"}
                            </h3>
                            <div className=" flex items-end cursor-pointer ">
                              {index > 0 && (
                                <div
                                  className={`${formButtonCss}`}
                                  onClick={() =>
                                    removeInputFields(index, values, setValues)
                                  }
                                >
                                  <FaTrash className="" />
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex  gap-4 items-end flex-wrap mb-5">
                            <div className="w-full md:w-2/5  relative">
                              <CustomDropDown
                                name={`info.${index}.rating`}
                                placeholder="Select Expertise"
                                expertise={expertise}
                                value={rating}
                              />
                            </div>

                            <div className="w-full md:w-2/5 flex relative ">
                              <TagsInput
                                name={`info.${index}.skill`}
                                value={skill}
                                placeHolder="Enter Skill"
                                onChange={(event) =>
                                  !values?.info?.filter((e) =>
                                    e?.skill?.includes(event[event?.length - 1])
                                  ).length &&
                                  handleChange(index, event, values, setValues)
                                }
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })
                  }
                </FieldArray>
                {/* Button group  */}
                <div className=" flex justify-between mt-2">
                  <Link to={`/templates/projectform`}>
                    <button
                      type="button"
                      className={`Back-button ${formButtonCss.split(
                        "form-button"
                      )}`}
                    >
                      <FaArrowLeft className="text-white" />
                    </button>
                  </Link>
                  <button type="submit" className={`${formButtonCss}`}>
                    <FaArrowRight className="text-white" />
                  </button>
                </div>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </>
  );
}
