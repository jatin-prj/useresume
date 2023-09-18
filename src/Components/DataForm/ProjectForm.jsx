import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { ProjectDetails } from "../../Redux/Action/Project";
import { FaPlus, FaArrowLeft, FaTrash, FaArrowRight } from "react-icons/fa";

export default function ProjectForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputFields, setInputFields] = useState([
    {
      projectName: "",
      projectDetail: "",
    },
  ]);

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        projectName: "",
        projectDetail: "",
      },
    ]);
  };
  const removeInputFields = (index) => {
    let items = inputFields.filter((_, indexOf) => indexOf !== index);

    setInputFields(items);
  };
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
      projectName: Yup.string().required("* Please Enter Company Name"),
      projectDetail: Yup.string().required("* Please Enter WorkYear"),
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
          <div className="flex justify-between">
            <h3 className="mb-4  text-lg font-medium leading-none text-gray-900">
              Other Details
            </h3>
            <div
              type="button"
              style={{ backgroundColor: "rgb(29 78 216)" }}
              className="mr-1 text-white border hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
              onClick={() => addInputField()}
            >
              <FaPlus className="text-white" />
            </div>
          </div>
          {inputFields?.map((data, index) => {
            const { projectName, projectDetail } = data;
            return (
              <>
                <div className="flex justify-between">
                  <h3 className="mb-4 text-lg  font-medium leading-none text-gray-900">
                    {index > 0 && "New Details"}
                  </h3>
                  <div className=" flex items-end cursor-pointer ">
                    {index > 0 && (
                      <div
                        className={`p-1 text-white flex justify-center items-center  bg-red-400 text-center px-5 py-2.5 rounded-lg`}
                        onClick={() => removeInputFields(index)}
                      >
                        <FaTrash className="" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex w-full  flex-wrap gap-4 mb-2 ">
                  <div className="w-2/5">
                    <label
                      htmlFor="ProjectName"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name="projectName"
                      id="projectName"
                      className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                      placeholder="
                      Enter Title"
                      onChange={(e) =>
                        formik.setFieldValue(
                          "projectName",
                          handleChange(index, e)
                        )
                      }
                      value={projectName}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.projectName &&
                      formik.errors.projectName && (
                        <div className="text-red-400">
                          {formik.errors.projectName}
                        </div>
                      )}
                  </div>
                  <div className="w-2/5">
                    <label
                      htmlFor="projectDetail"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Description
                    </label>
                    <textarea
                      id="projectDetail"
                      name="projectDetail"
                      rows="3"
                      className="bg-gray-50 border resize-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                      placeholder="Enter  Description..."
                      onChange={(e) =>
                        formik.setFieldValue(
                          "projectDetail",
                          handleChange(index, e)
                        )
                      }
                      value={projectDetail}
                      onBlur={formik.handleBlur}
                    ></textarea>

                    {formik.touched.projectDetail &&
                      formik.errors.projectDetail && (
                        <div className="text-red-400">
                          {formik.errors.projectDetail}
                        </div>
                      )}
                  </div>
                </div>
              </>
            );
          })}

          <div className="flex justify-between mt-2">
            <Link to={`/templates/experienceform`}>
              <button className="bg-blue-300 mr-5 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                <FaArrowLeft className="text-white" />
              </button>
            </Link>

            <button
              type="submit"
              style={{ backgroundColor: "rgb(29 78 216)" }}
              className=" border text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 "
            >
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
