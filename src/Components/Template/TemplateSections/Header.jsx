import { useSelector } from "react-redux";
import profile from "../../../Assests/Img/profile.avif";
export default function Header({ headBgColor, headTextColor }) {
  const info = useSelector((state) => state?.ResumeDetails?.infoSection);
  // console.log("info", info);
  return (
    <div
      className={`w-full h-full flex bg-top-color p-2 bg-[${headBgColor}]  text-[${headTextColor}]`}
    >
      <div className="h-20 w-20 overflow-hidden rounded-full  border ml-5 ">
        <img
          src={profile}
          alt="userProfile"
          className="object-cover w-full h-full "
        />
      </div>

      <div className="w-2/3  pl-5 mt-2  text-center">
        <p className="font-poppins font-bold text-heading text-2xl">
          {info?.FullName}
        </p>
        <p className="text-heading">{info?.Profession}</p>
      </div>
    </div>
  );
}
