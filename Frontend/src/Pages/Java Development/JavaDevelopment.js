import React, { Fragment } from "react";

import Styles from "./java_development.module.css";

// image imports
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
import java1 from "../../img/java1.png";
import javaCircleImg from "../../img/circle.png";
import whyjava from "../../img/why_java.png";


const JavaDevelopment = () => {
  return (
    <Fragment>
       
      {/*top page header starts here */}
      <section className={Styles.page_header_container}>
        <div className={Styles.page_header}>
          <div className={Styles.main_heading}>
            <h1>Top Java/J2EE Software Development Company</h1>

            <p className={Styles.lead}>
              SkyWalk Technology is the top web and mobile design and
              development company that offers scalable web designing solutions
              across the verticals. Being the most popular programming language
              for Android smartphone apps and most favored for edge device and
              IoT development, we hold complete proficiency in Java.
            </p>
          </div>
        </div>
      </section>

      {/* feature section  */}
      <section className={Styles.java_feature_section}>
        <div className={Styles.java_feature_wrapper}>
          <div className={Styles.web_feature_heading}>
            <h2>
              Why Choose Java Application Development For Your Business Growth?
            </h2>
            <p style={{fontSize:"1.8rem",textAlign:"center"}}>Here is the reason why the big part of technological evolution depends on Java and Java development services</p>
          </div>
          <div className={Styles.java_feature_content}>
            <div className={Styles.left}>
              <img src={java1} alt="web design image" />
            </div>
            <div className={Styles.right}>
              <p>
                SkyWalk Technology is a leading company with 5+ experience in
                the app/website development industry. Our team of developers has
                more than 3+ years of industry experience and expertise in
                various domains. Every one of our professionals are well versed
                with the latest technologies and tools to deliver comprehensive
                Java App Development Services, then be it for the website or for
                the applications; we create wonders.
              </p>

              <strong
                style={{ color: "#071c4d" }}
                className={Styles.our_services}
              >
                Why Go With Java:
              </strong>
              <ul>
                <li>Multithreaded</li>
                <li>Secure</li>
                <li>Portable</li>
                <li>Platform-independent</li>
                <li>Interpreted</li>
                <li>Dynamic</li>
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

      {/* feature section second */}
      {/* here we have used the same template of java feature section used above */}
      <section className={Styles.java_feature_section}>
        <div className={Styles.java_feature_wrapper}>
          <div className={Styles.java_feature_content}>
            <div className={Styles.left}>
              <img src={javaCircleImg} alt="web design image" />
            </div>
            <div className={Styles.right} style={{ order: "-1" }}>
              <h2 className={Styles.java_heading}>
                Java Application And Software Development Services
              </h2>
              <p>
                IIt’s always wise to customize the appearance of a business
                website and that’s where the role of Java language comes in. Let
                us introduce to you the Java-based services that we provide.
              </p>

              <strong
                style={{ color: "#071c4d" }}
                className={Styles.our_services}
              >
                What’s All We Include in Java:
              </strong>
              <ul>
                <li>Custom Java Development</li>
                <li>Java Web Development</li>
                <li>Java Application & Maintenance</li>
                <li>Java Mobile Development</li>
                <li>Java/J2EE Development</li>
                <li>Java Software Development</li>
                <li>Plugin Development</li>
                <li>Java Portal Development</li>
                <li>Java eCommerce Development</li>
                <li>Java UX/UI Development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* feature section Third */}
      {/* here we have used the same template just contents are changed */}
      <section className={Styles.java_feature_section}>
        <div className={Styles.java_feature_wrapper}>
          <div className={Styles.java_feature_content}>
            <div className={Styles.left}>
              <img src={whyjava} alt="web design image" />
            </div>
            <div className={Styles.right}>
              <h2 className={Styles.java_heading}>
              Reasons To Choose Us For Java Development Services
              </h2>
              <p style={{fontWeight:"bolder"}}>We are a top-rated Java software development company
</p>
              
              <p>
                Java is a high-level language with platform-independence and
                that makes it easy to access and developers' first choice. Java
                is the Preferred language for designing complex applications. It
                is a secure language and has all the benefits that a developer
                can wish for developing an application.
              </p>

              <strong
                style={{ color: "#071c4d" }}
                className={Styles.our_services}
              >
                What’s All We Include in Java:
              </strong>
              <ul>
                <li>Assures a High-Level Security</li>
                <li>Debugging Capability</li>
                <li>Debugging Capability</li>
                <li>Provides Multiple APIs and Libraries</li>
                <li>User-Friendly</li>
                <li>Faster and Efficient</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default JavaDevelopment;
