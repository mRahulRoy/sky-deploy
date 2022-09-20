import React, { Fragment, Suspense, lazy } from "react";
import Styles from "./banner.module.css";
import { BsPlayCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import LazySpinner from "../lazy Spinner/LazySpinner";
import guyOnCloud from "../../img/guyOnCloud.png";



const Banner = ({ val }) => {
  return (
    <Fragment>
      <div className={Styles.banner_container}>
        <div className={Styles.banner_section}>
          <div className={Styles.left_cont}>
            <div className={Styles.content}>
              <h2>
                Introducing the foremost Digital Marketing service in Gurgaon.
              </h2>
              <p>
                At Skywalk Technologies, our dynamic team of professionals is
                all set to look after all your digital marketing needs. Being
                considered the best digital marketing service in Gurgaon ,
                Skywalk technologies, as a digital marketing agency is known to
                provide you with the best of all experience of all your digital
                concerns.
              </p>
            </div>

            <div className={Styles.demo_cont}>
              <NavLink className={Styles.link} to="/under-maintainence">
                <button>Request For Demo</button>
              </NavLink>
              <div className={Styles.playbox}>
                <span>
                  <BsPlayCircle />
                </span>
                <p> watch Demo</p>
              </div>
            </div>
          </div>
         
            <div className={Styles.right_cont}>
              <img src={guyOnCloud} draggable="false" />
            </div>
          
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
