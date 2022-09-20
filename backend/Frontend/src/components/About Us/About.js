import React, { Fragment } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import team from "../../img/office2.png";

import Styles from "./about.module.css";


const About = () => {
  return (
    <Fragment>



      <div className={Styles.about_container}>
        <div className={Styles.about_content_wrapper}>
          <div className={Styles.left_content}>
            <h2>About Us</h2>
            <h4>We are digital natives. Our residence is the Internet.</h4>
            <p>
              Marketing has not been left unaffected by the digital age in which
              we now live. Being digitally savvy implies you are prepared to
              reach your objective 3X faster than others who continue to use the
              conventional marketing strategy and apply the outdated sales
              techniques for company expansion and brand promotion. We at best
              Digital marketing service Skywalk Technology will make sure to
              begin your company on a foundation where success is the end_all,
              be_all of business growth, and assist you in ruling your company
              in the digital era.
            </p>
            <div className={Styles.experience_section}>
              <ul className={Styles.checklist_cont}>
                <li className={Styles.checklist}>
                  <HiCheckCircle className={Styles.check_icon} /> 5+ Years of
                  Excellence
                </li>
                <li className={Styles.checklist}>
                  <HiCheckCircle className={Styles.check_icon} /> Personal branding
                </li>
                <li className={Styles.checklist}>
                  <HiCheckCircle className={Styles.check_icon} /> 100+ Technology
                  Experts
                </li>
                <li className={Styles.checklist}>
                  <HiCheckCircle className={Styles.check_icon} /> Better Conversion
                  rates
                </li>
                <li className={Styles.checklist}>
                  <HiCheckCircle className={Styles.check_icon} /> Showcasing success
                </li>
                <li className={Styles.checklist}>
                  <HiCheckCircle className={Styles.check_icon} /> Sales compliance
                </li>
              </ul>
              <h4>
                Know More About Us <BsArrowRight className={Styles.icon} />
              </h4>
            </div>
          </div>
          <div className={Styles.right_content}>
            <img src={team} alt="" />
          </div>
        </div>
       
      </div>
    </Fragment>
  );
};

export default About;
