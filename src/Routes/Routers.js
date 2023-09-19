/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import SignIn from "../Layout/Authboard/SignIn";
import Dashboard from "../Layout/Adminboard/Dashboard/Dashboard";
import { Suspense, lazy } from "react";
import HomePage from "../Layout/Adminboard/LandingPage/HomePage";
import Template3 from "../Components/Template/TemplateLayouts/Template3";
import Template2 from "../Components/Template/TemplateLayouts/Template2";
// import HomePage from "../Layout/Adminboard/LandingPage/landingPage";
const Profile = lazy(() => import("../Layout/Adminboard/Profile/Profile"));
const InfoSection = lazy(() => import("../Components/DataForm/InfoSection"));
const MainSection = lazy(() => import("../Components/DataForm/MainSection"));
const ExperienceForm = lazy(() =>
  import("../Components/DataForm/ExperienceForm")
);
const EducationForm = lazy(() =>
  import("../Components/DataForm/EducationForm")
);
const SkillsForm = lazy(() => import("../Components/DataForm/SkillsForm"));
const ProjectForm = lazy(() => import("../Components/DataForm/ProjectForm"));
const AboutMeForm = lazy(() => import("../Components/DataForm/AboutMeForm"));
const ContactForm = lazy(() => import("../Components/DataForm/ContactForm"));
const Builder = lazy(() => import("../Layout/Adminboard/Builder/Builder"));
const TemplatePreview = lazy(() =>
  import("../Components/Template/TemplatePreview/TemplatePreview")
);
const SingleColumnTemplate = lazy(() =>
  import(
    "../Components/Template/TemplateLayouts/SingleColumnLayout/SingleColumnTemplate"
  )
);
const TwoColumnLayout = lazy(() =>
  import(
    "../Components/Template/TemplateLayouts/MultiColumnLayout/TwoColumnLayout"
  )
);

export default function Routers() {
  const templateId = localStorage.getItem("template-id");
  return (
    <Suspense fallback={"Loading......"}>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Dashboard>
              <HomePage />
            </Dashboard>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard">
          <Route
            index
            element={
              <Dashboard>
                <HomePage />
              </Dashboard>
            }
          />
        </Route>
        <Route path="/team">
          <Route
            index
            element={
              <Dashboard>
                <Template2 />
              </Dashboard>
            }
          />
        </Route>
        <Route path="/templates">
          <Route
            index
            element={
              <Dashboard>
                <Builder />
              </Dashboard>
            }
          />
          <Route
            path="info"
            element={
              <MainSection>
                <InfoSection />
              </MainSection>
            }
          />
          <Route
            path="contactform"
            element={
              <MainSection>
                <ContactForm />
              </MainSection>
            }
          />
          <Route
            path="aboutform"
            element={
              <MainSection>
                <AboutMeForm />
              </MainSection>
            }
          />
          <Route
            path="educationform"
            element={
              <MainSection>
                <EducationForm />
              </MainSection>
            }
          />
          <Route
            path="experienceform"
            element={
              <MainSection>
                <ExperienceForm />
              </MainSection>
            }
          />
          <Route
            path="projectform"
            element={
              <MainSection>
                <ProjectForm />
              </MainSection>
            }
          />
          <Route
            path="skillform"
            element={
              <MainSection>
                <SkillsForm />
              </MainSection>
            }
          />
          <Route
            path={`:id/preview`}
            element={<TemplatePreview />}
            // element={<Template1 />}
          />
          <Route path="single-column" element={<SingleColumnTemplate />} />
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
    </Suspense>
  );
}
