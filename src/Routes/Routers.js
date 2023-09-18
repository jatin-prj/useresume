/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import SignIn from "../Layout/Authboard/SignIn";
import Dashboard from "../Layout/Adminboard/Dashboard/Dashboard";
import { Suspense, lazy } from "react";
import HomePage from "../Layout/Adminboard/LandingPage/HomePage";
import Team from "../Layout/Adminboard/Team/Team";
import Loader from "../Components/Loader/Loader";
import Navbar from "../Components/Navbar/Navbar";
const LostPage = lazy(() => import("../Components/Error/LostServer"));
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

export default function Routers() {
  const templateId = localStorage.getItem("template-id");
  return (
    <Suspense
      fallback={
        <div
          className="relative h-screen flex justify-center items-center
        "
        >
          <Loader />
        </div>
      }
    >
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
                <Team />
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
              <Dashboard>
                <MainSection>
                  <InfoSection />
                </MainSection>
              </Dashboard>
            }
          />
          <Route
            path="contactform"
            element={
              <Dashboard>
                <MainSection>
                  <ContactForm />
                </MainSection>
              </Dashboard>
            }
          />
          <Route
            path="aboutform"
            element={
              <Dashboard>
                <MainSection>
                  <AboutMeForm />
                </MainSection>
              </Dashboard>
            }
          />
          <Route
            path="educationform"
            element={
              <Dashboard>
                <MainSection>
                  <EducationForm />
                </MainSection>
              </Dashboard>
            }
          />
          <Route
            path="experienceform"
            element={
              <Dashboard>
                <MainSection>
                  <ExperienceForm />
                </MainSection>
              </Dashboard>
            }
          />
          <Route
            path="projectform"
            element={
              <Dashboard>
                <MainSection>
                  <ProjectForm />
                </MainSection>
              </Dashboard>
            }
          />
          <Route
            path="skillform"
            element={
              <Dashboard>
                <MainSection>
                  <SkillsForm />
                </MainSection>
              </Dashboard>
            }
          />
          <Route
            path={`preview/:id`}
            element={
              <Dashboard>
                <TemplatePreview />
              </Dashboard>
            }
            // element={<Template1 />}
          />
          {/* <Route path="single-column" element={<SingleColumnTemplate />} /> */}
        </Route>

        <Route path="/builder" element={<Builder />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<LostPage />} />
      </Routes>
    </Suspense>
  );
}
