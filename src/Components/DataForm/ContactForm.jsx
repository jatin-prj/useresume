import { useFormik } from "formik";
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
          <h3 className={`${formHeadingCss}`}>Contact Details</h3>
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
                autoComplete="off"
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
              <button
                className={`bg-cyan-500 ${formButtonCss.split("form-button")}`}
              >
                <FaArrowLeft className="text-white" />
              </button>
            </Link>
            <button type="submit" className={`${formButtonCss}`}>
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
