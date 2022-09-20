import React, { Fragment } from "react";
import Styles from "./digital_market.module.css";
// image imports
import digitalMarket from "../../img/digital-marketing.png";
import SeoAndForm from "../Subscribe and Seo Section/SeoAndForm";
import Industries_We_Work from "../../components/Industries We Work With/IndustriesWeWork";

const DigitalMarketing = () => {
  return (
    <Fragment>
      {/*top page header starts here */}
      <section className={Styles.page_header_container}>
        <div className={Styles.page_header}>
          <div className={Styles.main_heading}>
            <h1>Professional Digital Marketing Service Provider</h1>

            <p className={Styles.lead}>
              SkyWalk Technology is a top digital marketing company that offers
              scalable marketing solutions across verticals. SkyWalk Technology
              is a leading digital marketing agency that focuses on promoting
              businesses online to capture the attention of their potential
              customers. With the help of SEO, PPC, social media marketing, and
              other internet marketing services, we aim to increase conversions,
              traffic to the website, or both.
            </p>
          </div>
        </div>
      </section>

      {/* feature section  */}
      <section className={Styles.market_feature_section}>
        <div className={Styles.market_feature_wrapper}>
         
          <div className={Styles.market_feature_content}>
            <div className={Styles.left}>
              <img src={digitalMarket} alt="web design image" />
            </div>
            <div className={Styles.right}>
            <h2>How Our Digital Marketing Agency Work?


</h2>
            
              <strong
                style={{ color: "#071c4d" }}
                className={Styles.our_services}
              >
                SkyWalk Technology can help you with digital marketing services
                like:
              </strong>
              <ol>
                <li>There is no one-size-fits-all marketing plan, as our skilled digital marketers at Skywalk are aware of. Because each organization is different, the strategy and procedure must be adjusted.</li>
                <li>As a digital marketing services company, we will typically assess the traffic to your website, choose the finest online venues for your investments, and maintain the consistency between your marketing efforts and their outcomes on a regular basis.</li>
                <li>Our digital marketing team collaborates to create and carry out a multifaceted plan to increase the number of leads that come to your company and turn them into customers. Our digital marketers will primarily listen to you as they create, launch, and expand your online presence.
</li>
                
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/*Third feature section starts */}
      <section className={Styles.market_features}>
        <div className={Styles.market_feature_wrapper}>
          <div className={Styles.market_feature_heading}>
            <h3>Digital Marketing Services For Growing Your Business</h3>
            <p>
              CHOOSE THE BEST INTERNET MARKETING SERVICES THAT IS MOST
              APPROPRIATE FOR YOUR BUSINESS.
            </p>
          </div>
          <div className={Styles.market_feature_cards}>
            {/* card 1 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.market_card}
            >
              <h3>Search Engine Optimization (SEO)</h3>
              <p>
                Garner excellent online visibility of your website or a web page
                in a web search engine with our advanced SEO techniques.
              </p>
            </div>

            {/* card 2 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.market_card}
            >
              <h3>Social Media Marketing</h3>
              <p>
                Social media is a crucial platform, therefore, let us promote
                your product or services on social media channels with a plain
                sailing master plan.
              </p>
            </div>

            {/* card 3 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.market_card}
            >
              <h3>Pay-Per-Click Advertising (PPC)</h3>
              <p>
                Customized PPC services as per your needs and aligned with your
                business objectives with high-value consumers and business
                buyers.
              </p>
            </div>

            {/* card 4 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.market_card}
            >
              <h3>Social Media Management</h3>
              <p>
                Promotion is not everything; you need to maintain consistency,
                as well. Let us create, manage, and deliver social media
                campaigns for your business.
              </p>
            </div>

            {/* card 5 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.market_card}
            >
              <h3>Content Marketing</h3>
              <p>
                With our data-driven digital marketing services, create,
                publish, and distribute content online and reach future clients
                in every stage of the buying funnel.
              </p>
            </div>

            {/* card 6 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.market_card}
            >
              <h3>Email Marketing</h3>
              <p>
                We will help you speed up your sales cycle by generating and
                nurturing leads, plus drive repeat purchases.
              </p>
            </div>

            {/* card 7 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.market_card}
            >
              <h3>Website Design and Development</h3>
              <p>
                We promise to deliver professional web design or redesign
                because all that matters is the user experience.
              </p>
            </div>

            {/* card 8 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.market_card}
            >
              <h3>Conversion Rate Optimization (CRO)</h3>
              <p>
                Gain a competitive edge in the online marketplace with the right
                usability, design, and content on your website; thanks to our
                conversion rate optimization services.
              </p>
            </div>

            {/* card 9 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.market_card}
            >
              <h3>Video Production</h3>
              <p>
                Storytelling with video content is the powerhouse of any brand
                and if done right, it can be powerful and engaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SeoAndForm/>

      <Industries_We_Work/>


    </Fragment>
  );
};

export default DigitalMarketing;
