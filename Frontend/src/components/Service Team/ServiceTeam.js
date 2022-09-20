import React, { Fragment } from "react";
import Styles from "./service_team.module.css";
// image imports
import num1 from "../../img/num1.png";
import num2 from "../../img/num2.png";
import num3 from "../../img/num3.png";
import digitalMarketing from "../../img/digital_marketing_agency.svg";
const ServiceTeam = () => {
  return (
    <Fragment>
      <div className={Styles.team_wrapper}>
        <div className={Styles.content_cont}>
          <div className={Styles.title}>
            <h2>
              Learn more about Our Digital <br />
              Service Team
            </h2>
          </div>
          <div className={Styles.flex_wrapper}>
            <div className={Styles.left_faq_wrapper}>
              <div className={Styles.faq_item}>
                <div className={Styles.sequence}>
                  <img src={num1} alt="" />
                </div>
                <div className={Styles.content}>
                  <h2> Great Teamwork</h2>
                  <p>
                    Teamwork plays an important role in success. We believe in
                    passionate and hard working people, no matter their
                    background or years of experience.
                  </p>
                </div>
              </div>
              <div className={Styles.faq_item}>
                <div className={Styles.sequence}>
                  <img src={num2} alt="" />
                </div>
                <div className={Styles.content}>
                  <h2>DEDICATED FORCE</h2>
                  <p>
                    Our team works in a collaborative manner at every stage of
                    the project to provide the desired and best results.
                    Customer satisfaction is our priority.
                  </p>
                </div>
              </div>
              <div className={Styles.faq_item}>
                <div className={Styles.sequence}>
                  <img src={num3} alt="" />
                </div>
                <div className={Styles.content}>
                  <h2> NEVER SAY NO</h2>
                  <p>
                    We follow a Never say "No" rules, in a positive way. This
                    helps us constantly innovate because where others see
                    difficulty we see opportunity and try to change difficulties
                    into innovation.
                  </p>
                </div>
              </div>
            </div>
            <div className={Styles.right_wrapper}>
              <img  src={digitalMarketing} alt="faq picture" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ServiceTeam;
