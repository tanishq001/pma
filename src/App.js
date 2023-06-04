import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation, Outlet } from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/contact-us/Contact";
import Dashboard from "./components/dashboard/user/Dashboard";
import Education from "./components/dashboard/user/profile/Education";
import Documents from "./components/dashboard/user/Documents";
import Recommendations from "./components/dashboard/user/Recommendations";
import { AuthProvider } from "./context/AuthProvider";
import Topic from "./components/dashboard/user/Topic";
const Explore = lazy(() => import("./components/explore_university/Explore"));
const Profile = lazy(() => import("./components/dashboard/user/Profile"));
const Pricing = lazy(() => import("./components/pricing/Pricing"));
const Terms = lazy(() => import("./components/privacy-policy/Terms"));
const Privacy = lazy(() => import("./components/privacy-policy/Privacy"));
const HowItWorks = lazy(() => import("./components/how-it-works/HowItWorks"));
const Register = lazy(() => import("./components/dashboard/register/Register"));
const NotFound = lazy(() => import("./higherOrderComponents/404"));
const GoToTop = lazy(() => import("./higherOrderComponents/GoToTop"));
const About = lazy(() => import("./components/aboutUs/About"));
const Login = lazy(() => import("./components/dashboard/login/Login"));
const Institutions = lazy(() =>
  import("./components/forInstitutions/Institutions")
);
const NavBar = lazy(() => import("./higherOrderComponents/NavBar"));
const Footer = lazy(() => import("./higherOrderComponents/Footer"));

const ScrollToTopOnMount = () => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
  return null;
};

const App = () => {
  ScrollToTopOnMount();
  return (
    <AuthProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <GoToTop />
        <Routes>
          <Route path="/">
            <Route index path="/" element={<Home />} />
            <Route index path="home" element={<Home />} />
            <Route exact path="contact" element={<Contact />} />
            <Route exact path="about" element={<About />} />
            <Route exact path="pricing" element={<Pricing />} />
            <Route exact path="for-institutions" element={<Institutions />} />
            <Route exact path="terms&conditions" element={<Terms />} />
            <Route exact path="privacy-policy" element={<Privacy />} />
            <Route exact path="how-it-works" element={<HowItWorks />} />
            <Route exact path="login" element={<Login />} />
            <Route exact path="register" element={<Register />} />
            <Route exact path="explore" element={<Explore />} />
            <Route path="dashboard" element={<Dashboard />}>
              {/* <Route index path="dashboard" element={<Dashboard />} />
              <Route exact path="profile" element={<Profile />} />
              <Route exact path="documents" element={<Documents />} />
              <Route
                exact
                path="recommendations"
                element={<Recommendations />}
              /> */}
              <Route path=":topic_url" element={<Topic />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Outlet />
      </Suspense>
    </AuthProvider>
  );
};

export default App;
