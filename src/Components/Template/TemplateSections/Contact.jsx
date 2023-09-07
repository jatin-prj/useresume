import { useSelector } from "react-redux";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Contact() {
  const Contact = useSelector((state) => state?.ResumeDetails?.contact);
  console.log("Conatct", Contact);
  return (
    <>
      <div className=" w-full contact">
        <h2 className=" text-lg font-poppins font-bold text-top-color contact">
          My Contact
        </h2>
        <div className=" border-2 w-20 border-gray-300 rounded contact"></div>

        <div>
          <div className=" flex items-center my-1 contact">
            <a className=" w-6 text-gray-700 hover:text-orange-600 contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className=" h-4 contact"
              >
                <path
                  fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                ></path>
              </svg>
            </a>
            <div className=" ml-2  contact">{Contact?.email}</div>
          </div>
          <div className=" flex items-center my-1 contact">
            <a
              className=" w-6 text-gray-700 hover:text-orange-600 contact"
              aria-label="Visit TrendyMinds YouTube"
              href=""
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className=" h-4 contact"
              >
                <path
                  fill="currentColor"
                  d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                ></path>
              </svg>
            </a>
            <div className="contact">{Contact?.contact}</div>
          </div>
          <div className=" flex items-center my-1 contact">
            <a
              className=" w-6 text-gray-700 hover:text-orange-600 contact"
              aria-label="Visit TrendyMinds Facebook"
              href=""
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className=" h-4 contact"
              >
                <path
                  fill="currentColor"
                  d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                ></path>
              </svg>
            </a>
            <div className="contact">{Contact?.address}</div>
          </div>
        </div>
      </div>
    </>
  );
}
