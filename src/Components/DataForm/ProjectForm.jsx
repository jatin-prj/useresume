import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { lazy } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ProjectDetails } from "Redux/Action/Project";
import { FaPlus, FaArrowLeft, FaTrash, FaArrowRight } from "react-icons/fa";

const CustomInput = lazy(() => import("Components/DataForm/CustomInput"));
export default function ProjectForm({ setOpen }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const templateId = localStorage.getItem("template-id");
  const local = JSON.parse(localStorage.getItem("project-details"));
  // Initialvalues
  let initial = [
    {
      projectName: "",
      projectDetail: "",
    },
  ];
  // if edit-section then previous data else initial
  const initialValues = {
    info:
      location.pathname.includes("/edit-section") &&
      localStorage.getItem("project-details")
        ? local?.projectData
        : initial,
  };
  // validation schema
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
  // onSubmit function
  const handleSubmit = (values, { resetForm }) => {
    let data = {
      projectData: values?.info,
    };
    // dispatch for education
    dispatch(ProjectDetails(data)).then((res) => {
      if (res) {
        if (location.pathname.includes("/edit-section")) {
          navigate(`/templates/preview/template-${templateId}`);
          setOpen(false);
        } else {
          navigate(`/templates/skillform`);
        }
      }
    });
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
            {/* Add button and heading of form  */}
            <div className="flex justify-between">
              <h3 className={`heading formHeading`}>Other Details</h3>
              <div>
                <button
                  type="button"
                  className={`btn btn-add`}
                  onClick={() => addInputField(values, setValues)}
                >
                  <FaPlus className="" />
                </button>
              </div>
            </div>
            <Form>
              <FieldArray name="info">
                {() =>
                  values.info.map((item, index) => {
                    return (
                      <div key={index}>
                        {/* remove button  */}
                        <div className="flex justify-between mt-5 mb-5">
                          <h3 className={`heading formHeading`}>
                            {index > 0 && "New Details"}
                          </h3>
                          <div className=" flex items-end  ">
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
                          {/* Project Name  */}
                          <div className=" w-full md:w-2/5 relative z-0 mt-5">
                            <CustomInput
                              name={`info.${index}.projectName`}
                              placeholder="Title"
                            />
                          </div>
                          {/* textarea  */}
                          <div className=" w-full md:w-2/5 relative z-0 ">
                            <Field
                              component="textarea"
                              rows="2"
                              placeholder=" "
                              className={`resize-none input peer`}
                              name={`info.${index}.projectDetail`}
                            />
                            <ErrorMessage
                              component="div"
                              name={`info.${index}.projectDetail`}
                              className="text-red-400"
                            />
                            <label
                              htmlFor={`info.${index}.projectDetail`}
                              className={`label`}
                            >
                              Enter Details
                            </label>
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
                  <button className={`btn btn-back`}>
                    <FaArrowLeft className="text-white" />
                  </button>
                </Link>
                <div>
                  {!location.pathname.includes("/edit-section") && (
                    <Link to={`/templates/skillform`}>
                      <button className={`btn btn-skip`}>Skip</button>
                    </Link>
                  )}
                  <button type="submit" className={`btn btn-next`}>
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
