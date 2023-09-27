import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ContactDetails } from "../../Redux/Action/Contact";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { countryCode } from "../../Redux/Action/Data";
import {
  formButtonCss,
  formHeadingCss,
  inputCss,
  labelCss,
} from "../TailwindCss/tailwindCss";

export default function ContactForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    contact: "",
    countryFlag: "🇮🇳 +91",
    address: "",
  };

  const handleValidation = Yup.object().shape({
    email: Yup.string().required("*  Enter Your Email"),
    contact: Yup.string().required("*  Enter Contact Number").min(10).max(10),
    address: Yup.string().required("*  Enter Your Address"),
    countryFlag: Yup.string().required("* Select Country Code"),
  });

  // onSubmit function
  const handleSubmit = (values, { resetForm }) => {
    // dispatch for contact detail
    dispatch(ContactDetails(values)).then((res) => {
      if (res) {
        navigate(`/templates/aboutform`);
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
          <h3 className={` ${formHeadingCss}`}>Contact Detail</h3>

          <Form>
            <FieldArray name="info">
              <div className="flex w-full  flex-wrap gap-4 mb-2">
                <div className=" w-full md:w-2/5 relative">
                  <div className="flex flex-col">
                    <Field
                      name="email"
                      type="email"
                      placeholder=" "
                      className={`${inputCss}`}
                      autoComplete="off"
                    />
                    <ErrorMessage
                      component="span"
                      style={{ color: "red" }}
                      name={`email`}
                    />

                    <label htmlFor="email" className={`${labelCss}`}>
                      Email
                    </label>
                  </div>
                </div>

                <div className=" w-full md:w-2/5 relative mt-1 ">
                  <div className=" flex w-full ">
                    {/* datalist input for country flag and code */}
                    <div className="w-36 inline-flex items-center  text-sm text-gray-900   border-none rounded-l-md">
                      <div className="flex flex-col">
                        <Field
                          name="countryFlag"
                          type="text"
                          list="CountryFlag"
                          placeholder=" "
                          className={`${inputCss}`}
                        />
                        <ErrorMessage
                          component="span"
                          style={{ color: "red" }}
                          name={`countryFlag`}
                        />

                        <datalist id="CountryFlag">
                          {countryCode.map((country, index) => (
                            <option
                              key={index}
                              value={country?.emoji + " " + country.dial_code}
                              className=""
                            />
                          ))}
                        </datalist>
                      </div>
                    </div>
                    {/* number input for contact  */}
                    <div>
                      <div className="flex flex-col">
                        <Field
                          type="number"
                          name="contact"
                          placeholder=" "
                          className={`pl-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${inputCss}`}
                          autoComplete="off"
                        />
                        <ErrorMessage
                          component="span"
                          style={{ color: "red" }}
                          name={`contact`}
                        />

                        <label
                          htmlFor="contact"
                          className={` ${labelCss}   peer-focus:left-36 left-36 `}
                        >
                          Enter Contact Number
                        </label>
                        <datalist id="CountryFlag">
                          {countryCode.map((country, index) => (
                            <option
                              key={index}
                              value={country?.emoji + " " + country.dial_code}
                              className=""
                            />
                          ))}
                        </datalist>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-2/5  relative z-99">
                  <div className="flex flex-col">
                    <Field
                      component="textarea"
                      name="address"
                      rows="2"
                      className={`resize-none ${inputCss}`}
                      placeholder=" "
                    />

                    <ErrorMessage
                      component="span"
                      style={{ color: "red" }}
                      name={`address`}
                    />
                    <label htmlFor="address" className={`${labelCss}`}>
                      Enter Address
                    </label>
                  </div>
                </div>
              </div>
            </FieldArray>
            {/* button group */}
            <div className="flex justify-between">
              <Link to={`/templates/info`}>
                <button
                  className={`bg-cyan-500 ${formButtonCss.split(
                    "form-button"
                  )}`}
                >
                  <FaArrowLeft className="text-white" />
                </button>
              </Link>
              <button type="submit" className={`${formButtonCss}`}>
                <FaArrowRight className="text-white" />
              </button>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
}
