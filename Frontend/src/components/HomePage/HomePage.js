import react, { Fragment, lazy, Suspense } from "react";

// import Services from "../Services/Services.js";
import Awards from "../Awards/Awards.js";
// import About from "../About Us/About.js"
import Marketing from "../Marketing/Marketing.js";
import DigitalMarket from "../Digital Marketing/DigitalMarket.js";
import WhySkyWalk from "../Why Skywalk/WhySkyWalk.js";
import PaymentOptions from "../Payment Options/PaymentOptions.js";
import ServiceTeam from "../Service Team/ServiceTeam.js";

import LazySpinner from "../lazy Spinner/LazySpinner.js";

const Banner = lazy(() => import("../Banner/Banner.js"));
const About = lazy(() => import("../About Us/About.js"));
const Services = lazy(() => import("../Services/Services.js"));

const Homepage = () => {
  return (
    <Fragment>
      <Suspense fallback={<LazySpinner />}>
        <Banner />
      </Suspense>
      
      <Suspense fallback={<LazySpinner />}>
        <Services />
      </Suspense>

      <Awards />
      <Suspense fallback={<LazySpinner />}>
        <About />
      </Suspense>
      <Marketing />
      <DigitalMarket />
      <WhySkyWalk />
      <PaymentOptions />
      <ServiceTeam />
    </Fragment>
  );
};
export default Homepage;
