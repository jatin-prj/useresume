import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { lazy } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaPlus, FaArrowLeft, FaTrash, FaArrowRight } from "react-icons/fa";
import { designationData } from "Redux/Action/Data";
import { ExperienceDetails } from "Redux/Action/Experience";
const CustomInput = lazy(() => import("Components/DataForm/CustomInput"));

export default function ExperienceForm({ setOpen }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const templateId = localStorage.getItem("template-id");
  const local = JSON.parse(localStorage.getItem("experience-details"));
  console.log("education-detail from local", local);
  // intialvalues
  let initial = [
    {
      companyName: "",
      startYear: "",
      endYear: "",
      presentcheck: false,
      workOn: "",
      Designation: "",
    },
  ];
  // if edit-section then previous data else initial
  const initialValues = {
    info:
      location.pathname.includes("/edit-section") &&
      localStorage.getItem("experience-details")
        ? local?.experienceData
        : initial,
  };
  // create yup validation
  const handleValidation = Yup.object().shape({
    info: Yup.array().of(
      Yup.object().shape({
        companyName: Yup.string().required("*  Enter Company Name"),
        startYear: Yup.string().required("* Select Start Date"),
        presentcheck: Yup.boolean(),
        endYear: Yup.string().when("presentcheck", {
          is: false,
          then: () => Yup.string().required("* Select End Date"),
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
        if (location.pathname.includes("/edit-section")) {
          localStorage?.removeItem("checked");
          navigate(`/templates/preview/template-${templateId}`);
          setOpen(false);
        } else {
          localStorage?.removeItem("checked");
          navigate(`/templates/projectform`);
        }
      }
    });
    resetForm({ values: "" });
  };
  // handleCheck function is used when user change the checkbox
  const handleCheck = (item, i, values, setValues) => {
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
                <h3 className={`heading formHeading`}>Experience Details</h3>
                <div>
                  <button
                    type="button"
                    className={`btn btn-add`}
                    onClick={() => addInputField(values, setValues)}
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>

              <Form>
                <FieldArray name="info">
                  {() =>
                    values?.info?.map((item, index) => {
                      const { startYear, presentcheck } = item;

                      return (
                        <div key={index}>
                          {/* remove button  */}
                          <div className="flex justify-between mt-5">
                            <h3 className={`heading formHeading`}>
                              {index > 0 && "New Details"}
                            </h3>
                            <div className=" flex items-end cursor-pointer ">
                              {index > 0 && (
                                <div
                                  className={`btn btn-delete`}
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
                            <div className=" w-full md:w-2/5 relative z-0">
                              <CustomInput
                                name={`info.${index}.companyName`}
                                placeholder="Enter Compnay Name"
                              />
                            </div>

                            {/* Designation (profession ) */}
                            <div className="w-full md:w-2/5 relative z-0 mb-2">
                              <CustomInput
                                name={`info.${index}.Designation`}
                                placeholder="Enter Profession"
                                id="Designation"
                                list={`info.${index}.Designation`}
                              />
                              <datalist id={`info.${index}.Designation`}>
                                {designationData?.map((d) => (
                                  <option key={d.value} value={d.label} />
                                ))}
                              </datalist>
                            </div>
                            {/* start year date  */}
                            <div className="w-full md:w-2/5 relative z-0 ">
                              <CustomInput
                                name={`info.${index}.startYear`}
                                placeholder=" Select startYear"
                                type="date"
                                min="1947-01-01"
                                max={new Date().toISOString().split("T")[0]}
                              />
                            </div>
                            {/* present checkbox  */}
                            <div className="flex w-full md:w-2/5 md:mt-1">
                              <CustomInput
                                name={`info.${index}.presentcheck`}
                                id={`info.${index}.presentcheck`}
                                placeholder=" Pursuing"
                                type="checkbox"
                                onChange={(e) =>
                                  handleCheck(item, index, values, setValues)
                                }
                              />
                              <label
                                htmlFor={`info.${index}.presentcheck`}
                                className="mt-4 ml-2"
                              >
                                Currently Work
                              </label>
                            </div>
                            {/* End year date  */}
                            {presentcheck !== true && (
                              <div className="w-full md:w-2/5 relative z-0 mt-10  ">
                                <CustomInput
                                  name={`info.${index}.endYear`}
                                  placeholder=" Select EndYear"
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
                              } w-full md:w-2/5 relative z-0 mt-5 `}
                            >
                              <Field
                                component="textarea"
                                rows="2"
                                placeholder=" "
                                className={`resize-none input peer`}
                                name={`info.${index}.workOn`}
                              />
                              <ErrorMessage
                                component="div"
                                name={`info.${index}.workOn`}
                                className="text-red-400"
                              />
                              <label
                                htmlFor={`info.${index}.workOn`}
                                className={`label`}
                              >
                                Enter About work
                              </label>
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
                    <button className={`btn btn-back`}>
                      <FaArrowLeft />
                    </button>
                  </Link>

                  <button type="submit" className={`btn btn-next`}>
                    <FaArrowRight />
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
