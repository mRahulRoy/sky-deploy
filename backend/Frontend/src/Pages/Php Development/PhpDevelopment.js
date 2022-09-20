import React, { Fragment } from "react";

import Styles from "./php_dev.module.css";

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
import phpImg from "../../img/PHP development service _vector_img.svg";
import phpImg2 from "../../img/PHP development service in gurgaon _vector_img.svg";
import php_Dev_Service_Img from "../../img/php_development_service.png";

const PhpDevelopment = () => {
  return (
    <Fragment>
     
      {/*top page header starts here */}
      <section className={Styles.page_header_container}>
        <div className={Styles.page_header}>
          <div className={Styles.main_heading}>
            <h1>PHP Web Development Company</h1>

            <p className={Styles.lead}>
              SkyWalk Technology is the top web and app design and development
              company that offers scalable web designing solutions across the
              verticals. We fabricate tailor-made PHP solutions that are
              responsive, rapid, and adaptable. The maturity of PHP simply
              propel our developers to build engaging, and interactive websites.
            </p>
          </div>
        </div>
      </section>

      {/* feature section  */}
      <section className={Styles.php_feature_section}>
        <div className={Styles.php_feature_wrapper}>
          
          <div className={Styles.php_feature_content}>
            <div className={Styles.left}>
              <img src={phpImg} alt="web design image" />
            </div>
            <div className={Styles.right}>
            <h2>Why you should PHP for your website</h2>

              <p>
                SkyWalk Technology is a trusted PHP web development service
                provider that provides dynamic web pages and web application
                services with quality assurance. We have a team of highly
                devoted PHP developers offering innovative and efficient PHP web
                development services across the globe. Our PHP developers are
                skillful enough to provide custom-built and highly expandable
                websites. <br />
                Our web development team has more than 5+years of experience and
                holds expertise in straight-up domains. The development team is
                well-versed with the latest technologies and tools to deliver
                far-reaching PHP web development services.
              </p>
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
      <section className={Styles.php_feature_section}>
        <div className={Styles.php_feature_wrapper}>
          <div className={Styles.php_feature_content}>
            <div className={Styles.left}>
              <img src={phpImg2} alt="web design image" />
            </div>
            <div className={Styles.right} style={{ order: "-1" }}>
              <h2 className={Styles.php_heading}>PHP Development Services</h2>
              <p>
                Our aim is to deliver best-class custom PHP development
                solutions with accuracy. And it’s possible with the support of
                backend and frontend experts, who relish creating dynamic and
                fully-functional websites.
              </p>

              <strong
                style={{ color: "#071c4d" }}
                className={Styles.our_services}
              >
                Here are the PHP-based services that SkyWalk is adept at:
              </strong>
              <ul>
                <li>PHP customization</li>
                <li>Web Application Development</li>
                <li>Plugin Development</li>
                <li>PHP Portal Development</li>
                <li>PHP eCommerce Development</li>
                <li>PHP UX/UI Development</li>
                <li>PHP Based CMS Development</li>
                <li>Corporate Website Development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* feature section Third */}
      {/* here we have used the same template just contents are changed */}
      <section className={Styles.php_feature_section}>
        <div className={Styles.php_feature_wrapper}>
          <div className={Styles.php_feature_content}>
            <div className={Styles.left}>
              <img src={php_Dev_Service_Img} alt="web design image" />
            </div>
            <div className={Styles.right}>
              <h2 className={Styles.php_heading}>
                Why Choose SkyWalk for PHP Web Development?
              </h2>
              <p>
                We have a sharp and skilled team of developers who have
                successfully worked on PHP web development services. Here are
                some of the factors that set us apart:
              </p>

              <ul>
                <li>
                  {" "}
                  <strong>Well Acquainted:</strong> In PHP web development,
                  there are numerous different aspects including the development
                  of applications, e-commerce, and other websites in which we
                  are expert at.{" "}
                </li>

                <li>
                  {" "}
                  <strong>Rational Experience:</strong> Before hiring the PHP
                  web development services, we assure you that our firm holds
                  considerable experience in the domain of developing and
                  designing websites.
                </li>

                <li>
                  {" "}
                  <strong>Specialization:</strong> Our PHP web developers are
                  adept in the app development.
                </li>

                <li>
                  {" "}
                  <strong>Accessibility: </strong> For seamless accessibility,
                  are always up with options like telephone, email and live
                  chat.{" "}
                </li>

                <li>
                  {" "}
                  <strong>Time Frame and Cost:</strong> We promise to get your
                  website ready and delivered in the desired time frame and that
                  too at a much reasonable cost.{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default PhpDevelopment;
