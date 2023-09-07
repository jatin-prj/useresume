/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from "react-router-dom";
// import singleColumn from "../../../Assests/Img/singleColumn.png";
// import multiColumn from "../../../Assests/Img/multiColumn.png";
import { Templates } from "../../../Components/Template/TemplateLayouts/Templates";
import TemplateModal from "../../../Components/Template/TemplateLayouts/TemplateModal.jsx/TemplateModal";
import { useState } from "react";
export default function Builder() {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-center">
      <h2>Choose Templates</h2>
      <div className="flex justify-center gap-4 mt-5">
        {Templates.map((template, key) => (
          // <Link
          //   to={"/templates/info"}
          //   key={key}
          //   className="w-40  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          // >
            <button
              onClick={() => {
                setOpen(true);
              }}
            >
              {template.template}
            </button>
          // </Link>
        ))}
        {open && <TemplateModal open={open} setOpen={setOpen}/>}
      </div>
    </div>
  );
}
