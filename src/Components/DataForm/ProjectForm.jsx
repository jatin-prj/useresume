import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { ProjectDetails } from "../../Redux/Action/Project";
import { FaPlus, FaArrowLeft, FaTrash, FaArrowRight } from "react-icons/fa";
import { inputCss, labelCss } from "../TailwindCss/tailwindCss";

export default function ProjectForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // state for all input field
  const [inputFields, setInputFields] = useState([
    {
      projectName: "",
      projectDetail: "",
    },
  ]);
  // Add field function
  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        projectName: "",
        projectDetail: "",
      },
    ]);
  };
  // remove field function
  const removeInputFields = (index) => {
    let items = inputFields.filter((_, indexOf) => indexOf !== index);

    setInputFields(items);
  };
  // handleChange function used when user change the field data on particular index
  const handleChange = (index, event) => {
    console.log("event", event?.target?.name);
    const list = [...inputFields];
    setInputFields(list);
    return (list[index][event?.target?.name] = event?.target?.value);
  };

  const formik = useFormik({
    initialValues: {
      projectName: "",
      projectDetail: "",
    },
    validationSchema: Yup.object({
      projectName: Yup.string().required("* Enter Title"),
      projectDetail: Yup.string().required("* Enter Some Description"),
    }),
    onSubmit: (values, { resetForm }) => {
      let data = {
        projectData: inputFields,
      };
      dispatch(ProjectDetails(data)).then((res) => {
        if (res) {
          navigate(`/templates/skillform`);
        }
      });
      console.log("values", data);
      resetForm({ values: "" });
    },
  });

  return (
    <>
      <div className="mx-5">
        <form onSubmit={formik.handleSubmit}>
          {/* Add button and heading of form  */}
          <div className="flex justify-between">
            <h3 className="mb-4  text-lg font-medium leading-none text-gray-900">
              Other Details
            </h3>
            <div
              type="button"
              style={{ backgroundColor: "rgb(29 78 216)" }}
              className="transform transition duration-500 hover:scale-110 mr-1 text-white border hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
              onClick={() => addInputField()}
            >
              <FaPlus className="text-white" />
            </div>
          </div>
          {inputFields?.map((data, index) => {
            const { projectName, projectDetail } = data;
            return (
              <div key={index}>
                {/* remove button  */}
                <div className="flex justify-between mt-5 ">
                  <h3 className="mb-4 text-lg  font-medium leading-none text-gray-900">
                    {index > 0 && "New Details"}
                  </h3>
                  <div className=" flex items-end cursor-pointer ">
                    {index > 0 && (
                      <div
                        className={`transform transition duration-500 hover:scale-110 p-1 text-white flex justify-center items-center  bg-red-400 text-center px-5 py-2.5 rounded-lg`}
                        onClick={() => removeInputFields(index)}
                      >
                        <FaTrash className="" />
                      </div>
                    )}
                  </div>
                </div>
                {/* Project Name  */}
                <div className="flex w-full  flex-wrap gap-4 mb-2 ">
                  <div className=" w-full md:w-2/5 relative mt-5 ">
                    <input
                      type="text"
                      name="projectName"
                      id="projectName"
                      className={`${inputCss} `}
                      placeholder=" "
                      onChange={(e) =>
                        formik.setFieldValue(
                          "projectName",
                          handleChange(index, e)
                        )
                      }
                      value={projectName}
                      onBlur={formik.handleBlur}
                    />
                    <label htmlFor="projectName" className={`${labelCss}`}>
                      Title
                    </label>
                    {formik.touched.projectName &&
                      formik.errors.projectName && (
                        <div className="text-red-400">
                          {formik.errors.projectName}
                        </div>
                      )}
                  </div>
                  {/* Project Detail  */}
                  <div className=" w-full md:w-2/5  z-0 relative">
                    <textarea
                      id="projectDetail"
                      name="projectDetail"
                      rows="2"
                      className={`resize-none ${inputCss} `}
                      placeholder=" "
                      onChange={(e) =>
                        formik.setFieldValue(
                          "projectDetail",
                          handleChange(index, e)
                        )
                      }
                      value={projectDetail}
                      onBlur={formik.handleBlur}
                    ></textarea>
                    <label htmlFor="projectDetail" className={`${labelCss}`}>
                      Description
                    </label>

                    {formik.touched.projectDetail &&
                      formik.errors.projectDetail && (
                        <div className="text-red-400">
                          {formik.errors.projectDetail}
                        </div>
                      )}
                  </div>
                </div>
              </div>
            );
          })}
          {/* Button group  */}
          <div className="flex justify-between mt-4">
            <Link to={`/templates/experienceform`}>
              <button className="bg-blue-300 mr-5 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                <FaArrowLeft className="text-white" />
              </button>
            </Link>
            <div>
              <Link to={`/templates/skillform`}>
                <button className=" bg-blue-300 mr-5 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 pt-2 text-center">
                  Skip
                </button>
              </Link>
              <button
                type="submit"
                style={{ backgroundColor: "rgb(29 78 216)" }}
                className="transform transition duration-500 hover:scale-110 border text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 "
              >
                <FaArrowRight className="text-white" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
