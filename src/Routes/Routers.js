/* eslint-disable no-unused-vars */
import SignUp from "Layout/Authboard/SignUp";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Builder = lazy(() => import("Layout/Adminboard/Builder/Builder"));
const Dashboard = lazy(() => import("Layout/Adminboard/Dashboard/Dashboard"));
const HomePage = lazy(() => import("Layout/Adminboard/LandingPage/HomePage"));
const Profile = lazy(() => import("Layout/Adminboard/Profile/Profile"));
const Team = lazy(() => import("Layout/Adminboard/Team/Team"));
const SignIn = lazy(() => import("Layout/Authboard/SignIn"));
const AboutMeForm = lazy(() => import("Components/DataForm/AboutMeForm"));
const ContactForm = lazy(() => import("Components/DataForm/ContactForm"));
const EducationForm = lazy(() => import("Components/DataForm/EducationForm"));
const ExperienceForm = lazy(() => import("Components/DataForm/ExperienceForm"));
const InfoSection = lazy(() => import("Components/DataForm/InfoSection"));
const MainSection = lazy(() => import("Components/DataForm/MainSection"));
const ProjectForm = lazy(() => import("Components/DataForm/ProjectForm"));
const SkillsForm = lazy(() => import("Components/DataForm/SkillsForm"));
const LostServer = lazy(() => import("Components/Error/LostServer"));
const Loader = lazy(() => import("Components/Loader/Loader"));
const TemplatePreview = lazy(() =>
  import("Components/Template/TemplatePreview/TemplatePreview")
);
export default function Routers() {
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
        <Route path="/signup" element={<SignUp />} />
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
          <Route
            path={`preview/:id/edit-section`}
            element={
              <Dashboard>
                <TemplatePreview />
              </Dashboard>
            }
          />
        </Route>

        <Route path="/builder" element={<Builder />} />
        <Route
          path="/profile"
          element={
            <Dashboard>
              <Profile />
            </Dashboard>
          }
        />

        <Route path="*" element={<LostServer />} />
      </Routes>
    </Suspense>
  );
}
