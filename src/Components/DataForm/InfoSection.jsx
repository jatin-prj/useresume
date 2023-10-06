import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import profile from "Assests/Img/profile.avif";
import { PersonalDetails } from "Redux/Action/Information";
import { FaArrowRight, FaCloudUploadAlt } from "react-icons/fa";
import { designationData } from "Redux/Action/Data";
export default function InfoSection({ setOpen }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const templateId = localStorage.getItem("template-id");
  const local = JSON.parse(localStorage.getItem("personal-details"));
  // state for set user profile image
  const [img, setImg] = useState(profile);
  // Initialvalues
  let initial = {
    Profile: "",
    FullName: "",
    Profession: "",
  };
  // if edit-section then previous data else initial
  const initialValues =
    location.pathname.includes("/edit-section") &&
    localStorage.getItem("personal-details")
      ? local
      : initial;
  // validation schema
  const handleValidation = Yup.object().shape({
    FullName: Yup.string().required("*  Enter Your Full Name"),
    Profession: Yup.string().required("*  Enter Your Profession"),
  });
  // onSubmit function
  const handleSubmit = (values, { resetForm }) => {
    let FieldData = {
      Profile: img,
      FullName: values?.FullName,
      Profession: values?.Profession,
    };
    // dispatch for PersonalDetails
    dispatch(PersonalDetails(FieldData)).then((res) => {
      if (res) {
        if (location.pathname.includes("/edit-section")) {
          navigate(`/templates/preview/template-${templateId}`);
          setOpen(false);
        } else {
          navigate(`/templates/contactform`);
        }
      }
    });
    resetForm({ values: "", FieldData: "" });
    setImg("");
  };

  return (
    <Formik
      validationSchema={handleValidation}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ values, setValues }) => (
        <>
          <h3 className={`heading formHeading`}>Personal Information</h3>
          <Form>
            <FieldArray name="info">
              <div className="flex w-full  flex-wrap gap-4 mb-2">
                {/* FullName  */}
                <div className=" w-full md:w-2/5 relative z-0 mb-8 md:mb-0">
                  <div className="flex flex-col">
                    <Field
                      name={`FullName`}
                      type="text"
                      placeholder=" "
                      className={`input peer`}
                      autoComplete="off"
                    />
                    <ErrorMessage
                      component="span"
                      name={`FullName`}
                      className="text-red-400"
                    />
                    <label htmlFor="FullName" className={`label`}>
                      Enter Full Name
                    </label>
                  </div>
                </div>
                {/* profile picture  */}
                <div className="w-full md:w-2/5 sm:-mt-10">
                  <label
                    htmlFor="ImgUrl"
                    className={`block mr-[80%] md:mr-0  text-center heading formHeading`}
                  >
                    Profile Picture
                  </label>

                  <div className=" md:mx-auto  rounded-full border border-blue-300  w-20 h-20 ">
                    <img
                      className="  w-full object-cover w-full h-full rounded-full"
                      src={img}
                      alt="profile-img"
                    />
                    <label
                      htmlFor="dropzone-file"
                      className="relative left-12 -top-7 flex flex-col w-8 h-8 items-center justify-center border-2 border-cyan-500  rounded-full cursor-pointer bg-cyan-700 hover:bg-cyan-500 "
                    >
                      <FaCloudUploadAlt size={18} className="text-white" />

                      <input
                        id="dropzone-file"
                        accept="image/*"
                        type="file"
                        name="Profile"
                        className="hidden"
                        onChange={(e) =>
                          setImg(URL.createObjectURL(e.target.files[0]))
                        }
                      />
                    </label>
                  </div>
                </div>
                {/* Designation(profession) */}
                <div className="w-full md:w-2/5 relative z-0">
                  <div className="flex flex-col">
                    <Field
                      name={`Profession`}
                      type="text"
                      placeholder=" "
                      list="Profession"
                      className={`input peer`}
                    />
                    <ErrorMessage
                      component="span"
                      name={`Profession`}
                      className="text-red-400"
                    />
                    <label htmlFor="Profession" className={`label`}>
                      Profession
                    </label>
                    <datalist id="Profession">
                      {designationData.map((d) => (
                        <option key={d.value} value={d.label}  />
                      ))}
                    </datalist>
                  </div>
                </div>
              </div>
            </FieldArray>
            {/* button group */}
            <div className="flex justify-end">
              {/* next button  */}
              <button type="submit" className={`btn btn-next`}>
                <FaArrowRight  />
              </button>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
}
