import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AboutDetails } from "../../Redux/Action/About";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  formButtonCss,
  formHeadingCss,
  inputCss,
  labelCss,
} from "../TailwindCss/tailwindCss";

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
          <h3 className={`${formHeadingCss}`}>Summary</h3>
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
              <button
                className={`bg-cyan-500 ${formButtonCss.split("form-button")}`}
              >
                <FaArrowLeft className="text-white" />
              </button>
            </Link>
            <div>
              <Link to={`/templates/educationform`}>
                <button
                  className={`bg-cyan-500 px-5 pt-2 pb-1.5 ${formButtonCss
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
        </form>
      </div>
    </>
  );
}
