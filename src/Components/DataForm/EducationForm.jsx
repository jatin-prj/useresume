import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { EducationDetails } from "../../Redux/Action/Education";
import { FaPlus, FaArrowLeft, FaTrash, FaArrowRight } from "react-icons/fa";
import {
  formButtonCss,
  formHeadingCss,
  inputCss,
  labelCss,
} from "../TailwindCss/tailwindCss";

export default function EducationForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // state for all input fields
  const [inputFields, setInputFields] = useState([
    {
      startYear: "",
      endYear: "",
      course: "",
      instituteName: "",
      percentage: "",
      presentcheck: false,
    },
  ]);
  // Add field function
  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        startYear: "",
        endYear: "",
        course: "",
        instituteName: "",
        percentage: "",
        presentcheck: false,
      },
    ]);
  };
  // remove field function
  const removeInputFields = (index) => {
    let items = inputFields.filter((_, indexOf) => indexOf !== index);
    setInputFields(items);
  };
  // checktick funtion for checking true and false for present or not
  const checktick = (e, ind) => {
    if (e.presentcheck === true) {
      return ind + 1;
    }
  };

  // handleChange function used when user change the data in particular field
  const handleChange = (index, event) => {
    const list = [...inputFields];
    let ind = list?.map((e, index) => {
      return checktick(e, index);
    });
    if (event?.target?.name === "presentcheck") {
      if (ind?.filter((e) => e)?.length) {
        list[ind?.filter((e) => e) - 1][event?.target?.name] = false;
      }
      list[index][event?.target?.name] = event?.target?.checked;
    } else {
      return (list[index][event?.target?.name] = event?.target?.value);
    }
    setInputFields(list);
  };

  const formik = useFormik({
    initialValues: {
      startYear: "",
      endYear: "",
      course: "",
      instituteName: "",
      percentage: "",
      presentcheck: false,
    },
    validationSchema: Yup.object({
      startYear: Yup.string().required("* Enter Start Date"),
      presentcheck: Yup.boolean(),
      endYear: Yup.string().when("presentcheck", {
        is: false,
        then: () => Yup.string().required("* Enter End Date"),
      }),
      course: Yup.string().required("*  Enter Cource"),
      instituteName: Yup.string().required("* Enter School or College Name"),
      percentage: Yup.string().when("presentcheck", {
        is: false,
        then: () => Yup.string().required("* Enter percentage"),
      }),
    }),
    onSubmit: (values, { resetForm }) => {
      let data = {
        educationData: inputFields,
      };
      // dispatch for education
      dispatch(EducationDetails(data)).then((res) => {
        if (res) {
          navigate(`/templates/experienceform`);
        }
      });
      console.log("values", data);
      resetForm({ values: "" });
    },
  });

  return (
    <>
      <div className="mx-5">
        <form onSubmit={formik.handleSubmit}>
          {/* Add button and heading of form  */}
          <div className="flex justify-between">
            <h3 className={`${formHeadingCss}`}>Education Details</h3>
            <button
              type="button"
              className={`${formButtonCss}`}
              onClick={() => addInputField()}
            >
              <FaPlus className="text-white " />
            </button>
          </div>
          {inputFields.map((data, index) => {
            const {
              startYear,
              endYear,
              course,
              instituteName,
              percentage,
              presentcheck,
            } = data;
            return (
              <div key={index}>
                {/* Remove button  */}
                <div className="flex justify-between">
                  <h3 className={`${formHeadingCss}`}>
                    {index > 0 && "New Details"}
                  </h3>
                  <div className=" flex items-end cursor-pointer ">
                    {index > 0 && (
                      <div
                        className={`${formButtonCss}`}
                        onClick={() => removeInputFields(index)}
                      >
                        <FaTrash className="" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex w-full  flex-wrap gap-4 mb-10 ">
                  {/* Institute Name (school or college ) */}
                  <div className="w-full md:w-2/5 relative">
                    <input
                      type="text"
                      name="instituteName"
                      id="instituteName"
                      className={`${inputCss} mb-3`}
                      placeholder=" "
                      onChange={(e) =>
                        formik.setFieldValue(
                          "instituteName",
                          handleChange(index, e)
                        )
                      }
                      value={instituteName}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    />
                    <label htmlFor="instituteName" className={`${labelCss}`}>
                      School or College Name
                    </label>
                    {formik.touched.instituteName &&
                      formik.errors.instituteName && (
                        <div className="text-red-400">
                          {formik.errors.instituteName}
                        </div>
                      )}
                  </div>
                  {/* course  */}
                  <div className="w-full md:w-2/5 relative">
                    <input
                      type="text"
                      name="course"
                      id="course"
                      className={`${inputCss} mb-3`}
                      placeholder=" "
                      onChange={(e) =>
                        formik.setFieldValue("course", handleChange(index, e))
                      }
                      value={course}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    />
                    <label htmlFor="cource" className={`${labelCss}`}>
                      Course Name
                    </label>
                    {formik.touched.course && formik.errors.course && (
                      <div className="text-red-400">{formik.errors.course}</div>
                    )}
                  </div>
                  {/* start Year date  */}
                  <div className="w-full md:w-2/5 relative ">
                    <input
                      type="date"
                      min="1949-01-01"
                      max={new Date().toISOString().split("T")[0]}
                      name="startYear"
                      id="startYear"
                      className={`${inputCss} mb-3`}
                      placeholder="Enter Passing Year"
                      onChange={(e) =>
                        formik.setFieldValue(
                          "startYear",
                          handleChange(index, e)
                        )
                      }
                      onBlur={formik.handleBlur}
                      value={startYear}
                    />
                    <label
                      htmlFor="startYear"
                      className={`${labelCss} text-xl`}
                    >
                      Starting Year Date
                    </label>
                    {formik.touched.startYear && formik.errors.startYear && (
                      <div className="text-red-400">
                        {formik.errors.startYear}
                      </div>
                    )}
                  </div>
                  {/* present checkbox  */}
                  <div className="w-full md:w-2/5 mt-3">
                    <div className=" mr-4 mb-3">
                      <input
                        id={`presentcheck${index}`}
                        type="checkbox"
                        name="presentcheck"
                        onChange={(e) =>
                          formik.setFieldValue(
                            "presentcheck",
                            handleChange(index, e)
                          )
                        }
                        checked={presentcheck}
                        className="w-4 h-4 text-blue-600 bg-blue-100 rounded  "
                      />
                      <label
                        htmlFor={`presentcheck${index}`}
                        // className="ml-2 text-sm font-medium text-gray-900 "
                        className={`ml-2 text-sm ${formHeadingCss}`}
                      >
                        Pursuing
                      </label>
                    </div>
                  </div>
                  {/* End Year Date  */}
                  {!presentcheck && (
                    <div className="w-full md:w-2/5 relative  ">
                      <input
                        type="date"
                        max={new Date().toISOString().split("T")[0]}
                        min={startYear}
                        name="endYear"
                        id="endYear"
                        className={`${inputCss} mb-3`}
                        placeholder="Enter Passing Year"
                        onChange={(e) =>
                          formik.setFieldValue(
                            "endYear",
                            handleChange(index, e)
                          )
                        }
                        onBlur={formik.handleBlur}
                        value={!presentcheck && endYear}
                      />
                      <label
                        htmlFor="endYear"
                        className={`${labelCss} text-xl`}
                      >
                        Ending Year Date
                      </label>
                      {formik.touched.endYear && formik.errors.endYear && (
                        <div className="text-red-400">
                          {formik.errors.endYear}
                        </div>
                      )}
                    </div>
                  )}
                  {/* percentage  */}
                  {!presentcheck && (
                    <div className="w-full md:w-2/5 relative ">
                      <input
                        type="text"
                        name="percentage"
                        id="percentage"
                        className={`${inputCss} mb-3`}
                        placeholder=" "
                        onChange={(e) =>
                          formik.setFieldValue(
                            "percentage",
                            handleChange(index, e)
                          )
                        }
                        value={percentage}
                        onBlur={formik.handleBlur}
                        autoComplete="off"
                      />
                      <label htmlFor="percentage" className={`${labelCss}`}>
                        Enter Percentage
                      </label>

                      {formik.touched.percentage &&
                        formik.errors.percentage && (
                          <div className="text-red-400">
                            {formik.errors.percentage}
                          </div>
                        )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          {/* Button group  */}
          <div className="flex justify-between mt-2">
            <Link to={`/templates/aboutform`}>
              <button
                type="button "
                className={`bg-[#309ba0] ${formButtonCss.split("form-button")}`}
              >
                <FaArrowLeft className="text-white " />
              </button>
            </Link>

            <button type="submit" className={`${formButtonCss}`}>
              <FaArrowRight className="text-white " />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
