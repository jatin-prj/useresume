import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AboutDetails } from "../../Redux/Action/About";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { inputCss, labelCss } from "../TailwindCss/tailwindCss";

export default function AboutMeForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      about: "",
    },
    validationSchema: Yup.object({
      about: Yup.string().required("* Enter Some word about you").min(50),
    }),
    onSubmit: (values, { resetForm }) => {
      // call dispatch for about data
      dispatch(AboutDetails(values)).then((res) => {
        if (res) {
          navigate(`/templates/educationform`);
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
            Summary
          </h3>
          <div className="grid gap-4 mb-4 sm:grid-cols-2">
            {/* Textarea  */}
            <div className="relative">
              <textarea
                id="about"
                name="about"
                rows="2"
                className={`resize-none ${inputCss}`}
                placeholder=" "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
              <label htmlFor="about" className={`${labelCss}`}>
                Enter About You
              </label>

              {formik.touched.about && formik.errors.about && (
                <div className="text-red-400">{formik.errors.about}</div>
              )}
            </div>
          </div>
          {/* Button group  */}
          <div className="flex justify-between w-full ">
            <Link to={`/templates/contactform`}>
              <button className=" bg-blue-300 mr-5 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                <FaArrowLeft className="text-white" />
              </button>
            </Link>
            <div>
              <Link to={`/templates/educationform`}>
                <button className=" bg-blue-300 mr-5 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 pt-2 text-center">
                  Skip
                </button>
              </Link>
              <button
                type="submit"
                style={{ backgroundColor: "rgb(29 78 216)" }}
                className=" transform transition duration-500 hover:scale-110 border text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 "
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
