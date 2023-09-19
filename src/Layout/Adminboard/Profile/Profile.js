/* eslint-disable jsx-a11y/anchor-is-valid */
import profile from "../../../Assests/Img/profile.avif";

export const user = {
  name: "Jatin Prajapati",
  email: "jatin.p@webcodegenie.com",
  imageUrl: profile,
};

export default function Profile() {
  return (
    <div className="text-center pt-5">
      <p className="text-2xl ">
        We are Growing Now so we have only three Members right now.
      </p>
      <p className="text-gray-600 font-bold">
        NOTE:- Officially 3 Member are there, but Unofficially there are 5
        Members.
      </p>
    </div>
  );
}
