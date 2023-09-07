import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { AboutDetails } from "../../Redux/Action/About";

export default function AboutMeForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { page } = useParams();
  const [selected, setSelected] = useState(["papaya"]);

  const formik = useFormik({
    initialValues: {
      about: "",
    },
    validationSchema: Yup.object({
      about: Yup.string().required("* Please Enter Some details on work"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(AboutDetails(values)).then((res) => {
        if (res) {
          navigate(`/templates/educationform`);
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
            Summary
          </h3>
          <div className="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="about"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Type Something About You
              </label>
              <textarea
                id="about"
                name="about"
                rows="1"
                className="bg-gray-50 border resize-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                placeholder="Your message..."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
              {formik.touched.about && formik.errors.about && (
                <div className="text-red-400">{formik.errors.about}</div>
              )}
            </div>
          </div>
          <div className="">
            <Link to="/projectform">
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