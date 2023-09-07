/* eslint-disable no-unused-vars */
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import { SkillDetails } from "../../Redux/Action/skill";

export default function SkillsForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { page } = useParams();
  const [selected, setSelected] = useState([]);

  const formik = useFormik({
    initialValues: {
      skill: [],
    },
    validationSchema: Yup.object({
      skill: Yup.array().required("* Please Enter Sills at-least one"),
    }),
    onSubmit: (values, { resetForm }) => {
      let data = {
        skill: selected,
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

  return (
    <>
      <div className="mx-5">
        <form onSubmit={formik.handleSubmit}>
          <h3 className="mb-4 text-lg font-medium leading-none text-gray-900">
            Skills Details
          </h3>
          <div className="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="skill"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Enter Skills
              </label>
              <TagsInput
                value={selected}
                onChange={setSelected}
                name="skill"
                placeHolder="enter Skills"
              />

              {formik.touched.skill && formik.errors.skill && (
                <div className="text-red-400">{formik.errors.skill}</div>
              )}
            </div>
          </div>
          <div className="">
            <Link to="/educationform">
              <button className="bg-blue-700 mr-5 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Back
              </button>
            </Link>
            <button
              type="submit"
              className="bg-blue-700 border  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 "
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
