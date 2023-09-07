/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from "react-router-dom";
import singleColumn from "../../../Assests/Img/singleColumn.png";
import multiColumn from "../../../Assests/Img/multiColumn.png";
export default function Builder() {
  return (
    <div className="text-center">
      <h2>Choose Templates</h2>
      <div className="flex justify-center gap-4 mt-5">
        <Link to={"/templates/single-column/info"}>
          {/* <button className="rounded-full bg-slate-800 text-white p-4"> */}
          <img
            src={singleColumn}
            alt="image"
            className="w-40  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          />
          {/* </button> */}
        </Link>
        <Link to={"/templates/multi-column/info"}>
          {/* <button className="rounded-full bg-slate-800 text-white p-4"> */}
          <img
            src={multiColumn}
            alt="image"
            className="w-40  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          />
          {/* </button> */}
        </Link>
      </div>
    </div>
  );
}
