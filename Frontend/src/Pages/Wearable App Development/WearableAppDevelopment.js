import React, { Fragment } from "react";

import Styles from "./wearable_app.module.css";
// image imports
import wearbleApp from "../../img/Wearable app development service_vector_img.svg";
import { BiShareAlt } from "react-icons/bi";
import { AiFillFileText } from "react-icons/ai";
import { FaSyncAlt } from "react-icons/fa";
import { MdSpellcheck } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import backendGame from "../../img/backend_game.png";


// components imports
import Industries_We_Work from "../../components/Industries We Work With/IndustriesWeWork";

import frontendGame from "../../img/frontend_game.png";
// icons imports

const WearableAppDevelopment = () => {
  return (
    <Fragment>
    
      {/*top page header starts here */}
      <section className={Styles.page_header_container}>
        <div className={Styles.page_header}>
          <div className={Styles.main_heading}>
            <h1>Our Impeccable Wearable App Development Services</h1>

            <p
              data-aos="fade-zoom-in"
              data-aos-delay="100"
              className={Styles.lead}
            >
              Skywalk Technologies is skilled in developing wearable apps and
              integrating cutting-edge technology. Our skillful staff members
              are knowledgeable in this cutting-edge technology and actively
              participating in the digital revolution. In order to deliver an
              app that is compatible with the newest wearable technology, we
              provide top-tier IoT solutions and methodologies. We are a
              well-known wearable app development business that has served
              several customers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* feature section  */}
      <section className={Styles.game_feature_section}>
        <div className={Styles.game_feature_wrapper}>
          <div className={Styles.game_feature_heading}>
            <h2>Providing Effective Services for Wearable App Development</h2>
          </div>
          <div className={Styles.game_feature_content}>
            <div className={Styles.left}>
              <img src={wearbleApp} alt="web design image" />
            </div>
            <div className={Styles.right}>
              <p>
                We use cutting-edge tools together with cutting-edge
                technologies as a leading and most ambitious wearable game
                development firm to produce fantastic games with stunning
                graphics and gameplay. We believe in creating such wearable
                games that make use of contemporary and advanced features, such
                as connectivity devices, gyroscopes, accelerometers, etc. We
                comprehend and develop your gaming idea as a wonderful app with
                appealing graphics, engaging gameplay, a striking UI, and many
                other alluring elements in collaboration with our team of the
                top wearable game developers. We have gone to great lengths to
                provide effective game development services for the developing
                gaming market as the top wearable game development business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Second feature section starts */}
      <section className={Styles.our_features}>
        <div className={Styles.our_feature_wrapper}>
          <div className={Styles.our_feature_heading}>
            <h3>Our Offerings For Wearble App Development</h3>
          </div>
          <div className={Styles.our_feature_cards}>
            {/* card-1 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.card}
            >
              <div
                className={Styles.icon_box}
                style={{ background: "#175cff" }}
              >
                <BiShareAlt className={Styles.icon} />
              </div>
              <h3>Wearable Game Development</h3>
              <p>
                Our experts develop platform-specific wearable apps for Android.
                At Skywalk , we deliver value-based android wearable
                applications with the help of advanced technologies including
                HTML, JavaScript, Firebase Analytics, Android sensors, GPU
                tools, and more.
              </p>
            </div>

            {/* card-2 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.card}
            >
              <div
                className={Styles.icon_box}
                style={{ background: "#f25767" }}
              >
                <AiFillFileText className={Styles.icon} />
              </div>
              <h3>Fitness App Development</h3>
              <p>
                We offer our services for a myriad of industries and fitness is
                one of them. We deliver out-of-the-box wearable mobile app
                development services to offer competent fitness gadget
                solutions. Specialists use high-end tools to build apps for
                truckers, chest straps, wristbands, smartwatches, armbands.
              </p>
            </div>

            {/* card-2 */}

            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.card}
            >
              <div
                className={Styles.icon_box}
                style={{ background: "#0b163f" }}
              >
                <FaSyncAlt className={Styles.icon} />
              </div>
              <h3>Custom App Development</h3>
              <p>
                We take pride in delivering bespoke solutions to fulfill the
                expectations of our clients.skywalk offers customized wearable
                applications that run seamlessly on any wearable device like
                glasses, smartwatches, bands, and more.
              </p>
            </div>

            {/* card-4 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.card}
            >
              <div
                className={Styles.icon_box}
                style={{ background: "#5cc9a7" }}
              >
                <MdSpellcheck className={Styles.icon} />
              </div>
              <h3>Integration</h3>
              <p>
                Our esteemed experts develop wearable apps that integrate with
                any wearable device and existing mobile applications. The quick
                integration services by our professionals elicit new revenue
                streams.
              </p>
            </div>

            {/* card-5 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.card}
            >
              <div
                className={Styles.icon_box}
                style={{ background: "#175cff" }}
              >
                <FaChartPie className={Styles.icon} />
              </div>
              <h3>Apple Watch App Development</h3>
              <p>
                We provide captivating mobile applications for wearable devices
                with agile iOS & Android technologies. Our experienced
                developers specialize in iOS wearable app development and they
                can create high-performing and robust apps for apple watches.
              </p>
            </div>

            {/* card-6 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.card}
            >
              <div
                className={Styles.icon_box}
                style={{ background: "#ffb116" }}
              >
                <FiFilter className={Styles.icon} />
              </div>
              <h3>App Development with IOT</h3>
              <p>
                As we work on contemporary technologies, our experts are
                well-versed with IoT integration in our apps. This allows
                effective profile management, data collection, seamless transfer
                of data, etc. We provide end-to-end wearable device app
                development services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Third feature section starts */}
      <section className={Styles.game_features}>
        <div className={Styles.game_feature_wrapper}>
          <div className={Styles.game_feature_heading}>
            <h3 className={Styles.sub_heading}>
              Top Advantages of Wearable App Development by Us
            </h3>
          </div>
          <div className={Styles.game_feature_cards}>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.game_card}
            >
              <h3>Agile Development Process</h3>
              <p>
                Our company uses an agile development technique to provide
                consumers with high-quality solutions.
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.game_card}
            >
              {/* <div style={{ backgroundColor: "#def4ed" }} className={Styles.img}>
                                <img src={customWebDesign} alt="" />
                            </div> */}
              <h3>Utility Tools</h3>
              <p>
                For wearable devices, we have included practical functions like
                timers, calculators, and maps & navigation.
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.game_card}
            >
              <h3>High-end Technology</h3>
              <p>
                To provide the best solutions to satisfy your needs, our
                developers keep current on the newest technology.
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.game_card}
            >
              <h3>Seamless Functioning</h3>
              <p>
                We guarantee that your wearable app functions effectively
                regardless of the wearable device.
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.game_card}
            >
              <h3>Quick Delivery</h3>
              <p>
                For your wearable app, our developers will quickly complete
                their work and meet the deadline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* fourth feature section  */}
      <section className={Styles.frontend_feature_section}>
        <div className={Styles.frontend_feature_wrapper}>
          <div className={Styles.frontend_feature_heading}>
            <h2>What Makes Us A Leading Wearable App Development Company?</h2>
          </div>
          <div className={Styles.frontend_feature_content}>
            <div className={Styles.left}>
              <img src={frontendGame} alt="web design image" />
            </div>
            <div className={Styles.right}>
              {/* <p>We are creating user-friendly and smart wearable apps</p> */}

              <strong
                style={{ color: "#071c4d" }}
                className={Styles.our_services}
              >
                We are creating user-friendly and smart wearable apps
              </strong>
              <ul>
                <li>
                  <strong>Security </strong> Our wearable app is protected by
                  browser and cloud access security. This prevents data theft
                  from happening to wearable apps.
                </li>
                <li>
                  <strong>Smooth Navigation </strong>User interaction depends on
                  navigation, which is a crucial component. With years of
                  expertise, our wearable app developers build applications with
                  appropriate categorization and search tools so users can
                  easily traverse them.
                </li>
                <li>
                  <strong>Wearable App Upgrade </strong> The dynamic nature of
                  the wearable app market inspires our team to keep up with
                  emerging technology. This enables us to update and modify
                  wearable apps in accordance with the requirements of
                  particular platforms.
                </li>
                <li>
                  <strong>Extensive Experience </strong>Being a wearable app
                  development firm for 10 years, we have a lot of expertise in
                  the field. We have provided our unique solutions to a wide
                  range of sectors. We are experts in creating full-scale
                  applications from innovative app ideas.
                </li>
                <li>
                  <strong>Support and Maintenance </strong> In order to provide
                  our clients with outstanding wearable app development
                  services, we keep your app's performance up to par. With our
                  security upgrades, careful testing, and code inspections, our
                  services will be only for the customer.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* backend feature section */}

      {/* fourth feature section  */}
      <section className={Styles.backend_feature_section}>
        <div className={Styles.backend_feature_wrapper}>
          <div className={Styles.backend_feature_content}>
            <div className={Styles.left}>
              <img src={backendGame} alt="web design image" />
            </div>
            <div className={Styles.right}>
              <h2>Our Methodology for Wearable App</h2>
              <p>
                Back-end game development keeps all the services in sync and
                maintains all the controls:
              </p>

              <ul>
                <li>
                  <strong>Discovery </strong> To determine the viability of your
                  project, we begin by gathering requirements, doing a
                  competitive analysis, identifying business objectives, etc.
                </li>
                <li>
                  <strong>Wireframe/Design </strong> We develop high fidelity
                  wireframes and prototypes for your website design after
                  thoroughly understanding the requirements.
                </li>
                <li>
                  <strong>Development </strong> We integrate a CMS with all of
                  your website's pages and information. The website's websites
                  and other elements have all been created.
                </li>
                <li>
                  <strong>Testing </strong>
                  Your website is put through a rigorous testing process where a
                  number of factors, including aesthetic and performance, are
                  examined.
                </li>
                <li>
                  <strong>Deployment </strong>
                  We assist you with the setup and deployment of your website on
                  any selected platform after it has been properly created and
                  tested.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* industries we work with section */}
      <Industries_We_Work />
    </Fragment>
  );
};

export default WearableAppDevelopment;
