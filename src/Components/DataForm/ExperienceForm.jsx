import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FaPlus, FaArrowLeft, FaTrash, FaArrowRight } from "react-icons/fa";
import { designationData } from "../../Redux/Action/Data";
import { ExperienceDetails } from "../../Redux/Action/Experience";

export default function ExperienceForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputFields, setInputFields] = useState([
    {
      companyName: "",
      startYear: "",
      endYear: "",
      presentcheck: false,
      workOn: "",
      Designation: "",
    },
  ]);

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        companyName: "",
        startYear: "",
        endYear: "",
        presentcheck: false,
        workOn: "",
        Designation: "",
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
    console.log("event", event?.target?.name);
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
      companyName: "",
      startYear: "",
      endYear: "",
      presentcheck: false,
      workOn: "",
      Designation: "",
    },
    validationSchema: Yup.object({
      companyName: Yup.string().required("* Please Enter Company Name"),
      startYear: Yup.string().required("* Enter Start Date"),
      presentcheck: Yup.boolean(),
      endYear: Yup.string().when("presentcheck", {
        is: false,
        then: () => Yup.string().required("Must enter End Date"),
      }),
      workOn: Yup.string().required("* Please Enter Some details on work"),
      Designation: Yup.string().required("* Please Enter Position"),
    }),
    onSubmit: (values, { resetForm }) => {
      let data = {
        experienceData: inputFields,
      };
      dispatch(ExperienceDetails(data)).then((res) => {
        if (res) {
          navigate(`/templates/projectform`);
        }
      });
      console.log("values", data);
      resetForm({ values: "" });
    },
  });
  return (
    <>
      <div className="mx-5 p-5">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex justify-between">
            <h3 className="mb-4 text-lg font-medium leading-none text-gray-900">
              Experience Details
            </h3>
            <button
              type="button"
              style={{ backgroundColor: "rgb(29 78 216)" }}
              className=" mr-1 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={() => addInputField()}
            >
              <FaPlus className="text-white" />
            </button>
          </div>
          {inputFields.map((data, index) => {
            const {
              companyName,
              startYear,
              endYear,
              presentcheck,
              workOn,
              Designation,
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
                <div className="flex w-full  flex-wrap gap-4 mb-2 ">
                  <div className="w-2/5">
                    <label
                      htmlFor="username"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      id="companyName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                      placeholder="Enter Company Name"
                      onChange={(e) =>
                        formik.setFieldValue(
                          "companyName",
                          handleChange(index, e)
                        )
                      }
                      value={companyName}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.companyName &&
                      formik.errors.companyName && (
                        <div className="text-red-400">
                          {formik.errors.companyName}
                        </div>
                      )}
                  </div>
                  <div className="w-2/5">
                    <label
                      htmlFor="Designation"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Position
                    </label>
                    <input
                      type="text"
                      name="Designation"
                      list="Designation"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                      placeholder="Enter Designation"
                      onChange={(e) =>
                        formik.setFieldValue(
                          "Designation",
                          handleChange(index, e)
                        )
                      }
                      value={Designation}
                      onBlur={formik.handleBlur}
                    />
                    <datalist id="Designation">
                      {designationData?.map((d) => (
                        <option key={d.value} value={d.label} className="" />
                      ))}
                    </datalist>

                    {formik.touched.Designation &&
                      formik.errors.Designation && (
                        <div className="text-red-400">
                          {formik.errors.Designation}
                        </div>
                      )}
                  </div>

                  <div className="w-2/5 ">
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

                  <div className="w-2/5 mt-8">
                    <div className=" mr-4">
                      <input
                        id="presentcheck"
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
                        htmlFor="presentcheck"
                        className="ml-2 text-sm font-medium text-gray-900 "
                      >
                        Currently Work
                      </label>
                    </div>
                  </div>

                  {!presentcheck && (
                    <div className="w-2/5 ">
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
                        value={endYear}
                      />
                      {formik.touched.endYear && formik.errors.endYear && (
                        <div className="text-red-400">
                          {formik.errors.endYear}
                        </div>
                      )}
                    </div>
                  )}

                  <div className={`${presentcheck && "w-full"} w-2/5`}>
                    <label
                      htmlFor="workOn"
                      className="block mb-2 text-sm font-medium text-gray-900 w-full"
                    >
                      Type Something About Your work
                    </label>
                    <textarea
                      id="workOn"
                      name="workOn"
                      rows="2"
                      className="bg-gray-50 border resize-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                      placeholder="Enter Work Description..."
                      onChange={(e) =>
                        formik.setFieldValue("workOn", handleChange(index, e))
                      }
                      onBlur={formik.handleBlur}
                      value={workOn}
                    ></textarea>
                    {formik.touched.workOn && formik.errors.workOn && (
                      <div className="text-red-400">{formik.errors.workOn}</div>
                    )}
                  </div>
                </div>
              </>
            );
          })}
          <div className="flex justify-between mt-2">
            <Link to={`/templates/educationform`}>
              <button className="bg-blue-300 mr-5 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                <FaArrowLeft className="text-white" />
              </button>
            </Link>

            <button
              type="submit"
              style={{ backgroundColor: "rgb(29 78 216)" }}
              className="border text-white   hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 "
            >
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
