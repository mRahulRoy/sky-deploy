import React, { Fragment } from "react";

import Styles from "./ecommerce.module.css";
// image import
import ecommDevCompany from "../../img/e-commerce website development  _vector_img.svg";

// component imports
import Industries_We_Work from "../../components/Industries We Work With/IndustriesWeWork";
// image imports
import machineImg from "../../img/factors_webd_evelopment1.png";
import asset1 from "../../img/color-shape/image-3.png";
import asset2 from "../../img/color-shape/feature-3.png";
import ecommGraph from "../../img/ecomm_graph.png";
import webIdea from "../../img/webidea.png";
import { RiNodeTree } from "react-icons/ri";
import { BsBezier, BsTruck } from "react-icons/bs";
import { BiLayer } from "react-icons/bi";


const EcommerceWebsiteDev = () => {
  return (
    <Fragment>
    
      {/*top page header starts here */}
      <section className={Styles.page_header_container}>
        <div className={Styles.page_header}>
          <div className={Styles.main_heading}>
            <h1>E-Commerce Website Development Company</h1>

            <p className={Styles.lead}>
              We provide highly innovative and appealing e-commerce website
              development services that has the ability to attract more
              customers as we believe that your website is your main asset.
            </p>
          </div>
        </div>
      </section>

      {/* feature section one  */}
      <section className={Styles.first_feature_section}>
        <div className={Styles.first_feature_wrapper}>
          <div className={Styles.first_feature_cont}>
            <div className={Styles.left}>
              <img src={ecommDevCompany} alt="content development" />
            </div>
            <div className={Styles.right}>
              <h2>Our Offerings in ECommerce Web Development</h2>
              <p>
                A wide range of ecommerce website development services makes us
                a one-stop choice of customers. It establishing feature-rich,
                interactive online portals that allow any company to engage in
                direct client contact for growth and Building secured,
                sustainable and rich-featured B2B marketplaces to allow the
                businesses to deliver their products or services to other
                potential businesses in the market Bring a variety of vendors
                together on a single, powerful eCommerce platform that gives any
                company the chance to sell their goods or services online.It
                Integrating eCommerce platforms like PrestaShop, OpenCart, Zen
                Cart, osCommerce, Magento, WooCommerce, and Shopify to empower
                your marketplaces excelling in the capabilities of your business
                with maximum potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* industries we work with */}
      <Industries_We_Work />

      {/*our promise section  */}
      <section className={Styles.promise_feature_section}>
        <div className={Styles.promise_feature_wrapper}>
          <div className={Styles.promise_feature_content}>
            <div className={Styles.left}>
              <img
                className={`${Styles.asset} ${Styles.asset1} ${Styles.asset1_animate}`}
                src={asset1}
                alt=""
              />
              <img src={machineImg} alt="web design image" />
              <img
                className={`${Styles.asset} ${Styles.asset2} ${Styles.asset2_animate}`}
                src={asset1}
                alt=""
              />
              <img
                className={`${Styles.asset} ${Styles.asset3} ${Styles.asset3_animate}`}
                src={asset2}
                alt=""
              />
            </div>
            <div className={Styles.right}>
              <h2>Improve Your Growth With Our Versatile Services</h2>
              <p>
                Skywalk is a notable e-commerce website development company as
                we always offer what we promise. This helps us with 100% client
                satisfaction. The best quality of ours which is acknowledged the
                most is that our utmost priority is maintaining a good
                relationship with our clients and cost is secondary for us. We
                are proud to tell you that our hard work has helped us gain
                really good reviews from our clients. We ensure to gain our
                client’s trust from the starting by sending them a proposal that
                involves every detail about the project, our functioning,
                company details, employee details, our agenda, etc.
              </p>

              <strong
                style={{ color: "#071c4d" }}
                className={Styles.our_services}
              >
                Skywalk as a prominent e-commerce website development service
              </strong>
              <ul>
                <li>e-commerce App Development</li>
                <li>Custom e-commerce Website Design</li>
                <li>Shopping Cart Development</li>
                <li>Appealing UI/UX</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* work process section starts here*/}
      <section className={Styles.work_process_section}>
        <div className={Styles.work_process_container}>
          <div className={Styles.content_wrapper}>
            <div className={Styles.heading}>
              <h2>
                Reasons to Choose Us as Your ECommerce Development Company
              </h2>
              <p>
                We make sure to develop an e-commerce website after undergoing
                through the latest and advanced security techniques.
              </p>
            </div>
            <div className={Styles.content_section}>
              <div className={Styles.images_section}>
                <img src={ecommGraph} alt="contraction image" />
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
                 
                </div>

                <div className={Styles.text_cont}>
                  <div>
                    <h2>Specialization</h2>
                    <p>
                      We believe in perfection and that's the reason why we
                      assign a particular task to our skilled team of designers,
                      master coders, and marketing consultants for each project.
                      This enables us to provide satisfactory services.
                    </p>
                  </div>

                  <div>
                    <h2>Coordination</h2>
                    <p>
                      We believe in full client satisfaction and for that, we
                      make sure to coordinate with our clients at every level of
                      our website development process. This enables us to
                      deliver what our clients exactly want.
                    </p>
                  </div>

                  <div>
                    <h2>Dedication</h2>
                    <p>
                      Our clients are our topmost priority and so is their time
                      and that's why we ensure on-time delivery. That's the
                      reason why we don't waste a single moment to revert to our
                      clients and offer them the most useful solutions to help
                      them grow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* here we are using the same structure that we have used above , so we are not adding any separate css for this, we are just reusing this */}
      {/*our promise section  */}
      <section className={Styles.promise_feature_section}>
        <div className={Styles.promise_feature_wrapper}>
          <div className={Styles.promise_feature_content}>
            <div className={Styles.left}>
              <img
                className={`${Styles.asset} ${Styles.asset1} ${Styles.asset1_animate}`}
                src={asset1}
                alt=""
              />
              <img src={webIdea} alt="web  image" />
              <img
                className={`${Styles.asset} ${Styles.asset2} ${Styles.asset2_animate}`}
                src={asset1}
                alt=""
              />
              <img
                className={`${Styles.asset} ${Styles.asset3} ${Styles.asset3_animate}`}
                src={asset2}
                alt=""
              />
            </div>
            <div className={Styles.right}>
              <h2>Ecommerce Website That Makes You Stand Out</h2>
              <p>
                At Skywalk, we work really hard to improve our relationship with
                clients as the cost is secondary for us. We do so by delivering
                what we promised. Our highly effective work approach allows us
                to coordinate with each other effectively to ignore any kind of
                discrepancies. We also make sure to provide our clients with
                real-time information about their e-commerce website
                development. We have a proven record of successful projects.
                Websites developed by us are always one of the highly engaging
                websites which helped us gain recognition all over the world.
              </p>

              <strong
                style={{ color: "#071c4d" }}
                className={Styles.our_services}
              >
                How Ecommerce Website Development Benificail For Your Business:
              </strong>
              <ul>
                <li>Easy to use and understand by the audience.</li>
                <li>
                  They are highly adaptable as they can adapt to any screen
                  size.
                </li>
                <li>Our websites are always secure and reliable.</li>
                <li>
                  We make sure to develop affordable and cost-effective
                  platform.
                </li>
                <li>PHP eCommerce Development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default EcommerceWebsiteDev;
