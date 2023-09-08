/* eslint-disable jsx-a11y/img-redundant-alt */
import { Templates } from "../../../Components/Template/TemplateLayouts/Templates";
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
      <div className="text-center">
        <h2>Choose Templates</h2>
        <div className="flex  flex-wrap justify-center gap-4 mt-5">
          {Templates.map((template, key) => (
            <button
              key={key}
              onClick={() => {
                handleSelect(template);
                localStorage.setItem("template-id", template.id);
              }}
            >
              {template.template}
            </button>
            // </Link>
          ))}
        </div>
      </div>
      {open && (
        <TemplateModal open={open} setOpen={setOpen} template={template} />
      )}
    </>
  );
}
