import React, { Fragment } from "react";

import mobile from "../../img/Digital-marketing-service.png";
import { RiNodeTree } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import Styles from "./digital_market.module.css";

const DigitalMarket = () => {
  return (
    <Fragment>
  

      <div className={Styles.market_container}>
        <div className={Styles.market_content_wrapper}>
          <div className={Styles.heading}>
            <h2>How can our digital marketing service help your brand</h2>
          </div>
          <div className={Styles.content_cont}>
            <div className={Styles.left_cont}>
              <img src={mobile} alt="mobile" />
            </div>
            <div className={Styles.right_cont}>
              <div className={Styles.tree_icon_cont}>
                <span>
                  <RiNodeTree className={Styles.icon} />
                </span>
              </div>
              <div className={Styles.marketing_content}>
                <h2>Explore our Digital Marketing services.</h2>
                <p>
                  Skywalk technologies , as a best digital marketing service in
                  Gurgaon, has a dynamic team of professionals who are well
                  equipped to cater for all{" "}
                  <NavLink to="/"> digital marketing</NavLink> requirements.
                  Having a digital marketing service for marketing purposes will
                  attract extensive digital marketing coverage customized built
                  to reach your business to a wider group of people. In the
                  present era of the digital world, the use of advanced digital
                  technologies has gained wholesome momentum. However, using
                  digital tools for promotion creates an enormous appeal to the
                  masses, thus making any business fruitful at last.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DigitalMarket;
