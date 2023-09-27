import { FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { EducationDetails } from "../../Redux/Action/Education";
import { FaPlus, FaArrowLeft, FaTrash, FaArrowRight } from "react-icons/fa";
import { formButtonCss, formHeadingCss } from "../TailwindCss/tailwindCss";
import CustomInput from "./CustomInput";

export default function EducationForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // intialvalues
  const initialValues = {
    info: [
      {
        startYear: "",
        presentcheck: false,
        endYear: "",
        course: "",
        instituteName: "",
        percentage: "",
      },
    ],
  };
  // create yup validation
  const handleValidation = Yup.object().shape({
    info: Yup.array().of(
      Yup.object().shape({
        startYear: Yup.string().required("* Enter Start Date"),
        presentcheck: Yup.boolean(),
        endYear: Yup.string().when(`presentcheck`, {
          is: false,
          then: () => Yup.string().required("* Enter End Date"),
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
        localStorage?.removeItem("checked");
        navigate(`/templates/experienceform`);
      }
    });
    resetForm({ values: "" });
  };
  // handle check function for check uncheck checkbox
  const handleCheck = (i, values, setValues) => {
    console.log("");
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
    <div className="App">
      <Formik
        validationSchema={handleValidation}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ values, setValues }) => (
          <>
            <div className="flex justify-between">
              <h3 className={`${formHeadingCss}`}>Education Details</h3>
              <button
                type="button"
                className={`${formButtonCss}`}
                onClick={(e) => addInputField(values, setValues)}
              >
                <FaPlus className="text-white " />
              </button>
            </div>
            <Form>
              <FieldArray name="info">
                {() =>
                  values?.info?.map((item, index) => {
                    const {
                      presentcheck,
                      startYear,
                    } = item;
                    return (
                      <div key={index}>
                        {console.log("val", values)}
                        <div className="flex justify-between mt-5">
                          <h3 className={`${formHeadingCss}`}>
                            {index > 0 && "New Details"}
                          </h3>
                          <div className=" flex items-end cursor-pointer ">
                            {index > 0 && (
                              <button
                                className={`${formButtonCss}`}
                                onClick={() =>
                                  removeInputFields(index, values, setValues)
                                }
                              >
                                <FaTrash className="" />
                              </button>
                            )}
                          </div>
                        </div>
                        <div className="flex w-full  flex-wrap gap-4 mb-2">
                          <div className=" w-full md:w-2/5 relative">
                            <CustomInput
                              name={`info.${index}.instituteName`}
                              placeholder="Enter School or College Name"
                            />
                          </div>

                          <div className=" w-full md:w-2/5 relative">
                            <CustomInput
                              name={`info.${index}.course`}
                              placeholder="Enter course"
                            />
                          </div>

                          <div className=" w-full md:w-2/5 relative">
                            <CustomInput
                              name={`info.${index}.startYear`}
                              placeholder=" Enter startYear"
                              type="date"
                              min="1947-01-01"
                              max={new Date().toISOString().split("T")[0]}
                            />
                          </div>
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
                          {presentcheck !== true && (
                            <>
                              <div className="  w-full md:w-2/5 relative">
                                <CustomInput
                                  name={`info.${index}.endYear`}
                                  placeholder=" Enter EndYear"
                                  type="date"
                                  min={startYear}
                                  max={new Date().toISOString().split("T")[0]}
                                />
                              </div>
                              <div className=" w-full md:w-2/5 relative">
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
                  <button
                    type="button "
                    className={`bg-[#309ba0] ${formButtonCss.split(
                      "form-button"
                    )}`}
                  >
                    <FaArrowLeft className="text-white " />
                  </button>
                </Link>

                <button type="submit" className={`${formButtonCss}`}>
                  <FaArrowRight className="text-white " />
                </button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
}
