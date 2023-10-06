import { FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { lazy } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { EducationDetails } from "Redux/Action/Education";
import { FaPlus, FaArrowLeft, FaTrash, FaArrowRight } from "react-icons/fa";

const CustomInput = lazy(() => import("Components/DataForm/CustomInput"));
export default function EducationForm({ setOpen }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const templateId = localStorage.getItem("template-id");
  const local = JSON.parse(localStorage.getItem("education-details"));
  // intialvalues
  let initial = [
    {
      startYear: "",
      presentcheck: false,
      endYear: "",
      course: "",
      instituteName: "",
      percentage: "",
    },
  ];
  // if edit-section then previous data else initial
  const initialValues = {
    info:
      location.pathname.includes("/edit-section") &&
      localStorage.getItem("education-details")
        ? local?.educationData
        : initial,
  };
  // create yup validation
  const handleValidation = Yup.object().shape({
    info: Yup.array().of(
      Yup.object().shape({
        startYear: Yup.string().required("* Select Start Date"),
        presentcheck: Yup.boolean(),
        endYear: Yup.string().when(`presentcheck`, {
          is: false,
          then: () => Yup.string().required("* Select End Date"),
        }),
        course: Yup.string().required("*  Enter Cource"),
        instituteName: Yup.string().required("* Enter School or College Name"),
        percentage: Yup.string().when("presentcheck", {
          is: false,
          then: () => Yup.string().required("* Enter percentage"),
        }),
      })
    ),
  });
  //remove input fields
  const removeInputFields = (i, values, setValues) => {
    const infoFilter = values?.info?.filter((item, index) => i !== index);
    setValues({ ...values, info: infoFilter });
  };
  // Add input fields
  const addInputField = (values, setValues) => {
    const data = {
      startYear: "",
      presentcheck: false,
      endYear: "",
      course: "",
      instituteName: "",
      percentage: "",
    };
    setValues({ ...values, info: [...values?.info, data] });
  };
  // onSubmit function
  const handleSubmit = (values, { resetForm }) => {
    let data = {
      educationData: values?.info,
    };
    // dispatch for education
    dispatch(EducationDetails(data)).then((res) => {
      if (res) {
        if (location.pathname.includes("/edit-section")) {
          localStorage?.removeItem("checked");
          navigate(`/templates/preview/template-${templateId}`);
          setOpen(false);
        } else {
          localStorage?.removeItem("checked");
          navigate(`/templates/experienceform`);
        }
      }
    });
    resetForm({ values: "" });
  };
  // handle check function for check uncheck checkbox
  const handleCheck = (i, values, setValues) => {
    localStorage?.setItem("checked", i + 1);
    if (localStorage?.getItem("checked")) {
      let currentCheck = Number(localStorage.getItem("checked")) - 1;
      let formData = values?.info?.map((e, ind) => {
        if (ind === currentCheck) {
          return { ...e, presentcheck: e.presentcheck ? false : true };
        } else {
          return { ...e, presentcheck: false };
        }
      });
      setValues({ ...values, info: formData });
    }
  };

  return (
    <div className="App ">
      <Formik
        validationSchema={handleValidation}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ values, setValues }) => (
          <>
            {/* Add button and heading of form  */}
            <div className="flex justify-between">
              <h3 className={`heading formHeading`}>Education Details</h3>
              <div>
                <button
                  type="button"
                  className={`btn btn-add`}
                  onClick={(e) => addInputField(values, setValues)}
                >
                  <FaPlus />
                </button>
              </div>
            </div>
            <Form>
              <FieldArray name="info">
                {() =>
                  values?.info?.map((item, index) => {
                    const { presentcheck, startYear } = item;
                    return (
                      <div key={index}>
                        {/* Remove button  */}
                        <div className="flex justify-between mt-5">
                          <h3 className={`heading formHeading`}>
                            {index > 0 && "New Details"}
                          </h3>
                          <div className=" flex items-end">
                            {index > 0 && (
                              <button
                                className={`btn btn-delete`}
                                onClick={() =>
                                  removeInputFields(index, values, setValues)
                                }
                              >
                                <FaTrash />
                              </button>
                            )}
                          </div>
                        </div>
                        <div className="flex w-full  flex-wrap gap-4 mb-2">
                          {/* InstituteName or collegename  */}
                          <div className=" w-full md:w-2/5 relative z-0">
                            <CustomInput
                              name={`info.${index}.instituteName`}
                              placeholder="Enter School or College Name"
                            />
                          </div>
                          {/* Course  */}
                          <div className=" w-full md:w-2/5 relative z-0 ">
                            <CustomInput
                              name={`info.${index}.course`}
                              placeholder="Enter course"
                            />
                          </div>
                          {/* start Year  */}
                          <div className=" w-full md:w-2/5 relative z-0">
                            <CustomInput
                              name={`info.${index}.startYear`}
                              placeholder=" Select startYear"
                              type="date"
                              min="1947-01-01"
                              max={new Date().toISOString().split("T")[0]}
                            />
                          </div>
                          {/* Present Checkbox */}
                          <div className="flex w-full md:w-2/5 mt-1 mb-4">
                            <CustomInput
                              name={`info.${index}.presentcheck`}
                              placeholder=" Pursuing"
                              type="checkbox"
                              id={`info.${index}.presentcheck`}
                              onChange={(e) =>
                                handleCheck(index, values, setValues)
                              }
                            />
                            <label
                              className="mt-4 ml-2"
                              htmlFor={`info.${index}.presentcheck`}
                            >
                              Pursuing
                            </label>
                          </div>
                          {/* End Year  */}
                          {presentcheck !== true && (
                            <>
                              <div className="  w-full md:w-2/5 relative z-0">
                                <CustomInput
                                  name={`info.${index}.endYear`}
                                  placeholder=" Select EndYear"
                                  type="date"
                                  min={startYear}
                                  max={new Date().toISOString().split("T")[0]}
                                />
                              </div>
                              {/* Percentage  */}
                              <div className=" w-full md:w-2/5 relative z-0">
                                <CustomInput
                                  name={`info.${index}.percentage`}
                                  placeholder=" Enter percentage"
                                />
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    );
                  })
                }
              </FieldArray>
              {/* button group */}
              <div className="flex justify-between mt-2">
                <Link to={`/templates/aboutform`}>
                  <button type="button " className={`btn btn-back`}>
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
  );
}
