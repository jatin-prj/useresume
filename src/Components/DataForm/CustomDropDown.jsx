import { ErrorMessage, useField } from "formik";
import { inputCss, labelCss } from "Components/TailwindCss/tailwindCss";
const CustomDropDown = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <>
      <div>
        <label htmlFor={props?.placeholder} className={`${labelCss}`}>
          {props?.placeholder}
        </label>

        <select className={`${inputCss} `} {...field} {...props}>
          {props?.expertise?.map((expert, index) => (
            <option key={index} value={expert}>
              {expert}
            </option>
          ))}
        </select>

        <ErrorMessage
          component="div"
          name={field.name}
          className="text-red-400"
        />
      </div>
    </>
  );
};

export default CustomDropDown;
