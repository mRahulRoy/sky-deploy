import React, { Fragment,useEffect,Suspense,lazy } from "react";
import "./app.css"
import aos from "aos"
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route,useLocation } from "react-router-dom";
import Header from "./components/Header/Header.js";

import Footer from "./components/Footer/Footer.js"
import Homepage from "./components/HomePage/HomePage.js";
import Loader from "./components/Loader/Loader.js"

// pages import
import CompanyProfile from "./Pages/Company Profile/CompanyProfile.js"
import Certifications from "./Pages/Certifications/Certifications";

import WebDesign from "./Pages/Web Design/WebDesign";
import WebDevlopment from "./Pages/Web Development/WebDevlopment";
import Angular from "./Pages/Angular Js/Angular";
import JavaDevelopment from "./Pages/Java Development/JavaDevelopment.js";
import PhpDevelopment from "./Pages/Php Development/PhpDevelopment.js";
import IphoneAppDevelopment from "./Pages/iPhone App Development/IPhoneAppDevelopment.js";
import AndroidAppDevelopment from "./Pages/Android App Development/AndroidAppDevelopment.js";
import FlutterAppDevelopment from "./Pages/Flutter App Development/FlutterAppDevelopment.js";
import BlockChainDevelopment from "./Pages/Blockchain App Development/BlockchainDevelopment";
import MobileGameDevelopment from "./Pages/Mobile Game Development company/MobileGameDevelopment";
import WearableAppDevelopment from "./Pages/Wearable App Development/WearableAppDevelopment.js"
import DigitalMarketingPage from "./Pages/Digital Marketing/DigitalMarketing.js"
import SearchEngineOptimization from "./Pages/Search Engine Optimization/SearchEngineOptimization";
import SocialMediaMarketing from "./Pages/Social Media Marketing/SocialMediaMarketing";

import ContentMarketing from "./Pages/Content marketing/ContentMarketing";
import PayPerClick from "./Pages/Pay Per click Page/PayPerClick";
import EcommerceWebsiteDev from "./Pages/Ecommerce Website Development/EcommerceWebsiteDev";
import Portfolio from "./Pages/Portfolio/Portfolio";
import CaseStudy from "./Pages/Case Study/CaseStudy";
import ContactUs from "./Pages/Contact Us/ContactUs";
import SubsPopup from "./components/Subscribe Popup/SubsPopup";
import ScrollToTop from "./ScrollToTop";
import ScrollToTopBtn from "./components/Scroll/ScrollToTopBtn";
import Career from "./Pages/Carrier/Career";
import LazySpinner from "./components/lazy Spinner/LazySpinner";





function App() {





  // Initialised Aos Here
  useEffect(() => {

    aos.init({
      duration: 1000
    });
  }, []);


  return (
    <Fragment>
      <Router>

        
        {/* This component helps in scrolling or reaching at the top of each page when route changes. */}
        <ScrollToTop/>
        <Header />
        {/* This compnent helps in reaching on top by using a click . */}
        <ScrollToTopBtn/>
        <SubsPopup/>
        


         
        <Routes>
          {/* Importing Routes */}
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/companyprofile" element={<CompanyProfile />} />
          <Route exact path="/certifications" element={<Certifications />} />
          <Route exact path="/web-design" element={<WebDesign />} />
          <Route exact path="/web-development" element={<WebDevlopment />} />
          <Route exact path="/angularjs" element={<Angular />} />
          <Route exact path="/java-development" element={<JavaDevelopment />} />
          <Route exact path="/php-development" element={<PhpDevelopment />} />
          <Route exact path="/iphone-app-development" element={<IphoneAppDevelopment />} />
          <Route exact path="/android-app-development" element={<AndroidAppDevelopment />} />
          <Route exact path="/flutter-app-development" element={<FlutterAppDevelopment />} />
          <Route exact path="/blockchain-app-development" element={<BlockChainDevelopment />} />
          <Route exact path="/mobile-game-app-development" element={<MobileGameDevelopment />} />
          <Route exact path="/wearable-app-development" element={<WearableAppDevelopment />} />
          <Route exact path="/digital-marketing" element={<DigitalMarketingPage />} />
          <Route exact path="/search-engine-optimazation" element={<SearchEngineOptimization />} />
          <Route exact path="/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route exact path="/content-marketing" element={<ContentMarketing />} />
          <Route exact path="/pay-per-click" element={<PayPerClick />} />
          <Route exact path="/ecommerce-website-development" element={<EcommerceWebsiteDev />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/casestudy" element={<CaseStudy />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/career" element={<Career />} />
          <Route exact path="/lazy" element={<LazySpinner />} />

       
          


          {/* 4o4 page go here */}
          <Route exact path="/*" element={<Loader />} />
        </Routes>
       
        <Footer />
      </Router>
    </Fragment>
  )
}

export default App;
