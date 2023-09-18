import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ContactDetails } from "../../Redux/Action/Contact";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { countryCode } from "../../Redux/Action/Data";

export default function ContactForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      contact: "",
      countryFlag: "",
      address: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("* Please Enter Your Email"),
      contact: Yup.string()
        .required("* Please Enter Contact Number")
        .min(10)
        .max(10),
      address: Yup.string().required("* Please Enter Your Address"),
      countryFlag: Yup.string().required("* Select Country Code"),
    }),
    onSubmit: (values, { resetForm }) => {
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
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                placeholder="Enter Email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-400">{formik.errors.email}</div>
              )}
            </div>
            <div>
              <label
                htmlFor="website-admin"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Contact Number
              </label>
              <div className="flex">
                <div className="w-36 inline-flex items-center px-3 text-sm text-gray-900 bg-blue-200 border border-r-0 border-gray-300 rounded-l-md">
                  <select
                    name="countryFlag"
                    id="countryFlag"
                    onChange={formik.handleChange}
                    value={formik.values.countryFlag}
                    className="w-full border-none appearance-none bg-transparent   "
                  >
                    {countryCode?.map((country, index) => (
                      <option
                        key={index}
                        value={country?.emoji + " " + country?.dial_code}
                        className=""
                      >
                        {country?.emoji} &nbsp;
                        {country?.dial_code}&nbsp;
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  type="number"
                  name="contact"
                  id="contact"
                  className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm  rounded-tr-lg rounded-br-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="Enter Contact Number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.contact && formik.errors.contact && (
                <div className="text-red-400">{formik.errors.contact}</div>
              )}
              {formik.touched.countryFlag && formik.errors.countryFlag && (
                <div className="text-red-400">{formik.errors.countryFlag}</div>
              )}
            </div>

            <div>
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                rows="2"
                className="bg-gray-50 border resize-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                placeholder="Enter Address..."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>

              {formik.touched.address && formik.errors.address && (
                <div className="text-red-400">{formik.errors.address}</div>
              )}
            </div>
          </div>
          <div className="flex justify-between">
            <Link to={`/templates/info`}>
              <button className="bg-blue-300 mr-5 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                <FaArrowLeft className="text-white" />
              </button>
            </Link>
            <button
              type="submit"
              style={{ backgroundColor: "rgb(29 78 216)" }}
              className=" border text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 "
            >
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
