import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { ContactDetails } from "../../Redux/Action/Contact";

export default function ContactForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { page } = useParams();
  const [selected, setSelected] = useState(["papaya"]);

  const formik = useFormik({
    initialValues: {
      email: "",
      contact: "",
      address: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("* Please Enter Your Email"),
      contact: Yup.string().required("* Please Enter Contact Number"),
      address: Yup.string().required("* Please Enter Your Address"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(ContactDetails(values)).then((res) => {
        if (res) {
          navigate(`/templates/${page}/aboutform`);
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
                placeholder="email.example"
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
                htmlFor="contact"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Contact Number
              </label>
              <input
                type="number"
                name="contact"
                id="contact"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                placeholder="name@company.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.contact && formik.errors.contact && (
                <div className="text-red-400">{formik.errors.contact}</div>
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
                rows="1"
                className="bg-gray-50 border resize-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                placeholder="Your message..."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>

              {formik.touched.address && formik.errors.address && (
                <div className="text-red-400">{formik.errors.address}</div>
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
