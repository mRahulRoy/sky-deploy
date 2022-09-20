import React, { Fragment } from "react";

import Styles from "./angular.module.css";
// image imports
import web_design from "../../img/webdevelopmentcompany.png";
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
import angularjs from "../../img/angular1.png";

//
import factors from "../../img/factors.png";

import { RiNodeTree } from "react-icons/ri";
import { BsBezier, BsTruck } from "react-icons/bs";
import { BiLayer } from "react-icons/bi";
const Angular = () => {
  return (
    <Fragment>
      {/*top page header starts here */}
      <section className={Styles.page_header_container}>
        <div className={Styles.page_header}>
          <div className={Styles.main_heading}>
            <h1>AngularJS Development Company</h1>
            {/* <h3>Best And Renowned AngularJS Developers</h3> */}
            <p className={Styles.lead}>
              SkyWalk Technology is the best offshore AngularJS development
              company in India, USA and UAE focused on providing angularJS
              development services for clients across the globe. SkyWalk
              Technology is developing web apps by leveraging the potential of
              Angular and has successfully developed web apps for varied
              industries with complex requirements. To make sure you stay ahead
              in the market, we use the best Angular tools and features for your
              project.
            </p>
          </div>
        </div>
      </section>

      {/* feature section  */}
      <section className={Styles.web_feature_section}>
        <div className={Styles.web_feature_wrapper}>
          <div className={Styles.web_feature_heading}>
            <h2>Features Skywalk Provides You For AngularJS</h2>
            <p>
              Angular has the following key features which makes it one of the
              powerful frameworks in the market:
            </p>
          </div>
          <div className={Styles.web_feature_content}>
            <div className={Styles.left}>
              <img src={angularjs} alt="web design image" />
            </div>
            <div className={Styles.right}>
              <p>
                MVC The framework is based on the well-known MVC idea
                (Model-View-Controller). Today's online apps employ this design
                pattern consistently. This design pattern is built on segmenting
                the display layer, the data layer, and the business logic layer.
                The divide is made into many portions to make it easier to
                manage each one separately.
                <br />
                Data Model Binding –You don’t need to write special code to bind
                data to the HTML controls. This can be done by Angular by just
                adding a few snippets of code.
                <br />
                Writing less code Designing any programme involves writing a lot
                of JavaScript when doing DOM manipulation. But with Angular,
                you'll be astounded by how little code is required for DOM
                manipulation.
                <br />
                Unit Testing ready- The designers at Google not only developed
                Angular but also developed a testing framework called “Karma”
                which helps in designing unit tests for AngularJS applications.
              </p>

              <strong
                style={{ color: "#071c4d" }}
                className={Styles.our_services}
              >
                AngularJS services we deal into:
              </strong>
              <ul>
                <li>AngularJS Customization</li>
                <li>Web Application Development</li>
                <li>Plugin Development</li>
                <li>AngularJS Portal Development</li>
                <li>AngularJS eCommerce Development</li>
                <li>Website Speed Optimization</li>
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

      {/* why Angular section starts here*/}
      <section className={Styles.why_angular_section}>
        <div className={Styles.why_angular_container}>
          <div className={Styles.content_wrapper}>
            <div className={Styles.angular_heading}>
              <h3>Process</h3>
              <h2>Why Chose AngularJS For Development Purpose?</h2>
              <p>
                Angular JS is powered by Google and is the preferred choice of
                our developers because of its various benefits. It is easy to
                access, integrates the architecture of MVVM, and MVC models.
                Here are some of the benefits of AngulrJS that you need to know:
              </p>
            </div>
            <div className={Styles.content_section}>
              <div className={Styles.images_section}>
                <img src={factors} alt="contraction image" />
              </div>
              <div className={Styles.text_content_cont}>
                <div className={Styles.tree_structure}>
                  <div className={Styles.timeline_icon}>
                    <RiNodeTree className={Styles.ic} />
                  </div>
                  <div className={Styles.line}></div>
                  <div className={Styles.timeline_icon}>
                    <BsBezier className={Styles.ic} />
                  </div>
                  <div className={Styles.line}></div>
                  <div className={Styles.timeline_icon}>
                    <BiLayer className={Styles.ic} />
                  </div>
                  <div className={Styles.line}></div>
                  <div className={Styles.timeline_icon}>
                    <BsTruck className={Styles.ic} />
                  </div>
                </div>
                <div className={Styles.text_cont}>
                  <div>
                    <h2>Declarative User Interface :</h2>
                    <p> It has a user-friendly interface defined by HTML.</p>
                  </div>
                  <div>
                    <h2>Unit Testing :</h2>
                    <p>
                      Angular JS is linked together by (DI) Dependency
                      Injection.
                    </p>
                  </div>
                  <div>
                    <h2>Powerful Code</h2>
                    <p>
                      Our codes are lightweight, yet they manage to be powerful
                      enough to break the stereotypes of lightweight codes.
                    </p>
                  </div>
                  <div>
                    <h2>Bug-Free Applications</h2>
                    <p>
                      After releasing the app, we make sure to update it and
                      keep a tab on the community built around it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Angular;
