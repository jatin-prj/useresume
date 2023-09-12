/* eslint-disable jsx-a11y/img-redundant-alt */
import { Templates } from "../../../Components/Template/TemplateLayouts/TemplateOptions";
import TemplateModal from "../../../Components/Template/TemplateLayouts/TemplateModal.jsx/TemplateModal";
import { useState } from "react";
export default function Builder() {
  const [open, setOpen] = useState(false);
  const [template, setTemplate] = useState();
  const handleSelect = (template) => {
    setOpen(true);
    setTemplate(template);
  };
  console.log(">>>>>>>>>>>>>...", template);

  return (
    <>
      <div className="container text-center pt-3">
        <h2>Choose Templates</h2>
        <div className="flex w- justify-center gap-4 mt-5">
          {Templates.map((template, index) => (
            <div
              key={index}
              className="w-40 transition duration-250 hover:scale-125 "
            >
              <button
                onClick={() => {
                  handleSelect(template);
                  localStorage.setItem("template-id", template.id);
                }}
              >
                {template.template}
              </button>
            </div>
          ))}
        </div>
      </div>
      {open && (
        <TemplateModal open={open} setOpen={setOpen} template={template} />
      )}
    </>
  );
}
