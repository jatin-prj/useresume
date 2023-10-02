import { ErrorMessage, useField } from "formik";
import { inputCss, labelCss } from "Components/TailwindCss/tailwindCss";
const CustomInput = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <>
      <div>
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
        <label htmlFor={props?.placeholder} className={`${labelCss}`}>
          {props?.placeholder}
        </label>
        <ErrorMessage
          component="div"
          name={field?.name}
          className="text-red-400"
        />
      </div>
    </>
  );
};

export default CustomInput;
