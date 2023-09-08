import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { ExperienceDetails } from "../../Redux/Action/Experience";
import { TagsInput } from "react-tag-input-component";
import { ProjectDetails } from "../../Redux/Action/Project";

export default function ProjectForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { page } = useParams();
  // const [selected, setSelected] = useState(["papaya"]);
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
    // const rows = [...inputFields];
    // rows.splice(index, 1);
    setInputFields(items);
    // console.log("reow", rows);
  };
  const handleChange = (index, event) => {
    console.log("event", event?.target?.name);
    const list = [...inputFields];
    list[index][event?.target?.name] = event?.target?.value;
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
          navigate(`/templates/${page}/skillform`);
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
          <h3 className="mb-4 text-lg font-medium leading-none text-gray-900">
            Project Details
          </h3>
          {inputFields?.map((data, index) => {
            const { projectName, projectDetail } = data;
            return (
              <>
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="ProjectName"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Project Name
                    </label>
                    <input
                      type="text"
                      name="projectName"
                      id="projectName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                      placeholder="projectName.example"
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
                  <div>
                    <label
                      htmlFor="projectDetail"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      projectDetail
                    </label>
                    <textarea
                      id="projectDetail"
                      name="projectDetail"
                      rows="1"
                      className="bg-gray-50 border resize-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                      placeholder="Your message..."
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
                  <div className="mt-8">
                    {index > 0 ? (
                      <button
                        className=" p-1 text-white  bg-red-400 w-8 h-8 rounded-full text-center"
                        onClick={() => removeInputFields(index)}
                      >
                        x
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </>
            );
          })}

          <div className="">
            <Link to={`/templates/${page}/experienceform`}>
              <button className="bg-blue-700 mr-5 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Back
              </button>
            </Link>
            <button
              type="button"
              className="bg-blue-700 mr-5 hover:text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={() => addInputField()}
            >
              Add New
            </button>
            <button
              type="submit"
              className="bg-blue-700 border hover:text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 "
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
