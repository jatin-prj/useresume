import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import {
  FaExclamationTriangle,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaUserTie,
} from "react-icons/fa";
export default function SignUp() {
  const navigate = useNavigate();
  const [showPasswod, setShowPassword] = useState(true);
  const [imageUrl, setImageUrl] = useState();
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      username: "",
      email: "",
      password: "",
      avatar: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("* Please Enter Your UserName")
        .matches(/^[A-Za-z0-9.]+@+[A-Za-z0-9]/, "Enter Valid Email"),
      fname: Yup.string().required("* Enter Your First Name"),
      lname: Yup.string().required("* Enter Your Last Name"),
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*?[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        )
        .matches(/^\S*$/, "Whitespace is not allowed")
        .required("password is required"),
      email: Yup.string()
        .required("* Please Enter Your Email")
        .matches(/^[A-Za-z0-9.]+@+[A-Za-z0-9]/, "Enter Valid Email"),
    }),
    onSubmit: (values, { resetForm }) => {
      // console.log("val", { ...values, avatar: imageUrl == undefined ? "https://www.melivecode.com/users/cat.png" : imageUrl });
      resetForm({ values: "" });
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="bg-[#082d3a]  p-5 relative lg:py-32 h-screen">
          <div className="flex flex-col items-center   my-auto mx-5  lg:pt-4  sm:flex-row rounded-md ">
            <div
              className="hidden w-full  relative max-w-md mr-5 lg:max-w-2xl 
                            lg:block ml-12 bounce-image relative top-[100px]"
            >
              <img
                className="bounce-image"
                src="https://cdn3d.iconscout.com/3d/premium/thumb/businessman-pointing-fingers-in-left-side-4925365-4127132.png?f=webp"
                alt=""
              />
            </div>
            <div className="w-full lg:mx-5 relative z-10  lg:mt-0 lg:w-full">
              <div
                className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 w-[55rem] border  shadow-md   hover:shadow-lg  rounded-xl
                relative z-10"
              >
                <p className="w-full text-4xl font-medium text-center dark:text-white leading-snug font-serif  md:text-4xl">
                  Sign up for your account
                </p>
                <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                  {/* First name  */}
                  <div className="lg:flex justify-between">
                    <div className="w-[48%] relative">
                      <input
                        placeholder=""
                        type="text"
                        name="fname"
                        className="input peer text-white h-full"
                        onChange={formik.handleChange}
                        value={formik.values.fname}
                        onBlur={formik.handleBlur}
                      />
                      <span className="absolute inset-y-0 right-0 mr-5 mt-0 flex items-center pl-3">
                        <span>
                          <FaUserTie className="text-cyan-500" size={20} />
                        </span>

                        {formik.touched.fname && formik.errors.fname && (
                          <>
                            <div className="text-red-500">
                              <div className="relative inline-block ml-2 mt-2 tooltip">
                                <FaExclamationTriangle size={20} />
                                <div className=" p-2 bg-white h-auto text-center border-2 z-10 sm:h-auto md:w-60  h-10 rounded-md  absolute right-0  invisible tooltip-item ">
                                  {formik.errors.fname}
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </span>
                      <label htmlFor="fname" className="label absolute ">
                        First Name
                      </label>
                    </div>
                    {/* Last Name  */}
                    <div className="w-[48%] relative">
                      <input
                        placeholder=""
                        type="text"
                        name="lname"
                        className="input peer text-white h-full"
                        onChange={formik.handleChange}
                        value={formik.values.lname}
                        onBlur={formik.handleBlur}
                      />
                      <span className="absolute inset-y-0 right-0 mr-5 mt-0 flex items-center pl-3">
                        <span>
                          <FaUserTie className="text-cyan-500" size={20} />
                        </span>

                        {formik.touched.lname && formik.errors.lname && (
                          <>
                            <div className="text-red-500">
                              <div className="relative inline-block ml-2 mt-2 tooltip">
                                <FaExclamationTriangle size={20} />
                                <div className=" p-2 bg-white h-auto text-center border-2 z-10 sm:h-auto md:w-60  h-10 rounded-md  absolute right-0  invisible tooltip-item ">
                                  {formik.errors.lname}
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </span>
                      <label htmlFor="lname" className="label">
                        Last Name
                      </label>
                    </div>
                  </div>

                  {/* User Name  */}
                  <div className="lg:flex justify-between">
                    <div className="w-[48%] relative">
                      <input
                        placeholder=""
                        type="email"
                        name="email"
                        className="input peer text-white relative"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                      />
                      <span className="absolute inset-y-0 right-0 mr-5 mt-0 flex items-center pl-3">
                        <span>
                          <FaEnvelope className="text-cyan-500" size={20} />
                        </span>

                        {formik.touched.email && formik.errors.email && (
                          <>
                            <div className="text-red-500">
                              <div className="relative inline-block ml-2 mt-2 tooltip">
                                <FaExclamationTriangle size={20} />
                                <div className=" p-2 bg-white h-auto text-center border-2 z-10 sm:h-auto md:w-60  h-10 rounded-md  absolute right-0  invisible tooltip-item ">
                                  {formik.errors.email}
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </span>
                      <label htmlFor="email" className="label">
                        Email
                      </label>
                    </div>

                    {/* Email  */}
                    <div className="w-[48%] relative">
                      <input
                        placeholder=""
                        type={showPasswod ? "password" : "text"}
                        name="password"
                        className="input peer text-white relative"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                      />
                      <span className="absolute inset-y-0 right-0 mr-5 mt-0 flex items-center pl-3">
                        <span onClick={() => setShowPassword(!showPasswod)}>
                          {showPasswod ? (
                            <FaEye className="text-cyan-500" size={22} />
                          ) : (
                            <FaEyeSlash className="text-cyan-500" size={22} />
                          )}
                        </span>

                        {formik.touched.password && formik.errors.password && (
                          <div className="text-red-500">
                            <div className="relative inline-block ml-2 mt-2 tooltip">
                              <FaExclamationTriangle size={20} />
                              <div className="flex p-2  bg-white h-auto text-center border-2 z-10 sm:w-15 sm:h-auto md:w-60  h-10 rounded-md  absolute right-0 invisible tooltip-item ">
                                {formik.errors.password}
                              </div>
                            </div>
                          </div>
                        )}
                      </span>
                      <label htmlFor="password" className="label">
                        Password
                      </label>
                    </div>
                  </div>

                  {/* Password  */}

                  <div className="relative">
                    <button
                      type="submit"
                      className=" btn btn-text w-full border-0"
                    >
                      Sign Up
                    </button>
                    <p className="text-sm text-center font-md text-white mt-3">
                      Already have you an account?{" "}
                      <Link
                        to="/signin"
                        className="font-medium text-blue-500 hover:underline "
                      >
                        Sign In
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
