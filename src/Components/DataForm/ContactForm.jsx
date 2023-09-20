import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ContactDetails } from "../../Redux/Action/Contact";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { countryCode } from "../../Redux/Action/Data";
import { inputCss, labelCss } from "../TailwindCss/tailwindCss";

export default function ContactForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      contact: "",
      countryFlag: "🇮🇳 +91",
      address: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("*  Enter Your Email"),
      contact: Yup.string().required("*  Enter Contact Number").min(10).max(10),
      address: Yup.string().required("*  Enter Your Address"),
      countryFlag: Yup.string().required("* Select Country Code"),
    }),
    onSubmit: (values, { resetForm }) => {
      // dispatch for contact detail
      dispatch(ContactDetails(values)).then((res) => {
        if (res) {
          navigate(`/templates/aboutform`);
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
            Contact Details
          </h3>
          <div className="grid gap-4 mb-4 sm:grid-cols-2">
            {/* Email input */}
            <div className="relative">
              <input
                type="text"
                name="email"
                id="email"
                className={`${inputCss}`}
                placeholder="  "
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              <label htmlFor="email" className={`${labelCss}`}>
                Email
              </label>
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-400">{formik.errors.email}</div>
              )}
            </div>

            <div className=" relative mt-1 ">
              <div className=" flex w-full   ">
                {/* datalist input for country flag and code */}
                <div className="w-36 inline-flex items-center  text-sm text-gray-900   border-none rounded-l-md">
                  <input
                    type="text"
                    name="countryFlag"
                    id="countryFlag"
                    list="CountryFlag"
                    className={`${inputCss}`}
                    onChange={formik.handleChange}
                    value={formik.values.countryFlag}
                    placeholder="Country code "
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
                  {formik.touched.countryFlag && formik.errors.countryFlag && (
                    <div className="text-red-400 absolute top-10 ">
                      {formik.errors.countryFlag}
                    </div>
                  )}
                </div>
                {/* number input for contact  */}
                <input
                  type="number"
                  name="contact"
                  id="contact"
                  className={`pl-10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${inputCss}`}
                  placeholder=" "
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label
                  htmlFor="contact"
                  className={` ${labelCss}   peer-focus:left-36 left-36 `}
                >
                  Enter Contact Number
                </label>
              </div>
              {formik.touched.contact && formik.errors.contact && (
                <div className="text-red-400 absolute left-36">
                  {formik.errors.contact}
                </div>
              )}
              {formik.touched.countryFlag && formik.errors.countryFlag && (
                <div className="text-red-400">{formik.errors.countryFlag}</div>
              )}
            </div>
            {/* textarea for address  */}
            <div className="relative z-99">
              <textarea
                id="address"
                name="address"
                rows="2"
                className={`resize-none ${inputCss}`}
                placeholder=" "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
              <label htmlFor="address" className={`${labelCss}`}>
                Enter Address
              </label>

              {formik.touched.address && formik.errors.address && (
                <div className="text-red-400">{formik.errors.address}</div>
              )}
            </div>
          </div>
          {/* Button group  */}
          <div className="flex justify-between">
            <Link to={`/templates/info`}>
              <button className="bg-blue-300 mr-5 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                <FaArrowLeft className="text-white" />
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
        </form>
      </div>
    </>
  );
}
