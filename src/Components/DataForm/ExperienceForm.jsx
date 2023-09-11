import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { ExperienceDetails } from "../../Redux/Action/Experience";

export default function ExperienceForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputFields, setInputFields] = useState([
    {
      companyName: "",
      workYear: "",
      workOn: "",
    },
  ]);

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        companyName: "",
        workYear: "",
        workOn: "",
      },
    ]);
  };
  const removeInputFields = (index) => {
    let items = inputFields.filter((_, indexOf) => indexOf !== index);
    console.log("items", items);

    setInputFields(items);
  };
  const handleChange = (index, event) => {
    console.log("event", event?.target?.name);
    const list = [...inputFields];
    list[index][event?.target?.name] = event?.target?.value;
    setInputFields(list);
    return (list[index][event?.target?.name] = event?.target?.value);
  };

  const formik = useFormik({
    initialValues: {
      companyName: "",
      workYear: "",
      workOn: "",
    },
    validationSchema: Yup.object({
      companyName: Yup.string().required("* Please Enter Company Name"),
      workYear: Yup.string().required("* Please Enter WorkYear"),
      workOn: Yup.string().required("* Please Enter Some details on work"),
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
          <h3 className="mb-4 text-lg font-medium leading-none text-gray-900">
            Experience Details
          </h3>
          {inputFields.map((data, index) => {
            const { companyName, workYear, workOn } = data;
            return (
              <>
                <div className="grid gap-4 mb-4 grid-cols md:grid-cols-2">
                  <div>
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
                      placeholder="companyName.example"
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
                  <div>
                    <label
                      htmlFor="workYear"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      workYear
                    </label>
                    <input
                      type="date"
                      name="workYear"
                      id="workYear"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                      placeholder="name@company.com"
                      onChange={(e) =>
                        formik.setFieldValue("workYear", handleChange(index, e))
                      }
                      value={workYear}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.workYear && formik.errors.workYear && (
                      <div className="text-red-400">
                        {formik.errors.workYear}
                      </div>
                    )}
                  </div>

                  <div>
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
                      placeholder="Your message..."
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

                  <div className="mt-8">
                    {index > 0 ? (
                      <button
                        className=" p-1 text-white  bg-red-400 w-8 h-8 rounded-full text-center"
                        onClick={() => removeInputFields(index)}
                      >
                        x
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </>
            );
          })}
          <div className="">
            <Link to={`/templates/educationform`}>
              <button className="bg-blue-700 mr-5 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Back
              </button>
            </Link>
            <button
              type="button"
              className="bg-blue-700 mr-5 hover:text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={() => addInputField()}
            >
              Add New
            </button>
            <button
              type="submit"
              className="bg-blue-700 border hover:text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 "
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
