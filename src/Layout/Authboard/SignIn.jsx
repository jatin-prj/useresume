import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import {
  FaExclamationTriangle,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import SignInHero from "Assests/Img/SignIn.png";

export default function SignIn() {
  const navigate = useNavigate();
  // const [getAuther, { data: userData }] = useGetAuthMutation();
  const [showPasswod, setShowPassword] = useState(true);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("* Please Enter Your Email")
        .matches(/^[a-zA-Z0-9.]+@+[a-zA-Z0-9]/, "Enter Valid Email"),
      password: Yup.string().required("* Please Enter Your Password"),
    }),
    onSubmit: (values, { resetForm }) => {
      // getAuther({ url: 'login', email: values.email, password: values.password }).then((res) => {
      //     navigate('/dashboard', { state: res });
      // })
      resetForm({ values: "" });
    },
  });

  return (
    <>
      <div className="p-5 relative lg:py-14 bg-no-repeat bg-cover bg-[#082d3a] h-screen">
        <div
          className=" pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto 
      xl:px-5 lg:flex-row "
        >
          <div className="relative w-1/2 m-auto text-4xl text-center text-indigo-800 text-white ">
            Welcome To WebcodeGenie
          </div>
          {/* Blur Ball  */}
          {/* <span className="absolute my-32 bg-indigo-100 bg-indigo-300 w-36 h-36 rounded-full blur-lg"></span> */}
          <form onSubmit={formik.handleSubmit}>
            <div className=" flex flex-col  items-center pr-10  mx-auto   pb-20 pl-10 lg:pt-20  sm:flex-row  rounded-md lg:max-w-7xl">
              {/* Bouncing Image  */}
              <div className="hidden w-full relative max-w-md mr-5 lg:max-w-2xl lg:block  bounce-image">
                <img
                  className="bounce-image h-[520px] relative top-[47px]"
                  //   style={{ height: "520px" }}
                  src={SignInHero}
                  alt="person"
                />
              </div>
              <div className="w-full mt-10 mr-0 mb-0 ml-0 relative z-10  lg:mt-0 ">
                <div
                  className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10   border  shadow-md   hover:shadow-lg  rounded-xl
            relative z-10"
                >
                  <p className="w-full text-4xl font-medium text-center leading-snug font-serif text-white md:text-4xl">
                    Sign in to your account
                  </p>
                  <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                    <div className="relative">
                      <input
                        placeholder=" "
                        type="text"
                        name="email"
                        className="input peer text-white"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                      />
                      <span className="absolute inset-y-0 right-0 mr-5 mt-0 flex items-center p-1 ">
                        <span>
                          <FaEnvelope className="text-cyan-700" size={20} />
                        </span>

                        {formik.touched.email && formik.errors.email && (
                          <>
                            <div className="text-red-500">
                              <div className="relative inline-block ml-2 mt-2 tooltip">
                                <FaExclamationTriangle size={18} />
                                <div className=" p-2 bg-white h-auto text-center border-2 z-10 sm:h-auto md:w-60  h-10 rounded-md  absolute right-0  invisible tooltip-item">
                                  {formik.errors.email}
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </span>
                      <label htmlFor="email" className={`label`}>
                        Email
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        placeholder=" "
                        type={showPasswod ? "password" : "text"}
                        name="password"
                        className="input peer text-white"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                      />
                      <span className="absolute inset-y-0 right-0 mr-5 mt-0 flex items-center pl-3">
                        <span onClick={() => setShowPassword(!showPasswod)}>
                          {showPasswod ? (
                            <FaEye className="text-cyan-700" size={25} />
                          ) : (
                            <FaEyeSlash className="text-cyan-700" size={25} />
                          )}
                        </span>

                        {formik.touched.password && formik.errors.password && (
                          <div className="text-red-500">
                            <div className="relative inline-block ml-2 mt-2 tooltip">
                              <FaExclamationTriangle size={18} />
                              <div className="flex p-2  bg-white h-auto text-center border-2 z-10 sm:w-15 sm:h-auto md:w-60  h-10 rounded-md  absolute right-0 invisible tooltip-item ">
                                {formik.errors.password}
                              </div>
                            </div>
                          </div>
                        )}
                      </span>
                      <label htmlFor="password" className={`label`}>
                        Password
                      </label>
                    </div>
                    <Link
                      to="/forgot"
                      className="text-sm font-medium text-blue-500 hover:underline "
                    >
                      Forgot password?
                    </Link>
                    <div className="relative">
                      <button
                        type="submit"
                        className="btn btn-text w-full border-0"
                      >
                        Sign In
                      </button>
                      <p className="text-sm font-light text-white mt-3">
                        Don’t have an account yet?{" "}
                        <Link
                          to="/signup"
                          className="font-medium text-blue-500 hover:underline "
                        >
                          Sign up
                        </Link>
                      </p>
                    </div>
                    {/* OR Line  */}
                    <div className="flex items-center gap-2 m-0">
                      <div className="h-0.5 w-full bg-white"></div>
                      <h1 className="uppercase font-medium text-white">or</h1>
                      <div className="h-0.5 w-full bg-white"></div>
                    </div>
                    {/* Sign with logo  */}
                    <div className="font-medium text-white m-0 text-center">
                      Sign In With
                    </div>
                    <div className=" flex flex-wrap justify-center items-center gap-4 ">
                      <div className="flex h-10 w-10  items-center justify-center rounded-md  transition ease-in-out  hover:scale-125 duration-500">
                        <span className="font-bold ">
                          {" "}
                          <FcGoogle size={20} />{" "}
                        </span>
                      </div>
                      <div className="flex h-10 w-10  items-center justify-center rounded-md  transition ease-in-out text-blue-500 hover:scale-125 duration-500">
                        <span className="font-bold ">
                          {" "}
                          <FaFacebook size={20} />{" "}
                        </span>
                      </div>
                      <div className="flex h-10 w-10  items-center justify-center rounded-md transition ease-in-out text-sky-400 hover:scale-125 duration-500">
                        <span className="font-bold ">
                          {" "}
                          <FaTwitter size={20} />{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
