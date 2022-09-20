import React, { Fragment } from "react";

import Styles from "./android_app.module.css";
import realEstate from "../../img/real-estate.png";
import tourTravels from "../../img/tour-travels.png";
import education from "../../img/education.png";
import transport from "../../img/transport.png";
import events from "../../img/events.png";
import eCommerce from "../../img/ecommmerce.png";
import game from "../../img/game.png";
import healthcare from "../../img/healthcare.png";
import finance from "../../img/finance.png";
import restaurant from "../../img/restaurant.png";
import onDemand from "../../img/on-demand.png";
import grocery from "../../img/grocery.png";
import jewelry from "../../img/jewelry.png";
import automobile from "../../img/automobile.png";
import fitnessCenter from "../../img/fitness-center.png";
import blob from "../../img/shape/blob.png";
import samsung from "../../img/samsung.png";
import mobile from "../../img/getafixapp.png";

import swift from "../../img/swift.png";
import object from "../../img/object.png";
import xCode from "../../img/x-code.png";
import { NavLink } from "react-router-dom";

const IPhoneAppDevelopment = () => {
  return (
    <Fragment>
     
      {/*top page header starts here */}
      <section className={Styles.page_header_container}>
        <div className={Styles.page_header}>
          <div className={Styles.main_heading}>
            <h1>Top Android Application Development Company</h1>

            <p className={Styles.lead}>
              SkyWalk Technology is a top android app development company that
              offers scalable android development solutions across verticals. We
              welcome you with your Android app ideas and promise to help to
              renovate your ideas in new inventions that will stand out from the
              competition.
            </p>
          </div>
        </div>
      </section>

      {/* feature section  */}
      <section className={Styles.android_feature_section}>
        <div className={Styles.android_feature_wrapper}>
          <div className={Styles.android_feature_heading}>
            <h2>Android App Development Service Provider</h2>
          </div>
          <div className={Styles.android_feature_content}>
            <div className={Styles.left}>
              <img src={samsung} alt="android design image" />
            </div>
            <div className={Styles.right}>
              <p>
                Skywalk offers services for creating Android apps for
                businesses, SMBs, and startups. For the complete range of
                Android devices, our highly qualified Android app developers
                have years of expertise creating mobile apps that are unique,
                stable, functional, and futuristic.
              </p>

              <strong
                style={{ color: "#071c4d" }}
                className={Styles.our_services}
              >
                Notable Android app development services Include:
              </strong>
              <ul>
                <li>Custom Android App Development</li>
                <li>Android UI/UX Designing</li>
                <li>Android Web-Based Apps</li>
                <li>Android App Porting</li>
                <li>Android App Testing</li>
                <li>Android App Consultation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* iphone testimonial section starts here */}
      <section className={Styles.android_testimonial_section}>
        <div className={Styles.android_testimonial_wrapper}>
          <div className={Styles.android_testimonial_heading}>
            <h3>Testimonial</h3>
            <h2>SkyWalk Technology Approach For Android App Development</h2>
            <p>
              Our Android application development strategy is built around a
              mixture of approaches that allow a business to cover all your
              requirements while optimizing the time and cost of delivering an
              app. Here are the two key approaches our Android app developers
              deploy during the app development process.
            </p>
          </div>
          <div className={Styles.integrations_wrapper}>
            <div className={Styles.integration}>
              <div className={Styles.tool_stack}>
                <NavLink className={Styles.link} to="#">
                  <span>
                    {" "}
                    <img src={swift} alt="swift logo" />
                  </span>
                  <span>
                    {" "}
                    <img src={object} alt="object image" />
                  </span>
                  <span>
                    {" "}
                    <img src={xCode} alt="swift logo" />
                  </span>
                </NavLink>
              </div>
              <div className={Styles.content}>
                <NavLink to="#">
                  <h2>Native Android App Development</h2>
                </NavLink>
                <p>
                  Native Android apps are specific to the Android platform using
                  the development tools and language that Android supports. For
                  e.g., Java, C++, and C-Code. Native apps look and perform the
                  best due to adequate access to the device’s hardware and
                  Android-specific features
                </p>
              </div>
            </div>
            <div className={Styles.integration}>
              <div className={Styles.tool_stack}>
                <NavLink className={Styles.link} to="#">
                  <span>
                    {" "}
                    <img src={swift} alt="swift logo" />
                  </span>
                  <span>
                    {" "}
                    <img src={object} alt="object image" />
                  </span>
                  <span>
                    {" "}
                    <img src={xCode} alt="swift logo" />
                  </span>
                </NavLink>
              </div>
              <div className={Styles.content}>
                <NavLink to="#">
                  <h2>Hybrid Android App Development</h2>
                </NavLink>
                <p>
                  Hybrid Android apps are developed using standard web
                  technologies like HTML5, CSS, JavaScript and React Native. The
                  final code is wrapped in a native container and shipped as a
                  regular app. The hybrid approach is often called “Write Once
                  Run Anywhere,” as the same code can serve multiple platforms
                  along with iOS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* feature section  */}
      {/* here we havenot used any differnt class , just copied the template used above and styled using inline styling method. just for the sake of code reusibility */}
      <section className={Styles.android_feature_section}>
        <div className={Styles.android_feature_wrapper}>
          <div className={Styles.android_feature_heading}>
            <h2>We provide specialized Android app development services for all platforms
