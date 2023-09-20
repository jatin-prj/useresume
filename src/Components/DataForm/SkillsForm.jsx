import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Fragment, useState } from "react";
import { SkillDetails } from "../../Redux/Action/skill";
import { FaPlus, FaArrowLeft, FaTrash, FaArrowRight } from "react-icons/fa";
import { TagsInput } from "react-tag-input-component";
import "../../App.css";
import {
  formButtonCss,
  formHeadingCss,
  inputCss,
  labelCss,
} from "../TailwindCss/tailwindCss";

export default function SkillsForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const templateId = localStorage.getItem("template-id");
  const expertise = ["Expert", "Intermediate", "Beginner"];
  // state for input fields
  const [inputFields, setInputFields] = useState([
    {
      skill: ["C"],
      rating: "Expert",
    },
  ]);
  // Add field function
  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        skill: [],
        rating: "",
      },
    ]);
  };
  // remove field function
  const removeInputFields = (index) => {
    let items = inputFields.filter((_, indexOf) => indexOf !== index);
    setInputFields(items);
  };
  // handleChange funtion is used when user change on particular field
  const handleChange = (index, event) => {
    let list = [...inputFields];
    setInputFields(list);
    return (list[index][event?.target?.name === "rating" ? "rating" : "skill"] =
      event?.target?.value ? event?.target?.value : event);
  };

  const formik = useFormik({
    initialValues: {
      skill: ["C"],
      rating: "Expert",
    },
    validationSchema: Yup.object({
      skill: Yup.array().required("*  Enter Skill").min(1),
      rating: Yup.string().required("*  Select Level "),
    }),
    onSubmit: (values, { resetForm }) => {
      let data = inputFields;
      // dispatch for skill detail
      dispatch(SkillDetails(data)).then((res) => {
        if (res) {
          navigate(`/templates/preview/template-${templateId}`);
        }
      });
      console.log("values", data, values);
      resetForm({ values: "" });
    },
  });

  return (
    <>
      <div className="mx-5">
        <form onSubmit={formik.handleSubmit}>
          {/* Add button and heading of form  */}
          <div className=" flex justify-between">
            <h3 className={` ${formHeadingCss}`}>Skills Details</h3>
            <button
              type="button"
              className={`${formButtonCss}`}
              onClick={() => addInputField()}
            >
              <FaPlus className="text-white" />
            </button>
          </div>
          {inputFields?.map((data, index) => {
            const { skill, rating } = data;
            return (
              <div key={index}>
                {/* remove button  */}
                <div className="flex justify-between ">
                  <h3 className={`${formHeadingCss}`}>
                    {index > 0 && "More Skills"}
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
                <div className="flex  gap-4 items-end flex-wrap mb-5">
                  {/* rating field (select option for expertise ) */}
                  <div key={index} className="w-full md:w-2/5  relative">
                    <select
                      id="rating"
                      name="rating"
                      onChange={(e) =>
                        formik.setFieldValue("rating", handleChange(index, e))
                      }
                      value={rating}
                      className={`${inputCss} `}
                    >
                      {expertise?.map((expert, index) => (
                        <option key={index} value={expert}>
                          {expert}
                        </option>
                      ))}
                    </select>

                    <label htmlFor="rating" className={`${labelCss} text-xl`}>
                      Select Level
                    </label>

                    {formik.touched.rating && formik.errors.rating && (
                      <div className="text-red-400 ">
                        {formik.errors.rating}
                      </div>
                    )}
                  </div>
                  {/* react tags input  */}
                  <div className="w-full md:w-2/5 relative ">
                    <TagsInput
                      value={skill}
                      onChange={(e) =>
                        formik.setFieldValue("skill", handleChange(index, e))
                      }
                      name="skill"
                      placeHolder="Enter Skill"
                    />

                    {formik.touched.skill && formik.errors.skill && (
                      <div className="text-red-400">{formik.errors.skill}</div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          {/* Button group  */}
          <div className=" flex justify-between mt-2">
            <Link to={`/templates/projectform`}>
              <button
                className={`bg-[#309ba0] ${formButtonCss.split("form-button")}`}
              >
                <FaArrowLeft className="text-white" />
              </button>
            </Link>

            <button type="submit" className={`${formButtonCss}`}>
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
