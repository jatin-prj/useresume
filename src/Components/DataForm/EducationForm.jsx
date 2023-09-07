import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { ExperienceDetails } from "../../Redux/Action/Experience";
import { TagsInput } from "react-tag-input-component";
import { EducationDetails } from "../../Redux/Action/Education";

export default function EducationForm() {
  const { page } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(["papaya"]);

  const formik = useFormik({
    initialValues: {
      passingYear: "",
      cource: "",
      instituteName: "",
      percentage: "",
    },
    validationSchema: Yup.object({
      //   ImgUrl: Yup.string().required("* Please Enter Your ImgUrl"),
      passingYear: Yup.string().required("* Please Enter Company Name"),
      cource: Yup.string().required("* Please Enter WorkYear"),
      instituteName: Yup.string().required(
        "* Please Enter Some details on work"
      ),
      percentage: Yup.string().required("* Please Enter Some details on work"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(EducationDetails(values)).then((res) => {
        if (res) {
          navigate(`/templates/${page}/experienceform`);
        }
      });
      console.log("values", values);

      // resetForm({ values: "" });
    },
  });

  return (
    <>
      <div className="mx-5">
        <form onSubmit={formik.handleSubmit}>
          <h3 className="mb-4 text-lg font-medium leading-none text-gray-900">
            Education Details
          </h3>
          <div className="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="passingYear"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Passing Year date
              </label>
              <input
                accept="image/*"
                type="date"
                name="passingYear"
                id="passingYear"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                placeholder="name@company.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.passingYear && formik.errors.passingYear && (
                <div className="text-red-400">{formik.errors.passingYear}</div>
              )}
            </div>
            <div>
              <label
                htmlFor="cource"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Cource Name
              </label>
              <input
                type="text"
                name="cource"
                id="cource"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                placeholder="cource.example"
                onChange={formik.handleChange}
                value={formik.values.cource}
                onBlur={formik.handleBlur}
              />
              {formik.touched.cource && formik.errors.cource && (
                <div className="text-red-400">{formik.errors.cource}</div>
              )}
            </div>

            <div>
              <label
                htmlFor="instituteName"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                School or College Name
              </label>
              <input
                type="text"
                name="instituteName"
                id="instituteName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                placeholder="instituteName.example"
                onChange={formik.handleChange}
                value={formik.values.instituteName}
                onBlur={formik.handleBlur}
              />
              {formik.touched.instituteName && formik.errors.instituteName && (
                <div className="text-red-400">
                  {formik.errors.instituteName}
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="percentage"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Enter Percentage
              </label>
              <input
                type="text"
                name="percentage"
                id="percentage"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                placeholder="percentage.example"
                onChange={formik.handleChange}
                value={formik.values.percentage}
                onBlur={formik.handleBlur}
              />

              {formik.touched.percentage && formik.errors.percentage && (
                <div className="text-red-400">{formik.errors.percentage}</div>
              )}
            </div>
          </div>
          <div className="">
            <Link to="/info">
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
