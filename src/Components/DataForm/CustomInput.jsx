import * as Yup from "yup";

import { ErrorMessage, useField } from "formik";
import React from "react";
import { inputCss, labelCss } from "../TailwindCss/tailwindCss";
const CustomInput = ({ label, ...props }) => {
  const [field] = useField(props);
  const name = props?.name;
  const fieldName = name?.split("info.0.").join("");
  return (
    <>
      <div>
        {fieldName == "workOn" || fieldName == "projectDetail" ? (
          <textarea
            {...field}
            {...props}
            placeholder=" "
            autoComplete="off"
            rows="2"
            className={` ${
              props?.type === "checkbox"
                ? "w-4 h-4 text-blue-600 bg-blue-100 rounded mt-5"
                : `resize-none ${inputCss}`
            }`}
          ></textarea>
        ) : (
          <input
            {...field}
            {...props}
            placeholder=" "
            autoComplete="off"
            className={` ${
              props?.type === "checkbox"
                ? "w-4 h-4 text-blue-600 bg-blue-100 rounded mt-5"
                : inputCss
            }`}
          />
        )}

        <label htmlFor={props?.placeholder} className={`${labelCss}`}>
          {props?.placeholder}
        </label>

        <ErrorMessage
          component="div"
          name={field.name}
          className="text-red-400"
        />
      </div>
    </>
  );
};

export default CustomInput;
