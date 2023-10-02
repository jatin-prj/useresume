import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AboutDetails } from "Redux/Action/About";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  formButtonCss,
  formHeadingCss,
  inputCss,
  labelCss,
} from "Components/TailwindCss/tailwindCss";

export default function AboutMeForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    about: "",
  };
  const handleValidation = Yup.object().shape({
    about: Yup.string().required("* Enter Some word about you").min(50),
  });
  // onSubmit function
  const handleSubmit = (values, { resetForm }) => {
    // call dispatch for about data
    dispatch(AboutDetails(values)).then((res) => {
      if (res) {
        navigate(`/templates/educationform`);
      }
    });
    console.log("values", values);
    resetForm({ values: "" });
  };
  return (
    <Formik
      validationSchema={handleValidation}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ values, setValues }) => (
        <>
          <h3 className={` ${formHeadingCss}`}>Summary</h3>

          <Form>
            <FieldArray name="info">
              <div className="flex w-full  flex-wrap gap-4 mb-2">
                <div className=" w-full md:w-2/5 relative">
                  <div className="flex flex-col">
                    <Field
                      name="about"
                      component="textarea"
                      rows="2"
                      className={`resize-none ${inputCss}`}
                      placeholder=" "
                    />
                    <ErrorMessage
                      component="span"
                      className="text-red-400"
                      name={`about`}
                    />

                    <label htmlFor="about" className={`${labelCss}`}>
                      Enter About You
                    </label>
                  </div>
                </div>
              </div>
            </FieldArray>
            {/* button group */}
            <div className="flex justify-between w-full ">
              <Link to={`/templates/contactform`}>
                <button
                  className={`bg-cyan-500 ${formButtonCss.split(
                    "form-button"
                  )}`}
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
          </Form>
        </>
      )}
    </Formik>
  );
}
