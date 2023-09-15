import ContentBody from "../../../Components/ContentBody/ContentBody";
import Navbar from "../../../Components/Navbar/Navbar";
// import Sidebar from "../../../Components/Sidebar/Sidebar";

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
