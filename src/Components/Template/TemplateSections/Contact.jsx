import { useSelector } from "react-redux";
import { FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { PiDeviceMobileFill } from "react-icons/pi";

export default function Contact() {
  const Contact = useSelector((state) => state?.ResumeDetails?.contact);
  return (
    <>
      <div className="w-full h-full">
        <h2 className=" text-lg font-poppins font-bold text-top-color ">
          My Contact
        </h2>
        <div className=" border-2 w-20 border-gray-300 rounded "></div>

        <div
          className={`w-full h-20 flex flex-col justify-around mt-1`}
        >
          <div className="flex items-center justify-start my-2">
            <FaEnvelope className="w-6 text-gray-700" />

            <div className="ml-2">{Contact?.email}</div>
          </div>
          <div
            className={`flex items-center justify-start my-2 
            
            `}
          >
            <PiDeviceMobileFill className="w-6 text-gray-700" />

            <div className="w-full">{Contact?.contact}</div>
          </div>
          <div className="flex items-center justify-start my-2 ">
            <IoLocationSharp size={20} className="w-6 text-gray-700" />
            <div className="">{Contact?.address}</div>
          </div>
        </div>
      </div>
    </>
  );
}
