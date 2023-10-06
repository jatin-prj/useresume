import { ErrorMessage, useField } from "formik";
const CustomDropDown = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <>
      {/* dropdown for select option  */}
      <div>
        <select className={`input peer `} {...field} {...props}>
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
        <label htmlFor={props?.placeholder} className={`label`}>
          {props?.placeholder}
        </label>
      </div>
    </>
  );
};

export default CustomDropDown;
