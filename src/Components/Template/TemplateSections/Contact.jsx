import { useSelector } from "react-redux";
import { FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { PiDeviceMobileFill } from "react-icons/pi";
import { sectionHeadingCss } from "../../TailwindCss/tailwindCss";

export default function Contact() {
  const Contact = useSelector((state) => state?.ResumeDetails?.contact);
  return (
    <>
      <div className="w-full h-full p-2">
        <h2 className={`${sectionHeadingCss}`}>My Contact</h2>

        <div className={`w-full flex flex-col justify-between mt-2`}>
          <div className="flex items-center justify-start mt-2">
            <FaEnvelope className="w-6 " />
            <div className="ml-2">{Contact?.email}</div>
          </div>
          <div
            className={`flex items-center justify-start my-2 
            
            `}
          >
            <PiDeviceMobileFill className="w-6 " />

            <div className="ml-2">{Contact?.contact}</div>
          </div>

          <div className="flex items-center justify-start my-1 ">
            <IoLocationSharp size={20} className="w-6 " />
            <div className="ml-2 w-full overflow-hidden">
              {Contact?.address}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
