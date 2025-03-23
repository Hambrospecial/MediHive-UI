import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import CallToAction from "./CallToAction";
import Footer from "./Footer";
import SignUpPage from "../sign_up_page/SignUpPage";
import "../../styles/general.css";
import LoginPage from "../login_page/LoginPage";
import AboutPage from "../about_page/AboutPage";
import ContactPage from "../contact_page/ContactPage";
import FeaturesPage from "../feature_page/FeaturesPage";

function LandingPage() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <FeaturesSection />
                <CallToAction />
              </>
            }
          />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/features" element={<FeaturesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default LandingPage;