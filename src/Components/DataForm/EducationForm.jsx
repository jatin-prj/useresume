import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { EducationDetails } from "../../Redux/Action/Education";
import { FaPlus, FaArrowLeft, FaTrash, FaArrowRight } from "react-icons/fa";

export default function EducationForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  const removeInputFields = (index) => {
    let items = inputFields.filter((_, indexOf) => indexOf !== index);
    setInputFields(items);
  };
  const checktick = (e, ind) => {
    if (e.presentcheck === true) {
      return ind + 1;
    }
  };
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
      course: Yup.string().required("* Please Enter Cource"),
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
          <div className="flex justify-between">
            <h3 className="mb-4 text-lg  font-medium leading-none text-gray-900">
              Education Details
            </h3>
            <div
              type="button"
              style={{ backgroundColor: "rgb(29 78 216)" }}
              className="mr-1 border text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 "
              onClick={() => addInputField()}
            >
              <FaPlus className="text-white " />
            </div>
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
              <>
                <div className="flex justify-between">
                  <h3 className="mb-4 text-lg  font-medium leading-none text-gray-900">
                    {index > 0 && "New Details"}
                  </h3>
                  <div className=" flex items-end cursor-pointer ">
                    {index > 0 && (
                      <div
                        className={`p-1 text-white flex justify-center items-center  bg-red-400 text-center px-5 py-2.5 rounded-lg`}
                        onClick={() => removeInputFields(index)}
                      >
                        <FaTrash className="" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex w-full  flex-wrap gap-4 mb-10 ">
                  <div className="w-full md:w-2/5  ">
                    <label
                      htmlFor="instituteName"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      School or College Name
                    </label>
                    <input
                      type="text"
                      name="instituteName"
                      id="instituteName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                      placeholder="Enter School or College Name"
                      onChange={(e) =>
                        formik.setFieldValue(
                          "instituteName",
                          handleChange(index, e)
                        )
                      }
                      value={instituteName}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.instituteName &&
                      formik.errors.instituteName && (
                        <div className="text-red-400">
                          {formik.errors.instituteName}
                        </div>
                      )}
                  </div>
                  <div className="w-full md:w-2/5">
                    <label
                      htmlFor="cource"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Course Name
                    </label>
                    <input
                      type="text"
                      name="course"
                      id="course"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                      placeholder="Enter course Name"
                      onChange={(e) =>
                        formik.setFieldValue("course", handleChange(index, e))
                      }
                      value={course}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.course && formik.errors.course && (
                      <div className="text-red-400">{formik.errors.course}</div>
                    )}
                  </div>

                  <div className="w-full md:w-2/5  ">
                    <label
                      htmlFor="startYear"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Starting Year Date
                    </label>
                    <input
                      type="date"
                      min="1949-01-01"
                      max={new Date().toISOString().split("T")[0]}
                      name="startYear"
                      id="startYear"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
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
                    {formik.touched.startYear && formik.errors.startYear && (
                      <div className="text-red-400">
                        {formik.errors.startYear}
                      </div>
                    )}
                  </div>

                  <div className="w-full md:w-2/5  mt-8">
                    <div className=" mr-4">
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
                        className="w-4 h-4 text-blue-600 bg-blue-100 border-blue-300 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      <label
                        htmlFor={`presentcheck${index}`}
                        className="ml-2 text-sm font-medium text-gray-900 "
                      >
                        Pursuing
                      </label>
                    </div>
                  </div>

                  {!presentcheck && (
                    <div className="w-full md:w-2/5  ">
                      <label
                        htmlFor="endYear"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Ending Year Date
                      </label>
                      <input
                        type="date"
                        max={new Date().toISOString().split("T")[0]}
                        min={formik.values.startYear}

                        name="endYear"
                        id="endYear"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
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
                      {formik.touched.endYear && formik.errors.endYear && (
                        <div className="text-red-400">
                          {formik.errors.endYear}
                        </div>
                      )}
                    </div>
                  )}

                  {!presentcheck && (
                    <div className="w-full md:w-2/5 ">
                      <label
                        htmlFor="percentage"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Enter Percentage
                      </label>
                      <input
                        type="text"
                        name="percentage"
                        id="percentage"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                        placeholder="Enter Percentage"
                        onChange={(e) =>
                          formik.setFieldValue(
                            "percentage",
                            handleChange(index, e)
                          )
                        }
                        value={percentage}
                        onBlur={formik.handleBlur}
                      />

                      {formik.touched.percentage &&
                        formik.errors.percentage && (
                          <div className="text-red-400">
                            {formik.errors.percentage}
                          </div>
                        )}
                    </div>
                  )}
                </div>
              </>
            );
          })}

          <div className="flex justify-between mt-2">
            <Link to={`/templates/aboutform`}>
              <button
                type="button "
                className=" bg-blue-300 mr-5 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                <FaArrowLeft className="text-white " />
              </button>
            </Link>

            <button
              type="submit"
              style={{ backgroundColor: "rgb(29 78 216)" }}
              className="border text-white   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 "
            >
              <FaArrowRight className="text-white " />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
