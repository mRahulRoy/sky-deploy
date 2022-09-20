import React, { Fragment } from "react";
import Styles from "./flutter_app.module.css";

import flutterDev from "../../img/Flutter app development service  _vector_img.svg";
import whyFlutter from "../../img/why-flutter-app-developement.png";
import blockchain from "../../img/blockchain.png";
import android from "../../img/android.png";
import react from "../../img/react_native.png";
// component import
import Industries_We_Work from "../../components/Industries We Work With/IndustriesWeWork";

const FlutterAppDevelopment = () => {
  return (
    <Fragment>
  
      {/*top page header starts here */}
      <section className={Styles.page_header_container}>
        <div className={Styles.page_header}>
          <div className={Styles.main_heading}>
            <h1>Best Flutter App Development Company</h1>

            <p className={Styles.lead}>
              SkyWalk Technology is a top Flutter app development company that
              brings the flexibility of Flutter to your mobile apps. Our Flutter
              app developers are the most prized asset for us.
            </p>
          </div>
        </div>
      </section>

      {/* feature section  */}
      <section className={Styles.android_feature_section}>
        <div className={Styles.android_feature_wrapper}>
          <div className={Styles.android_feature_content}>
            <div className={Styles.left}>
              <img src={flutterDev} alt="flutter developer" />
            </div>
            <div className={Styles.right}>
              <h2>Hire Flutter App Developers</h2>
              <p>
                As a renowned flutter app development company, we majorly focus
                on the quality of our product and at SkyWalk Technology, we have
                well-experienced flutter app developers who can develop the
                next-generation applications for the clients in record time. If
                you are focused on Flutter, it's time to hire Flutter app
                developers from SkyWalk Technology who have vast experience in
                imparting world-class flutter app development services. We are
                renowned for offering the best and latest technology solutions
                to our clients. If you have an idea then we will suggest the
                best strategy. We will help you to develop efficient flutter
                applications for both Android and iOS that meet the specific
                business development project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* second feature section */}
      <section className={Styles.mobile_service_section}>
        <div className={Styles.mobile_services_wrapper}>
          <div className={Styles.mobile_heading}>
            <h2>Mobile App Development Services</h2>
            <p>
              Our Android application development strategy is built around a
              mixture of approaches that allow a business to cover all your
              requirements while optimizing the time and cost of delivering an
              app. Here are the two key approaches our Android app developers
              deploy during the app development process.
            </p>
          </div>

          <div className={Styles.flutter_container}>
            <div
              className={`${Styles.flutter_container_inner} ${Styles.flutter_container_inner_left}`}
            >
              <div className={Styles.flutter_container_item}>
                <div className={Styles.flutter_container_img}>
                  <img src={android} alt="Android" />
                  <h5 className={Styles.flutter_container_item_heading}>
                    Android App Development
                  </h5>
                </div>
              </div>
              <div className={Styles.flutter_container_item}>
                <div className={Styles.flutter_container_img}>
                  <img src={blockchain} alt="Android" />
                  <h5 className={Styles.flutter_container_item_heading}>
                    iOS App Development
                  </h5>
                </div>
              </div>
            </div>
            <div
              className={`${Styles.flutter_container_inner} ${Styles.flutter_container_inner_right}`}
            >
              <div className={Styles.flutter_container_item}>
                <div className={Styles.flutter_container_img}>
                  <img src={blockchain} alt="Android" />
                  <h5 className={Styles.flutter_container_item_heading}>
                    Blockchain App Development
                  </h5>
                </div>
              </div>
              <div className={Styles.flutter_container_item}>
                <div className={Styles.flutter_container_img}>
                  <img src={react} alt="Android" />
                  <h5 className={Styles.flutter_container_item_heading}>
                    React Native App Development
                  </h5>
                </div>
              </div>
              <div className={Styles.flutter_container_item}>
                <div className={Styles.flutter_container_img}>
                  <img src={android} alt="Android" />
                  <h5 className={Styles.flutter_container_item_heading}>
                    Multilingual App Development
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries we work with */}
      <Industries_We_Work />

      {/* feature section  */}
      <section className={Styles.android_feature_section}>
        <div className={Styles.android_feature_wrapper}>
          <div className={Styles.android_feature_content}>
            <div className={Styles.left}>
              <img src={whyFlutter} alt="flutter developer" />
            </div>
            <div className={Styles.right}>
              <h2>Flutter Development Process</h2>
              <ul>
                <li>
                  <strong>Consider: </strong>We outline your company's objectives and expectations after conducting a thorough business study, and we also offer potential solutions.
                </li>
                <li>
                  <strong>Plan: </strong>With the advantages, you receive a thorough specification, estimate, or module breakdow
                </li>
                <li>
                  <strong>Design : </strong>Using the study, you are presented with the ideal architecture and UX/UI design for your approval.
                </li>
                <li>
                  <strong>Release Testing: </strong>To make sure your app
                  functions flawlessly, we keep track of all reports.
                </li>
                <li>
                  <strong>Develop:</strong> Our Flutter app developer concurrently constructs a single code base for the two apps.
                </li>
                <li>
                  <strong>Check and Integrate: </strong>All of the components are thoroughly tested to the specifications by our Flutter app development business.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default FlutterAppDevelopment;
