import { mainHeadingCss } from "../../../Components/TailwindCss/tailwindCss";

export default function Team() {
  return (
    <div className="text-center pt-5">
      <p className={`${mainHeadingCss}`}>We are Growing Team.</p>
      <p className="text-gray-600 font-bold">
        NOTE:- Officially 3 Member are there, but Unofficially there are 5
        Members.
      </p>
    </div>
  );
}
