import { useSelector } from "react-redux";

export default function Header() {
  const info = useSelector((state) => state?.ResumeDetails?.infoSection);
  // console.log("info", info);
  return (
    <>
      <div className="flex rounded-t-lg bg-top-color p-2 border mb-5  bg-blue-500 w-full ">
        <div className="h-20 w-20 overflow-hidden rounded-full  border ml-5 ">
          <img src={info?.ImgUrl} alt="userProfile" className="object-cover w-full h-full " />
        </div>

        <div className="w-2/3  pl-5 mt-2  text-center">
          <p className="font-poppins font-bold text-heading  text-2xl">
            {info?.FullName}
          </p>
          <p className="text-heading">{info?.Designation}</p>
        </div>
      </div>

      {/* <div className="w-2/3 text-center">
        <p className="font-poppins font-bold text-heading  text-2xl">
          {info?.FullName}
        </p>
        <p className="text-heading">{info?.Designation}</p>
      </div> */}
    </>
  );
}
