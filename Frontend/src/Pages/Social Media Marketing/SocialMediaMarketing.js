import React, { Fragment } from "react";
import Styles from "./social_media_marketing.module.css";
// image imports
import socialMedia from "../../img/Social media optimization_vector_img.svg";
import socialMediaService from "../../img/social_media_service.png";
import SeoAndForm from "../Subscribe and Seo Section/SeoAndForm";
const SocialMediaMarketing = () => {
  return (
    <Fragment>
      {/*top page header starts here */}
      <section className={Styles.page_header_container}>
        <div className={Styles.page_header}>
          <div className={Styles.main_heading}>
            <h1>Social Media Marketing Services</h1>

            <p className={Styles.lead}>
              Social media marketing is a success key for any business and influencer.
              Social media has an advantage over conventional media in that it
              allows you to get your brand in front of interested audience much
              more rapidly and simply in a short period of time. Now you can
              connect people from any part of country, which helps saving in
              offline marketing.
            </p>
          </div>

          {/* <div className={Styles.vacant}> </div> */}
        </div>
      </section>

      {/* feature section  */}
      <section className={Styles.social_media_feature_section}>
        <div className={Styles.social_media_feature_wrapper}>
          <div className={Styles.social_media_feature_content}>
            <div className={Styles.left}>
              <img src={socialMedia} alt="content development" />
            </div>
            <div className={Styles.right}>
              <h2>Advertise On Social Media Allows You</h2>
             
              <ul>
                <li>Increase and solidify your brand's recognition.</li>

                <li>Become more conscious of your audience</li>

                <li>Improve ROI</li>
                <li>positively affect your search engine optimization (SEO)</li>
                <li>produce leads</li>
                <li>Boost traffic</li>
                <li>
                  Establish a channel for direct interaction with your audience.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social media feature section starts here */}
      {/* feature section  */}
      <section className={Styles.how_social_media_feature_section}>
        <div className={Styles.how_social_media_feature_wrapper}>
          <div className={Styles.how_social_media_feature_content}>
            <div className={Styles.left}>
              <img src={socialMediaService} alt="social media service" />
            </div>
            <div className={Styles.right}>
              <h2>Social Media Advertising</h2>
              <p>
                <strong> Set a Higher Standard on Your Marketing Performance.</strong>
                <br />
                The organic reach of many businesses is dwindling. While some of
                your material may have great interaction rates, your target
                audience may entirely ignore other postings. Furthermore, using
                only organic social media marketing strategies to succeed has
                become increasingly difficult as a result of social media
                algorithm upgrades.
                <br />
                Not getting the outcomes you want from your social media
                marketing strategy on Facebook or Pinterest? With social media
                advertising, you can support your marketing initiatives and
                start bringing in steady revenue right now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*SEO Methodology Section starts here */}
      <section className={Styles.social_media_strategy_wrapper}>
        <div className={Styles.social_media_strategy_content_wrapper}>
          <div className={Styles.social_media_strategy_heading}>
            <h2>Our Social Media Management Strategy</h2>
            <p>
              Increase Your Search Rankings and Get Discovered More audience
            </p>
          </div>
          <div className={Styles.social_media_strategy_content_cont}>
            <h2>Strategy & Goals</h2>
            <p>
              Before promoting any business, creating plot and design strategy
              is very important. Our team will collaborate with every client and
              understand their business and competitor also. We will be in touch
              with you to get know your target audience, the sort of audience
              they want to target, they want only fame or business. This is most
              important for us to know. Our team select target goal and the best
              techniques for scheduling and promotion through our Social Media
              platform.
            </p>

            <h2>Content Post & Management</h2>
            <p>
              Our objective is to develop and organize content that informs
              audience, entertains, and guides your audience with the help of
              content. Our team will schedule a calendar share with you and
              agency will create a range of postings, ranging from article and
              video sharing to industry news and corporate information, and
              schedule them at ideal times to maximize the number of people who
              view your material, pick of the time when client audience most
              active. We develop monthly content calendars to help you organize
              your announcements, important post, important. Our content will
              encourage your audience to participate when you have any giveaway,
              share, and follow your social activity by personalizing each post
              to suit your brand, that helps you in your branding.
            </p>

            <h2>Page Setup & Design</h2>
            <p>
              Our Social Media Management Agency will design an eye-catching
              graphics that clients and audience both will identify and enjoy as
              your brand, we create clients need and offer in a visual
              targeting. We understand what makes a high-quality and distinctive
              cover photo or profile image; we can develop visual material for
              you so you don't have to, which helps more audience connectivity.
            </p>

            <h2>Monitoring & Reporting</h2>
            <p>
              We are delighted to devote the time being dedicated to your
              clients and work with delicacy, responding to their questions and
              giving them information about their work, as well as keeping you
              updated of their preferences via reporting. We will provide you
              full statistics on the metrics of your social engagement every
              month, if client need reporting in working hour we will provide,
              giving you an in-depth look at the results of our actions we take
              to promote your business ambitions and give you report about our
              promises.
            </p>
          </div>
        </div>
      </section>

      <SeoAndForm />
    </Fragment>
  );
};

export default SocialMediaMarketing;
