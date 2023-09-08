import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { FaBeer } from "react-icons/fa";
import { PiStarThin } from "react-icons/pi";
import { SkillDetails } from "../../Redux/Action/skill";

export default function SkillsForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { page } = useParams();
  const [selectedRate, setSelectedRate] = useState([]);
  const [dummy, setDummy] = useState([0, 0, 0, 0, 0]);

  const [inputFields, setInputFields] = useState([
    {
      skill: "",
      rating: "",
    },
  ]);

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        skill: "",
        rating: "",
      },
    ]);
  };
  const removeInputFields = (index) => {
    let items = inputFields.filter((_, indexOf) => indexOf !== index);
    // const rows = [...inputFields];
    // rows.splice(index, 1);
    setInputFields(items);
    // console.log("reow", rows);
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
      skill: "",
      rating: "",
    },
    validationSchema: Yup.object({
      skill: Yup.string().required("* Please Enter Skill"),
      rating: Yup.string().required("* Please Enter Rating"),
    }),
    onSubmit: (values, { resetForm }) => {
      let data = {
        skillData: inputFields,
      };
      dispatch(SkillDetails(data)).then((res) => {
        if (res) {
          navigate(`/templates/${page}`);
        }
      });
      console.log("values", data);

      resetForm({ values: "" });
    },
  });
  console.log("input", inputFields);
  const ratingChange = (index, event) => {
    console.log("index start", index);

    setDummy([
      ...dummy.slice(0, index + 1).fill(1),
      ...dummy.slice(index + 1, dummy?.length).fill(0),
    ]);
    setSelectedRate(index + 1);
  };
  console.log();
  return (
    <>
      <div className="mx-5">
        <form onSubmit={formik.handleSubmit}>
          <h3 className="mb-4 text-lg font-medium leading-none text-gray-900">
            Skills Details
          </h3>
          {inputFields?.map((data, index) => {
            const { skill, rating } = data;
            return (
              <>
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="skill"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Enter Skills
                    </label>
                    <input
                      id="skill"
                      name="skill"
                      className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                      placeholder="Your message..."
                      onChange={(e) =>
                        formik.setFieldValue("skill", handleChange(index, e))
                      }
                      onBlur={formik.handleBlur}
                      value={skill}
                    ></input>

                    {formik.touched.skill && formik.errors.skill && (
                      <div className="text-red-400">{formik.errors.skill}</div>
                    )}
                  </div>
                  <div className="mt-2 ml-2">
                    <label
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Select rating
                    </label>

                    {/* <div
                      className="flex gap-3"
                      name="rating"
                      onChange={(e) =>
                        formik.setFieldValue("rating", handleChange(index, e))
                      }
                    >
                      {dummy?.map((e, idx) => (
                        <div
                          key={idx}
                          // id="rating"

                          value={dummy}
                          onClick={(e) => ratingChange(idx, e)}
                        >
                          <PiStarThin
                            className={e && `bg-yellow-500`}
                            size={30}
                          />
                        </div>
                      ))}
                    </div> */}
                    <select
                      id="rating"
                      name="rating"
                      onChange={(e) =>
                        formik.setFieldValue("rating", handleChange(index, e))
                      }
                      value={rating}
                      className="bg-gray-50 border  border-gray-300 text-red-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                    >
                      <option selected>Select the option</option>
                      <option value="100">100</option>

                      <option value="80">80</option>
                      <option value="60">60</option>
                      <option value="40">40</option>
                      <option value="20">20</option>
                    </select>

                    {formik.touched.rating && formik.errors.rating && (
                      <div className="text-red-400">{formik.errors.rating}</div>
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
            <Link to={`/templates/${page}/projectform`}>
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
              className="bg-blue-700 border hover:text-white  hover:text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 "
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
