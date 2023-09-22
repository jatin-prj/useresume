import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { PersonalDetails } from "../../Redux/Action/Information";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FaArrowRight, FaCloudUploadAlt } from "react-icons/fa";
import profile from "../../Assests/Img/profile.avif";
import {
  formButtonCss,
  formHeadingCss,
  inputCss,
  labelCss,
} from "../TailwindCss/tailwindCss";
import { designationData } from "../../Redux/Action/Data";
export default function InfoSection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // state for set user profile image
  const [img, setImg] = useState(profile);

  const formik = useFormik({
    initialValues: {
      Profile: "",
      FullName: "",
      Designation: "",
    },
    validationSchema: Yup.object({
      FullName: Yup.string().required("*  Enter Your Full Name"),
      Designation: Yup.string().required("*  Enter Your Designation"),
    }),
    onSubmit: (values, { resetForm }) => {
      let FieldData = {
        Profile: img,
        FullName: values?.FullName,
        Designation: values?.Designation,
      };
      // dispatch for PersonalDetails
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
        <h3 className={`${formHeadingCss}`}>Personal Information</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid gap-4 mb-4 sm:grid-cols-2 ">
            {/* full Name  */}
            <div className="pb-0 relative mb-0">
              <input
                type="text"
                name="FullName"
                id="FullName"
                className={`${inputCss}`}
                placeholder="  "
                onChange={formik.handleChange}
                value={formik.values.FullName}
                onBlur={formik.handleBlur}
                autoComplete="off"
              />
              <label htmlFor="FullName" className={`${labelCss}`}>
                Full Name
              </label>
              {formik.touched.FullName && formik.errors.FullName && (
                <div className="text-red-400">{formik.errors.FullName}</div>
              )}
            </div>
            {/* profile picture  */}
            <div className="mt-2 sm:-mt-10">
              <label
                htmlFor="ImgUrl"
                className={`block mr-[70%] sm:mr-0 mb-2 text-center ${formHeadingCss}`}
              >
                Profile Picture
              </label>

              <div className=" sm:mx-auto   rounded-full border border-blue-300  w-20 h-20 ">
                <img
                  className="  w-full object-cover w-full h-full rounded-full"
                  src={img}
                  alt="profile-img"
                />
                <label
                  htmlFor="dropzone-file"
                  className="relative left-12 -top-7 flex flex-col w-8 h-8 items-center justify-center border-2 border-cyan-500  rounded-full cursor-pointer bg-cyan-700 hover:bg-cyan-500 "
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
            {/* Designation(profession) */}
            <div className="relative">
              <input
                type="text"
                name="Designation"
                list="Designation"
                id="designation"
                className={`${inputCss}`}
                placeholder=" "
                onChange={formik.handleChange}
                value={formik.values.Designation}
                onBlur={formik.handleBlur}
              />
              <label htmlFor="designation" className={`${labelCss}`}>
                Profession
              </label>

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
          <div className="flex justify-end">
            {/* next button  */}
            <button type="submit" className={`${formButtonCss}`}>
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
