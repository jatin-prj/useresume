import { FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ProjectDetails } from "../../Redux/Action/Project";
import { FaPlus, FaArrowLeft, FaTrash, FaArrowRight } from "react-icons/fa";
import {
  formButtonCss,
  formHeadingCss,
} from "../TailwindCss/tailwindCss";
import CustomInput from "./CustomInput";

export default function ProjectForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // state for all input field
  const initialValues = {
    info: [
      {
        projectName: "",
        projectDetail: "",
      },
    ],
  };
  const handleValidation = Yup.object().shape({
    info: Yup.array().of(
      Yup.object().shape({
        projectName: Yup.string().required("* Enter Title"),
        projectDetail: Yup.string().required("* Enter Some Description"),
      })
    ),
  });
  // Add field function
  const addInputField = (values, setValues) => {
    // Add dynamic form
    const data = {
      projectName: "",
      projectDetail: "",
    };
    setValues({ ...values, info: [...values?.info, data] });
  };

  // remove field function
  const removeInputFields = (i, values, setValues) => {
    const infoFilter = values?.info?.filter((item, index) => i !== index);
    setValues({ ...values, info: infoFilter });
  };
  const handleSubmit = (values, { resetForm }) => {
    let data = {
      projectData: values?.info,
    };
    // dispatch for education
    dispatch(ProjectDetails(data)).then((res) => {
      if (res) {
        navigate(`/templates/skillform`);
      }
    });
    console.log("data", data);
    resetForm({ values: "" });
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
              <h3 className={` ${formHeadingCss}`}>Other Details</h3>
              <div
                type="button"
                className={`${formButtonCss}`}
                onClick={() => addInputField(values, setValues)}
              >
                <FaPlus className="text-white" />
              </div>
            </div>
            <Form>
              <FieldArray name="info">
                {() =>
                  values.info.map((item, index) => {
                    return (
                      <div key={index}>
                        {console.log("val", values)}
                        <div className="flex justify-between mt-5 mb-5">
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
                          <div className=" w-full md:w-2/5 relative mt-5">
                            <CustomInput
                              name={`info.${index}.projectName`}
                              placeholder="Title"
                            />
                          </div>

                          <div className=" w-full md:w-2/5 relative">
                            <CustomInput
                              name={`info.${index}.projectDetail`}
                              placeholder="Enter Details"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })
                }
              </FieldArray>

              {/* Button group  */}
              <div className="flex justify-between mt-4">
                <Link to={`/templates/experienceform`}>
                  <button
                    className={`bg-[#309ba0] ${formButtonCss.split(
                      "form-button"
                    )}`}
                  >
                    <FaArrowLeft className="text-white" />
                  </button>
                </Link>
                <div>
                  <Link to={`/templates/skillform`}>
                    <button
                      className={`bg-[#309ba0] px-5 pt-2 pb-1.5 ${formButtonCss
                        .split("px-5 py-2.5")
                        .reverse()}`}
                    >
                      Skip
                    </button>
                  </Link>
                  <button type="submit" className={`${formButtonCss}`}>
                    <FaArrowRight className="text-white" />
                  </button>
                </div>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
}
