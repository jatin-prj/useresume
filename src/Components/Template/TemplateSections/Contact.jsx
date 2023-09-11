import { useSelector } from "react-redux";
import { FaEnvelope, FaPhoneVolume, FaLocationArrow } from "react-icons/fa";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Contact() {
  const Contact = useSelector((state) => state?.ResumeDetails?.contact);
  console.log("Conatct", Contact);
  return (
    <>
      <div className=" w-full ">
        <h2 className=" text-lg font-poppins font-bold text-top-color ">
          My Contact
        </h2>
        <div className=" border-2 w-20 border-gray-300 rounded "></div>

        <div>
          <div className=" flex items-center my-1 ">
            <a className=" w-6 text-gray-700 hover:text-orange-600 ">
              <FaEnvelope />
            </a>
            <div className=" ml-2  ">{Contact?.email}</div>
          </div>
          <div className=" flex items-center my-1 ">
            <a
              className=" w-6 text-gray-700 hover:text-orange-600 "
              aria-label="Visit TrendyMinds Contact"
              href=""
              target="_blank"
            >
              <FaPhoneVolume beat />
            </a>
            <div className="">{Contact?.contact}</div>
          </div>
          <div className=" flex items-center my-1 ">
            <a
              className=" w-6 text-gray-700 hover:text-orange-600 "
              aria-label="Visit TrendyMinds Facebook"
              href=""
              target="_blank"
            >
              <FaLocationArrow />
            </a>
            <div className="">{Contact?.address}</div>
          </div>
        </div>
      </div>
    </>
  );
}
