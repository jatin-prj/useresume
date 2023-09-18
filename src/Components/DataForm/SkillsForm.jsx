import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { SkillDetails } from "../../Redux/Action/skill";
import { FaPlus, FaArrowLeft, FaTrash, FaArrowRight } from "react-icons/fa";
import { TagsInput } from "react-tag-input-component";

export default function SkillsForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const templateId = localStorage.getItem("template-id");
  const expertise = ["Expert", "Intermediate", "Beginner"];
  const [inputFields, setInputFields] = useState([
    {
      skill: ["C"],
      rating: "Expert",
    },
  ]);

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        skill: [],
        rating: "Expert",
      },
    ]);
  };

  const removeInputFields = (index) => {
    let items = inputFields.filter((_, indexOf) => indexOf !== index);
    setInputFields(items);
  };

  const handleChange = (index, event) => {
    let list = [...inputFields];
    setInputFields(list);
    return (list[index][event?.target?.name === "rating" ? "rating" : "skill"] =
      event?.target?.value ? event?.target?.value : event);
  };

  const formik = useFormik({
    initialValues: {
      skill: [],
      rating: "Expert",
    },
    validationSchema: Yup.object({
      skill: Yup.array().required("* Please Enter Skill"),
      rating: Yup.string().required("* Please Select Level "),
    }),
    onSubmit: (values, { resetForm }) => {
      let data = inputFields;
      dispatch(SkillDetails(data)).then((res) => {
        if (res) {
          navigate(`/templates/preview/template-${templateId}`);
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
          <div className=" flex justify-between">
            <h3 className="mb-4 text-lg font-medium leading-none text-gray-900">
              Skills Details
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
          {inputFields?.map((data, index) => {
            const { skill, rating } = data;
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
                <div
                  key={index}
                  className="flex  gap-4 items-end flex-wrap  mt-2 mb-5"
                >
                  <div key={index} className="w-2/5 mb-4 ">
                    <label
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Select Level
                    </label>

                    <select
                      id="rating"
                      name="rating"
                      onChange={(e) =>
                        formik.setFieldValue("rating", handleChange(index, e))
                      }
                      value={rating}
                      className="bg-gray-50 border  border-gray-300 text-red-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                    >
                      {expertise?.map((expert, index) => (
                        <option key={index} value={expert}>
                          {expert}
                        </option>
                      ))}
                    </select>

                    {formik.touched.rating && formik.errors.rating && (
                      <div className="text-red-400">{formik.errors.rating}</div>
                    )}
                  </div>
                  <div className="w-2/5">
                    <label
                      htmlFor="skill"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Enter Skills
                    </label>

                    <TagsInput
                      value={skill}
                      onChange={(e) =>
                        formik.setFieldValue("skill", handleChange(index, e))
                      }
                      name="skill"
                      placeHolder="enter Skill"
                    />

                    {formik.touched.skill && formik.errors.skill && (
                      <div className="text-red-400">{formik.errors.skill}</div>
                    )}
                  </div>
                </div>
              </>
            );
          })}

          <div className=" flex justify-between mt-2">
            <Link to={`/templates/projectform`}>
              <button className="bg-blue-300 mr-5 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                <FaArrowLeft className="text-white" />
              </button>
            </Link>

            <button
              type="submit"
              style={{ backgroundColor: "rgb(29 78 216)" }}
              className="bg-blue-700 border text-white  hover:text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 "
            >
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
