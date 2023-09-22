import { useSelector } from "react-redux";
import { FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import {
  // PiDeviceMobileDuotone,
  PiDeviceMobileFill,
  // PiDeviceMobileThin,
} from "react-icons/pi";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Contact() {
  const Contact = useSelector((state) => state?.ResumeDetails?.contact);
  // console.log("Contact", Contact);
  const templateId = localStorage.getItem("template-id");
  return (
    <>
      <div className=" w-full ">
        <h2 className=" text-lg font-poppins font-bold text-top-color ">
          My Contact
        </h2>
        <div className=" border-2 w-20 border-gray-300 rounded "></div>

        <div
          className={`${
            templateId === "1" && "w-full flex flex-wrap justify-between"
          }`}
        >
          <div className="flex items-center justify-start my-1 w-1/2 ">
            <FaEnvelope className=" w-6 text-gray-700" />

            <div className=" ml-2  ">{Contact?.email}</div>
          </div>
          <div
            className={`flex items-center justify-start my-1 w-1/2 
            
            `}
          >
            <PiDeviceMobileFill className=" w-6 text-gray-700" />

            <div className="w-full">{Contact?.contact}</div>
          </div>
          <div className="flex items-center justify-start my-1 w-1/2 ">
            <IoLocationSharp size={20} className="w-6 text-gray-700" />
            <div className="">{Contact?.address}</div>
          </div>
        </div>
      </div>
    </>
  );
}