</h2>
          </div>
          <div
            className={Styles.android_feature_content}
            style={{ width: "100%", display: "block" }}
          >
            {/* <div className={Styles.left}>
                            <img src={samsung} alt="android design image" />
                        </div> */}
            <div className={Styles.right}>
              <p>
                At SkyWalk Technology, we believe in delivering what's best.
                With our substantial success rate, we have gained recognition as
                the best Android app development company all over the world. Our
                highly experienced team of mobile app developers ensures
                perfection when it comes to developing Android apps. We make
                sure to fulfill our client’s requirements by offering the best
                possible app solutions to them. We first dive into intensive
                research about our client’s company and their agenda, so that
                the app rightly contributes to their business growth. We develop
                apps of various domains and deliver the best output in every
                field.
              </p>

              <h2
                style={{ color: "#071c4d", fontSize: "2rem" }}
                className={Styles.our_services}
              >
                Android App Development Services Includes
              </h2>
              <ul>
                <li>
                  <strong>Planning and Ideation : </strong>Our mobile app
                  development team will first become acquainted with your
                  project idea and its goals. We will design each page with a
                  smooth flow after honing the strategy and putting together a
                  thorough understanding.
                </li>

                <li>
                  <strong>Design And Development : </strong>The design of the app is the next phase. To create a visually appealing app, we will add images, icons, and functions in this stage. As part of our android development services, we will also create the app at this point by including the necessary server-side components and features.
                </li>

                <li>
                  <strong>Testing And QA: </strong>At this point, our testing team will examine the app for faults and make the required adjustments to guarantee that it functions properly. All faults will be fixed and the software will receive its final polish.
                </li>

                <li>
                  <strong>App Deployment: </strong>This is the last step! The application will be made available in the Play Store. Now that your clients can download the app, you can provide a successful return on investment.

                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* industries we work with */}

      <section
        style={{ backgroundImage: `url(${blob})` }}
        className={Styles.industries_work_section}
      >
        <div className={Styles.industry_work_wrapper}>
          <div className={Styles.industry_heading}>
            <h3>Industries We work with</h3>
            <p>
              Regardless of whether you need an app for banking & finance,
              healthcare, online food delivery, or gaming domain, we always keep
              up with you by delivering the best mobile application services and
              by adjoining your dreams with reality.
            </p>
          </div>
          <div className={Styles.deals_with_cont}>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.field}
            >
              <img src={realEstate} alt="Real estate" />
              <h6>Real Estate</h6>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.field}
            >
              <img src={tourTravels} alt="Real estate" />
              <h6>Tour & Travels</h6>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.field}
            >
              <img src={transport} alt="Real estate" />
              <h6>Transport</h6>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.field}
            >
              <img src={events} alt="Real estate" />
              <h6>Events</h6>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.field}
            >
              <img src={eCommerce} alt="Real estate" />
              <h6>Ecommerce</h6>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.field}
            >
              <img src={game} alt="Real estate" />
              <h6>Game</h6>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.field}
            >
              <img src={healthcare} alt="Real estate" />
              <h6>Health Care</h6>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.field}
            >
              <img src={finance} alt="Real estate" />
              <h6>Finance</h6>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.field}
            >
              <img src={restaurant} alt="Real estate" />
              <h6>Restraunt</h6>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.field}
            >
              <img src={onDemand} alt="Real estate" />
              <h6>On-Demand</h6>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.field}
            >
              <img src={grocery} alt="Real estate" />
              <h6>Grocery</h6>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.field}
            >
              <img src={jewelry} alt="Real estate" />
              <h6>Jwelery</h6>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.field}
            >
              <img src={education} alt="Real estate" />
              <h6>Education</h6>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.field}
            >
              <img src={automobile} alt="Real estate" />
              <h6>Automobile</h6>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.field}
            >
              <img src={fitnessCenter} alt="Real estate" />
              <h6>Fitness Center</h6>
            </div>
          </div>
        </div>
      </section>

      {/* Best iphone apps by skywalk */}
      <div className={Styles.apps_container}>
        <div className={Styles.apps_content_wrapper}>
          <div className={Styles.heading}>
            <h2>
            Our Android App Development Process

            </h2>
            <p>Explore Our Developed Apps Here</p>
          </div>
          <div className={Styles.apps_content_cont}>
            <div className={Styles.left_cont}>
              <img src={mobile} alt="mobile" />
            </div>
            <div className={Styles.right_cont}>
              {/* <div className={Styles.tree_icon_cont}>
                <span>
                  <RiNodeTree className={Styles.icon} />
                </span>
              </div> */}
              <div className={Styles.marketing_content}>
                <h2>Process of Android App Development</h2>
                <ul>
                    <li><strong>Analysis of Requirements:</strong>We talk about your project concept and specifications to determine exactly what you desire.</li>
                    <li><strong>Prototypes + Feedback:</strong>We design processes and mockups that are ideal for giving you an app-like experience.</li>
                    <li><strong>Coding & Testing:</strong>We work with talented programmers and testers who provide an app free of bugs.</li>
                    <li><strong>Release Testing:</strong>To make sure your app functions flawlessly, we keep track of all reports.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default IPhoneAppDevelopment;
