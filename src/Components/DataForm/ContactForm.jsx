import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ContactDetails } from "Redux/Action/Contact";
import { countryCode } from "Redux/Action/Data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ContactForm({ setOpen }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const templateId = localStorage.getItem("template-id");
  const local = JSON.parse(localStorage.getItem("contact-details"));
  // IntialValues
  let initial = {
    email: "",
    contact: "",
    countryFlag: "🇮🇳 +91",
    address: "",
  };
  // if edit-section then previous data else initial
  const initialValues =
    location.pathname.includes("/edit-section") &&
    localStorage.getItem("contact-details")
      ? local
      : initial;
  // validation schema
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
        if (location.pathname.includes("/edit-section")) {
          navigate(`/templates/preview/template-${templateId}`);
          setOpen(false);
        } else {
          navigate(`/templates/aboutform`);
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
          <h3 className={`heading formHeading`}>Contact Detail</h3>
          <Form>
            <FieldArray name="info">
              <div className="flex w-full  flex-wrap gap-4 mb-2">
                {/* Email  */}
                <div className=" w-full md:w-2/5 relative z-0">
                  <div className="flex flex-col">
                    <Field
                      name="email"
                      type="email"
                      placeholder=" "
                      className={`input peer`}
                      autoComplete="off"
                    />
                    <ErrorMessage
                      component="span"
                      className="text-red-400"
                      name={`email`}
                    />

                    <label htmlFor="email" className={`label`}>
                      Email
                    </label>
                  </div>
                </div>

                <div className=" w-full md:w-2/5 relative z-0  ">
                  <div className=" flex  ">
                    {/* datalist input for country flag and code */}
                    <div
                      className={`w-36 text-sm text-gray-900   border-none rounded-l-md`}
                    >
                      <div className={`flex flex-col `}>
                        <Field
                          name="countryFlag"
                          type="text"
                          list="CountryFlag"
                          placeholder=" "
                          className={`input peer`}
                        />
                        <ErrorMessage
                          component="span"
                          className="text-red-400"
                          name={`countryFlag`}
                        />

                        <datalist id="CountryFlag">
                          {countryCode.map((country, index) => (
                            <option
                              key={index}
                              value={country?.emoji + " " + country.dial_code}
                            />
                          ))}
                        </datalist>
                      </div>
                    </div>
                    {/* number input for contact  */}
                    <div className="flex w-full flex-col">
                      <Field
                        type="number"
                        name="contact"
                        placeholder=" "
                        className={` [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none input peer`}
                        autoComplete="off"
                      />
                      <ErrorMessage
                        component="span"
                        className="text-red-400"
                        name={`contact`}
                      />

                      <label
                        htmlFor="contact"
                        className={`label label-contact `}
                      >
                        Enter Contact Number
                      </label>
                    </div>
                  </div>
                </div>
                {/* Textarea  */}
                <div className="w-full md:w-2/5  relative z-0">
                  <div className="flex flex-col">
                    <Field
                      component="textarea"
                      name="address"
                      rows="2"
                      className={`resize-none input peer`}
                      placeholder=" "
                    />

                    <ErrorMessage
                      component="span"
                      className="text-red-400"
                      name={`address`}
                    />
                    <label htmlFor="address" className={`label`}>
                      Enter Address
                    </label>
                  </div>
                </div>
              </div>
            </FieldArray>
            {/* button group */}
            <div className="flex justify-between">
              <Link to={`/templates/info`}>
                <button className=" btn btn-back">
                  <FaArrowLeft />
                </button>
              </Link>
              <button type="submit" className={`btn btn-next`}>
                <FaArrowRight />
              </button>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
}
