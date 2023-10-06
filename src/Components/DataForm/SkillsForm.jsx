import { FieldArray, Form, Formik } from "formik";
import { lazy } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SkillDetails } from "Redux/Action/skill";
import { FaPlus, FaArrowLeft, FaTrash, FaArrowRight } from "react-icons/fa";
import { TagsInput } from "react-tag-input-component";
import "App.css";

const CustomDropDown = lazy(() => import("Components/DataForm/CustomDropDown"));
export default function SkillsForm({ setOpen }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const templateId = localStorage.getItem("template-id");
  const expertise = ["Expert", "Intermediate", "Beginner"];
  const local = JSON.parse(localStorage.getItem("skills-details"));
  // initialvalues
  let initial = [
    {
      skill: [],
      rating: "Expert",
    },
  ];
  // if edit-section then previous data else initial
  const initialValues = {
    info:
      location.pathname.includes("/edit-section") &&
      localStorage.getItem("skills-details")
        ? local?.skillData
        : initial,
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
    let list = [...value?.info];
    list[index]["skill"] = event;
    setValues({ ...value, info: list });
  };
  // onSubmit function
  const handleSubmit = (values, { resetForm }) => {
    let data = {
      skillData: values?.info,
    };
    // dispatch for education
    dispatch(SkillDetails(data)).then((res) => {
      if (res) {
        navigate(`/templates/preview/template-${templateId}`);
        if (location.pathname.includes("/edit-section")) {
          setOpen(false);
        }
      }
    });
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
                <h3 className={`heading formHeading`}>Skills Details</h3>
                <div>
                  <button
                    type="button"
                    className={`btn btn-add`}
                    onClick={() => addInputField(values, setValues)}
                  >
                    <FaPlus />
                  </button>
                </div>
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
                            <h3 className={`heading formHeading`}>
                              {index > 0 && "More Skills"}
                            </h3>
                            <div className=" flex items-end cursor-pointer ">
                              {index > 0 && (
                                <div
                                  className={`btn  btn-delete`}
                                  onClick={() =>
                                    removeInputFields(index, values, setValues)
                                  }
                                >
                                  <FaTrash />
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex  gap-4 items-end flex-wrap mb-5">
                            {/* dropdown for expertise  */}
                            <div className="w-full md:w-2/5  relative z-0">
                              <CustomDropDown
                                name={`info.${index}.rating`}
                                placeholder="Select Expertise"
                                expertise={expertise}
                                value={rating}
                              />
                            </div>
                            {/* react tags-input  */}
                            <div className="w-full md:w-2/5 flex relative z-0 ">
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
                    <button type="button" className={`btn btn-back`}>
                      <FaArrowLeft />
                    </button>
                  </Link>
                  <button type="submit" className={`btn btn-next`}>
                    <FaArrowRight />
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
