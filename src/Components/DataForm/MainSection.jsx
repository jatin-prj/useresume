import { Link, useLocation } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { stepperArray } from "../../Redux/Action/Data";
import { Fragment } from "react";

export default function MainSection({ children }) {
  const location = useLocation();
  return (
    <>
      <div className="p-4 w-full" style={{ height: "calc(100vh - 4.3rem" }}>
        <div className="p-1 relative">
          <ol className=" flex items-center justify-center  w-full mb-4 sm:mb-5 mx-14   relative right-[3rem]   ">
            {stepperArray?.map((stepperData, index) => (
              <Fragment key={index}>
                {/* stepper list  */}
                <li key={index} className={`flex w-[3rem] items-center`}>
                  <Link
                    to={
                      stepperArray?.findIndex(
                        (e) => e.url === location.pathname
                      ) >
                        stepperArray?.findIndex(
                          (e) => e.url === stepperData?.url
                        ) && stepperData?.url
                    }
                  >
                    <div
                      className={`flex flex-col items-center justify-center w-10 h-10  rounded-full lg:h-12 lg:w-12 shrink-0 text-white  ${
                        index <
                        stepperArray?.findIndex(
                          (e) => e.url === location.pathname
                        )
                          ? "bg-cyan-700"
                          : "bg-cyan-500"
                      }   `}
                    >
                      <div className="relative">
                        {" "}
                        {index <
                        stepperArray?.findIndex(
                          (e) => e.url === location.pathname
                        ) ? (
                          <FaCheck className="transform transition duration-500 hover:scale-125" />
                        ) : (
                          <>
                            <span
                              className={`${
                                stepperData?.url === location?.pathname &&
                                "animate-ping absolute  h-full w-full rounded-full bg-blue-900 opacity-90"
                              }`}
                            ></span>
                            <span>{stepperData?.icon}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <div
                      className={`absolute top-12  mt-2 pb-0 mb-3 ${
                        index <
                        stepperArray?.findIndex(
                          (e) => e.url === location.pathname
                        )
                          ? "text-cyan-700"
                          : "text-cyan-500"
                      }`}
                    >
                      {stepperData?.name}
                    </div>
                  </Link>
                </li>
                {index < stepperArray?.length - 1 && (
                  <span
                    className={`border-2 ${
                      index <
                      stepperArray?.findIndex(
                        (e) => e.url === location.pathname
                      )
                        ? "border-cyan-700"
                        : "border-cyan-500"
                    } ${
                      index < stepperArray?.length - 1 ? "w-[13rem]" : "w-1"
                    } `}
                  ></span>
                )}
              </Fragment>
            ))}
          </ol>
        </div>
        <div className="flex items-center w-full justify-center mt-[4rem] mb-[4rem]  ">
          <div
            className=" w-full md:w-3/4   border p-5  mt-5 mb-5 rounded-lg
          "
          >
            {/* children component inside main component  */}
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
