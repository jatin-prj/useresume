import { Route, Routes } from "react-router-dom";
import SignIn from "../Layout/Authboard/SignIn";
import Dashboard from "../Layout/Adminboard/Dashboard/Dashboard";
import { Suspense, lazy } from "react";
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
  return (
    <Suspense fallback={"Loading......"}>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard">
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/team">
          <Route index element={<Profile />} />
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
            path=":page/info"
            element={
              <MainSection>
                <InfoSection />
              </MainSection>
            }
          />
          <Route
            path=":page/contactform"
            element={
              <MainSection>
                <ContactForm />
              </MainSection>
            }
          />
          <Route
            path=":page/aboutform"
            element={
              <MainSection>
                <AboutMeForm />
              </MainSection>
            }
          />
          <Route
            path=":page/educationform"
            element={
              <MainSection>
                <EducationForm />
              </MainSection>
            }
          />
          <Route
            path=":page/experienceform"
            element={
              <MainSection>
                <ExperienceForm />
              </MainSection>
            }
          />
          <Route
            path=":page/projectform"
            element={
              <MainSection>
                <ProjectForm />
              </MainSection>
            }
          />
          <Route
            path=":page/skillform"
            element={
              <MainSection>
                <SkillsForm />
              </MainSection>
            }
          />
          <Route path="multi-column" element={<TwoColumnLayout />} />
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
