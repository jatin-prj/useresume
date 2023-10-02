import { lazy } from "react";

const ContentBody = lazy(() => import("Components/ContentBody/ContentBody"));
const Navbar = lazy(() => import("Components/Navbar/Navbar"));

export default function Dashboard({ children }) {
  return (
    <>
      <Navbar />
      {/* <Sidebar /> */}
      <div className="relative top-[3rem] h-auto">
        <ContentBody>{children}</ContentBody>
      </div>
    </>
  );
}
