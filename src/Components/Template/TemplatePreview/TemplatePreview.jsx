import { useLocation } from "react-router-dom";
import Template1 from "../TemplateLayouts/Template1";
import Template2 from "../TemplateLayouts/Template2";
import Template3 from "../TemplateLayouts/Template3";
import Template4 from "../TemplateLayouts/Template4";

export default function TemplatePreview({ templateId }) {
  const location = useLocation();
  return (
    <>
      {location.pathname.includes("template-1") ? (
        <Template1 />
      ) : location.pathname.includes("template-2") ? (
        <Template2 />
      ) : location.pathname.includes("template-3") ? (
        <Template3 />
      ) : location.pathname.includes("template-4") ? (
        <Template4 />
      ) : (
        ""
      )}
    </>
  );
}
