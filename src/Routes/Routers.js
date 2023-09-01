import { Route, Routes } from "react-router-dom";
import SignIn from "../Layout/Authboard/SignIn";
import Dashboard from "../Layout/Adminboard/Dashboard/Dashboard";
// import HomePage from "../Layout/Adminboard/LandingPage/landingPage";
import Profile from "../Layout/Adminboard/Profile/Profile";
import Builder from "../Layout/Adminboard/Builder/Builder";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/dashboard">
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="/team">
        <Route index element={<Profile />} />

        {/* <Route path="add-package" element={<AddPackage />} />
          <Route path="edit-package/:packageId" element={<AddPackage />} /> */}
      </Route>
      <Route path="/projects">
        <Route index element={<Builder />} />
        {/* <Route path="add-truck" element={<AddTruck />} />
          <Route path="edit-truck/:truckId" element={<AddTruck />} /> */}
      </Route>
      <Route path="/builder" element={<Builder />} />
      <Route path="/profile" element={<Profile />} />
      <Route
        path="*"
        element={
          <>
            <h2>You Are Lost</h2>
          </>
        }
      />
    </Routes>
  );
}
