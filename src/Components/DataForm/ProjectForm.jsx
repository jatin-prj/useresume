import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { ProjectDetails } from "../../Redux/Action/Project";

export default function ProjectForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { page } = useParams();
  const [selected, setSelected] = useState(["papaya"]);

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
      dispatch(ProjectDetails(values)).then((res) => {
        if (res) {
          navigate(`/templates/${page}/skillform`);
        }
      });
      console.log("values", values);

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
                onChange={formik.handleChange}
                value={formik.values.projectName}
                onBlur={formik.handleBlur}
              />
              {formik.touched.projectName && formik.errors.projectName && (
                <div className="text-red-400">{formik.errors.projectName}</div>
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>

              {formik.touched.projectDetail && formik.errors.projectDetail && (
                <div className="text-red-400">
                  {formik.errors.projectDetail}
                </div>
              )}
            </div>
          </div>
          <div className="">
            <Link to="/skillform">
              <button className="bg-blue-700 mr-5 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Back
              </button>
            </Link>
            <button
              type="submit"
              className="bg-blue-700 border  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 "
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
