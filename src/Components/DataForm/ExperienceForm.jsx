import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { ExperienceDetails } from "../../Redux/Action/Experience";
import { TagsInput } from "react-tag-input-component";

export default function ExperienceForm() {
  const navigate = useNavigate();
  const { page } = useParams();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(["papaya"]);

  const formik = useFormik({
    initialValues: {
      companyName: "",
      workYear: "",
      workOn: [],
    },
    validationSchema: Yup.object({
      //   ImgUrl: Yup.string().required("* Please Enter Your ImgUrl"),
      companyName: Yup.string().required("* Please Enter Company Name"),
      workYear: Yup.string().required("* Please Enter WorkYear"),
      workOn: Yup.array().required("* Please Enter Some details on work"),
    }),
    onSubmit: (values, { resetForm }) => {
      let data = {
        companyName: values.companyName,
        workYear: values.workYear,
        workOn: selected,
      };
      dispatch(ExperienceDetails(data)).then((res) => {
        if (res) {
          navigate(`/templates/${page}/projectform`);
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
            Experience Details
          </h3>
          <div className="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                placeholder="companyName.example"
                onChange={formik.handleChange}
                value={formik.values.companyName}
                onBlur={formik.handleBlur}
              />
              {formik.touched.companyName && formik.errors.companyName && (
                <div className="text-red-400">{formik.errors.companyName}</div>
              )}
            </div>
            <div>
              <label
                htmlFor="workYear"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                workYear
              </label>
              <input
                accept="image/*"
                type="date"
                name="workYear"
                id="workYear"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                placeholder="name@company.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.workYear && formik.errors.workYear && (
                <div className="text-red-400">{formik.errors.workYear}</div>
              )}
            </div>

            <div>
              <label
                htmlFor="workOn"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                workOn
              </label>
              <TagsInput
                value={selected}
                onChange={setSelected}
                name="workOn"
                placeHolder="enter Work details"
              />

              {formik.touched.workOn && formik.errors.workOn && (
                <div className="text-red-400">{formik.errors.workOn}</div>
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
