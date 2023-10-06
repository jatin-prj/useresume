import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AboutDetails } from "Redux/Action/About";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function AboutMeForm({ setOpen }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const templateId = localStorage.getItem("template-id");
  const local = JSON.parse(localStorage.getItem("user-short-pitch"));

  // Intialvalues
  const initialValues = {
    about:
      location.pathname.includes("/edit-section") &&
      localStorage.getItem("user-short-pitch")
        ? local?.about
        : "",
  };
  // validation schema
  const handleValidation = Yup.object().shape({
    about: Yup.string().required("* Enter Some word about you").min(50),
  });
  // onSubmit function
  const handleSubmit = (values, { resetForm }) => {
    // call dispatch for about data
    dispatch(AboutDetails(values)).then((res) => {
      if (res) {
        if (location.pathname.includes("/edit-section")) {
          navigate(`/templates/preview/template-${templateId}`);
          setOpen(false);
        } else {
          navigate(`/templates/educationform`);
        }
      }
    });
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
          <h3 className={`heading formHeading`}>Summary</h3>
          <Form>
            <FieldArray name="info">
              <div className="flex w-full  flex-wrap gap-4 mb-2">
                {/* About field  */}
                <div className=" w-full md:w-2/5 relative z-0">
                  <div className="flex flex-col">
                    <Field
                      name="about"
                      component="textarea"
                      rows="2"
                      className={`resize-none input peer`}
                      placeholder=" "
                    />
                    <ErrorMessage
                      component="span"
                      className="text-red-400"
                      name={`about`}
                    />

                    <label htmlFor="about" className={`label`}>
                      Enter About You
                    </label>
                  </div>
                </div>
              </div>
            </FieldArray>
            {/* button group */}
            <div className="flex justify-between w-full ">
              <Link to={`/templates/contactform`}>
                <button className={`btn btn-back`}>
                  <FaArrowLeft />
                </button>
              </Link>
              <div>
                {!location.pathname.includes("/edit-section") && (
                  <Link to={`/templates/educationform`}>
                    <button className={`btn btn-skip`}>Skip</button>
                  </Link>
                )}
                <button type="submit" className={`btn btn-next`}>
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
}
