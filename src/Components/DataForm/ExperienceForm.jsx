import { FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaPlus, FaArrowLeft, FaTrash, FaArrowRight } from "react-icons/fa";
import { designationData } from "../../Redux/Action/Data";
import { ExperienceDetails } from "../../Redux/Action/Experience";
import { formButtonCss, formHeadingCss } from "../TailwindCss/tailwindCss";
import CustomInput from "./CustomInput";

export default function ExperienceForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // intialvalues
  const initialValues = {
    info: [
      {
        companyName: "",
        startYear: "",
        endYear: "",
        presentcheck: false,
        workOn: "",
        Designation: "",
      },
    ],
  };
  // create yup validation
  const handleValidation = Yup.object().shape({
    info: Yup.array().of(
      Yup.object().shape({
        companyName: Yup.string().required("*  Enter Company Name"),
        startYear: Yup.string().required("* Enter Start Date"),
        presentcheck: Yup.boolean(),
        endYear: Yup.string().when("presentcheck", {
          is: false,
          then: () => Yup.string().required("* Enter End Date"),
        }),
        workOn: Yup.string().required("*  Enter Some details on work"),
        Designation: Yup.string().required("*  Enter Position"),
      })
    ),
  });

  // Add field functoin
  const addInputField = (values, setValues) => {
    const data = {
      companyName: "",
      startYear: "",
      endYear: "",
      presentcheck: false,
      workOn: "",
      Designation: "",
    };
    setValues({ ...values, info: [...values?.info, data] });
  };
  //remove field function
  const removeInputFields = (i, values, setValues) => {
    const infoFilter = values?.info?.filter((item, index) => i !== index);
    setValues({ ...values, info: infoFilter });
  };
  // onSubmit function
  const handleSubmit = (values, { resetForm }) => {
    let data = {
      experienceData: values?.info,
    };
    // dispatch for experience
    dispatch(ExperienceDetails(data)).then((res) => {
      if (res) {
        localStorage?.removeItem("checked");
        navigate(`/templates/projectform`);
      }
    });
    console.log("values", data);
    resetForm({ values: "" });
  };
  // handleCheck function is used when user change the checkbox

  const handleCheck = (item, i, values, setValues) => {
    console.log("");
    localStorage?.setItem("checked", i + 1);
    if (localStorage?.getItem("checked")) {
      let currentCheck = Number(localStorage.getItem("checked")) - 1;
      let formData = values?.info?.map((e, ind) => {
        if (ind === currentCheck) {
          return { ...e, presentcheck: e.presentcheck ? false : true };
        } else {
          return { ...e, presentcheck: false };
        }
      });
      setValues({ ...values, info: formData });
    }
  };

  return (
    <>
      <div className="mx-5 p-5">
        <Formik
          validationSchema={handleValidation}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ values, setValues }) => (
            <>
              {/* Add button and heading of form  */}
              <div className="flex justify-between">
                <h3 className={` ${formHeadingCss}`}>Experience Details</h3>
                <button
                  type="button"
                  className={`${formButtonCss}`}
                  onClick={() => addInputField(values, setValues)}
                >
                  <FaPlus className="text-white" />
                </button>
              </div>

              <Form>
                <FieldArray name="info">
                  {() =>
                    values?.info?.map((item, index) => {
                      const {
                        startYear,
                        presentcheck,
                      } = item;

                      return (
                        <div key={index}>
                          {/* remove button  */}
                          <div className="flex justify-between">
                            <h3 className={`${formHeadingCss}`}>
                              {index > 0 && "New Details"}
                            </h3>
                            <div className=" flex items-end cursor-pointer ">
                              {index > 0 && (
                                <div
                                  className={`${formButtonCss}`}
                                  onClick={() =>
                                    removeInputFields(index, values, setValues)
                                  }
                                >
                                  <FaTrash className="" />
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="flex w-full  flex-wrap gap-4 mb-2 ">
                            {/* company name  */}
                            <div className=" w-full md:w-2/5 relative">
                              <CustomInput
                                name={`info.${index}.companyName`}
                                placeholder="Enter Compnay Name"
                              />
                            </div>

                            {/* Designation (profession ) */}
                            <div className="w-full md:w-2/5 relative">
                              <CustomInput
                                name={`info.${index}.Designation`}
                                placeholder="Enter Profession"
                                id="Designation"
                                list={`info.${index}.Designation`}
                              />
                              <datalist id={`info.${index}.Designation`}>
                                {designationData?.map((d) => (
                                  <option
                                    key={d.value}
                                    value={d.label}
                                    className=""
                                  />
                                ))}
                              </datalist>
                            </div>
                            {/* start year date  */}
                            <div className="w-full md:w-2/5 relative ">
                              <CustomInput
                                name={`info.${index}.startYear`}
                                placeholder=" Enter startYear"
                                type="date"
                                min="1947-01-01"
                                max={new Date().toISOString().split("T")[0]}
                              />
                            </div>
                            {/* present checkbox  */}
                            <div className="flex w-full md:w-2/5 mt-1">
                              <CustomInput
                                name={`info.${index}.presentcheck`}
                                placeholder=" Pursuing"
                                type="checkbox"
                                onChange={(e) =>
                                  handleCheck(item, index, values, setValues)
                                }
                              />
                              <span className="mt-4 ml-2">Currently Work</span>
                            </div>
                            {/* End year date  */}
                            {presentcheck !== true && (
                              <div className="w-full md:w-2/5 relative mt-10 mb-4 ">
                                <CustomInput
                                  name={`info.${index}.endYear`}
                                  placeholder=" Enter EndYear"
                                  type="date"
                                  min={startYear}
                                  max={new Date().toISOString().split("T")[0]}
                                />
                              </div>
                            )}
                            {/* textarea for about work  */}
                            <div
                              className={`${
                                presentcheck === true && "md:w-[81.2%]"
                              } w-full md:w-2/5 relative mt-5`}
                            >
                              <CustomInput
                                name={`info.${index}.workOn`}
                                placeholder="Enter About work"
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })
                  }
                </FieldArray>
                {/* Button group  */}
                <div className="flex justify-between mt-2">
                  <Link to={`/templates/educationform`}>
                    <button
                      className={`bg-[#309ba0] ${formButtonCss.split(
                        "form-button"
                      )}`}
                    >
                      <FaArrowLeft className="text-white" />
                    </button>
                  </Link>

                  <button type="submit" className={`${formButtonCss}`}>
                    <FaArrowRight className="text-white" />
                  </button>
                </div>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </>
  );
}
