/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from "react-router-dom";
import { lazy, useState } from "react";
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import { Templates } from "Components/Template/TemplateLayouts/TemplateOptions";
const TemplateModal = lazy(() =>
  import("Components/Template/TemplateModal/TemplateModal")
);
export default function Builder() {
  const [open, setOpen] = useState(false);
  const [template, setTemplate] = useState();
  const handleSelect = (template) => {
    setOpen(true);
    setTemplate(template);
  };

  return (
    <>
      <div className="relative top-4">
        <div className="text-center flex flex-col items-center">
          <div className="flex justify-around">
            <h3 className={`w-[60%] heading mainHeading`}>Choose Templates</h3>
            <div>
              <Link
                to={`/templates/preview/template-${localStorage.getItem(
                  "template-id"
                )}`}
              >
                <button className="rounded-full bg-slate-100 p-1 w-32">
                  Preview
                </button>
                <LuArrowUpRightFromCircle className="text-lg relative bottom-[25px] left-[112px]" />
              </Link>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-5 lg:w-full sm:w-96">
            {Templates.map((template, index) => (
              <div key={index} className="md:w-40 sm:w-24 image-scale ">
                <button
                  onClick={() => {
                    handleSelect(template);
                    localStorage.setItem("template-id", template.id);
                  }}
                >
                  <div className="flex flex-col">
                    {template.template}
                    <p>{` ${
                      template.id === 1
                        ? "50-50 Layout"
                        : template.id === 2
                        ? "30-70 Layout"
                        : template.id === 3
                        ? "60-40 Layout"
                        : ""
                    }`}</p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {open && (
          <TemplateModal open={open} setOpen={setOpen} template={template} />
        )}
      </div>
    </>
  );
}
