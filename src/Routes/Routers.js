import { Route, Routes } from "react-router-dom";
import SignIn from "../Layout/Authboard/SignIn";
import Dashboard from "../Layout/Adminboard/Dashboard/Dashboard";
// import HomePage from "../Layout/Adminboard/LandingPage/landingPage";
import Profile from "../Layout/Adminboard/Profile/Profile";
import Builder from "../Layout/Adminboard/Builder/Builder";
import TwoColumnLayout from "../Components/Template/TemplateLayouts/MultiColumnLayout/TwoColumnLayout";
import SingleColumnLayout from "../Components/Template/TemplateLayouts/SingleColumnLayout/SingleColumnTemplate";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/dashboard">
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="/team">
        <Route
          index
          element={
            <Dashboard>
              <Profile />
            </Dashboard>
          }
        />

        {/* <Route path="add-package" element={<AddPackage />} />
          <Route path="edit-package/:packageId" element={<AddPackage />} /> */}
      </Route>
      <Route path="/projects">
        <Route
          index
          element={
            <Dashboard>
              <Builder />
            </Dashboard>
          }
        />
        <Route path="multi-column" element={<TwoColumnLayout />} />
        <Route path="single-column" element={<SingleColumnLayout />} />
      </Route>
      <Route
        path="/builder"
        element={
          <Dashboard>
            <Builder />
          </Dashboard>
        }
      />
      <Route
        path="/profile"
        element={
          <Dashboard>
            <Profile />
          </Dashboard>
        }
      />
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
