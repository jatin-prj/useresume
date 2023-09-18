import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { PersonalDetails } from "../../Redux/Action/Information";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FaArrowRight, FaCloudUploadAlt } from "react-icons/fa";
import { designationData } from "../../Redux/Action/Data";
import profile from "../../Assests/Img/profile.avif";
export default function InfoSection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [img, setImg] = useState(profile);

  const formik = useFormik({
    initialValues: {
      Profile: "",
      FullName: "",
      Designation: "",
    },
    validationSchema: Yup.object({
      FullName: Yup.string().required("* Please Enter Your Full Name"),
      Designation: Yup.string().required("* Please Enter Your Designation"),
    }),
    onSubmit: (values, { resetForm }) => {
      let FieldData = {
        Profile: img,
        FullName: values?.FullName,
        Designation: values?.Designation,
      };
      dispatch(PersonalDetails(FieldData)).then((res) => {
        if (res) {
          navigate(`/templates/contactform`);
        }
      });
      console.log("values", values);
      resetForm({ values: "", FieldData: "" });
    },
  });

  return (
    <>
      <div className="mx-5 ">
        <h3 className="mb-4 text-lg font-medium leading-none text-gray-900">
          Personal Information
        </h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid gap-4 mb-4 sm:grid-cols-2 ">
            <div className="pb-0">
              <label
                htmlFor="FullName"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Full Name
              </label>
              <input
                type="text"
                name="FullName"
                id="FullName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                placeholder="Enter full Name"
                onChange={formik.handleChange}
                value={formik.values.FullName}
                onBlur={formik.handleBlur}
              />
              {formik.touched.FullName && formik.errors.FullName && (
                <div className="text-red-400">{formik.errors.FullName}</div>
              )}
            </div>
            <div className="">
              <label
                htmlFor="ImgUrl"
                className="block mb-2 text-sm font-medium text-gray-900 text-center"
              >
                Profile Picture
              </label>

              <div className=" mx-auto rounded-full border border-blue-300  w-20 h-20 ">
                <img
                  className=" w-full object-cover w-full h-full rounded-full"
                  src={img}
                  alt="Profile"
                />
                <label
                  htmlFor="dropzone-file"
                  className="relative left-12 -top-7 flex flex-col w-8 h-8 items-center justify-center border-2 border-blue-300    rounded-full cursor-pointer bg-blue-500 hover:bg-blue-300 "
                >
                  <FaCloudUploadAlt size={18} className="text-white" />

                  <input
                    id="dropzone-file"
                    accept="image/*"
                    type="file"
                    name="Profile"
                    className="hidden"
                    onChange={(e) =>
                      setImg(URL.createObjectURL(e.target.files[0]))
                    }
                    onBlur={formik.handleBlur}
                  />
                </label>
              </div>
              {formik.touched.Profile && formik.errors.Profile && (
                <div className="text-red-400">{formik.errors.Profile}</div>
              )}
            </div>
            <div className="">
              <label
                htmlFor="Designation"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Designation
              </label>
              <input
                type="text"
                name="Designation"
                list="Designation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                placeholder="Enter Designation"
                onChange={formik.handleChange}
                value={formik.values.Designation}
                onBlur={formik.handleBlur}
              />
              <datalist id="Designation">
                {designationData.map((d) => (
                  <option key={d.value} value={d.label} className="" />
                ))}
              </datalist>

              {formik.touched.Designation && formik.errors.Designation && (
                <div className="text-red-400">{formik.errors.Designation}</div>
              )}
            </div>
          </div>
          <div className="">
            <button
              type="submit"
              style={{ backgroundColor: "rgb(29 78 216)" }}
              className="bg-blue-700 border text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
