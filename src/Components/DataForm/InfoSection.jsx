import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, json, useNavigate, useParams } from "react-router-dom";
import { PersonalDetails } from "../../Redux/Action/Information";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function InfoSection() {
  const {page} = useParams()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [img, setImg] = useState();
  const formik = useFormik({
    initialValues: {
      ImgUrl: "",
      username: "",
      subtitle: "",
    },
    validationSchema: Yup.object({
      //   ImgUrl: Yup.string().required("* Please Enter Your ImgUrl"),
      username: Yup.string()
        .required("* Please Enter Your Password")
        .min(4, "To Short"),
    }),
    onSubmit: (values, { resetForm }) => {
      let data = {
        ImgUrl: img,
        username: values?.username,
        subtitle: values?.subtitle,
      };
      dispatch(PersonalDetails(data)).then((res) => {
        if (res) {
          navigate(`/templates/${page}/contactform`);
        }
      });
      console.log("values", data);

      resetForm({ values: "", data: "" });
    },
  });
  return (
    <>
      <div className="mx-5 ">
        <form onSubmit={formik.handleSubmit}>
          <h3 className="mb-4 text-lg font-medium leading-none text-gray-900">
            Header Details
          </h3>
          <div className="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                placeholder="username.example"
                onChange={formik.handleChange}
                value={formik.values.username}
                onBlur={formik.handleBlur}
              />
              {formik.touched.username && formik.errors.username && (
                <div className="text-red-400">{formik.errors.username}</div>
              )}
            </div>
            <div>
              <label
                htmlFor="ImgUrl"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                ImgUrl
              </label>
              <input
                accept="image/*"
                type="file"
                name="ImgUrl"
                id="ImgUrl"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                placeholder="name@company.com"
                onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))}
                onBlur={formik.handleBlur}
              />
              {formik.touched.ImgUrl && formik.errors.ImgUrl && (
                <div className="text-red-400">{formik.errors.ImgUrl}</div>
              )}
            </div>

            <div>
              <label
                htmlFor="subtitle"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                SubTitle
              </label>
              <input
                type="subtitle"
                name="subtitle"
                id="subtitle"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                placeholder="name@company.com"
                onChange={formik.handleChange}
                value={formik.values.subtitle}
                onBlur={formik.handleBlur}
              />
              {formik.touched.subtitle && formik.errors.subtitle && (
                <div className="text-red-400">{formik.errors.subtitle}</div>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-700 border hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Next
          </button>
        </form>
      </div>
    </>
  );
}
