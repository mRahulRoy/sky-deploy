import React, { Fragment } from "react";
import Styles from "./content_marketing.module.css";

// page component imports
import SeoAndForm from "../Subscribe and Seo Section/SeoAndForm";
// images imports
import contentDevelopment from "../../img/Content marketing service_vector_img.svg";
import whychoose from "../../img/why_choose.png";
import { BiShareAlt } from "react-icons/bi";
import { AiFillFileText } from "react-icons/ai";
import { FaSyncAlt } from "react-icons/fa";
import { MdSpellcheck } from "react-icons/md";
const ContentMarketing = () => {
  return (
    <Fragment>
      {/*top page header starts here */}
      <section className={Styles.page_header_container}>
        <div className={Styles.page_header}>
          <div className={Styles.main_heading}>
            <h1>Content writing Services by Skywalk Technology</h1>

            <p className={Styles.lead}>
              Design top-level content that converts audience and attracts more
              organic search traffic on website. Our content marketing agency
              focus on keyword research strategy, content strategy development,
              content planning, content writing and content marketing at the
              backend to help you reach out to untapped demographics and build
              up your reputation in your specific targeted market and connect
              with audience which the help of readable and engaging content for
              website.
            </p>
          </div>
        </div>
      </section>

      {/* feature section  */}
      <section className={Styles.content_writing_feature_section}>
        <div className={Styles.content_writing_feature_wrapper}>
          <div className={Styles.content_writing_feature_cont}>
            <div className={Styles.left}>
              <img src={contentDevelopment} alt="content development" />
            </div>
            <div className={Styles.right}>
              <h2>What are Content Marketing Services?</h2>
              <ul>
                <li>
                  <span>Content writing</span> is the process of mapping out
                  ideas and developing website content that meets search engine
                  optimization (SEO) guidelines and audience to, which are
                  engaging and eye catching too. Websites require quality SEO
                  content to represent business brand or services on search
                  engine platform, if you want your website to put your positive
                  impact and reputed brand image and achieve your sales goals
                  online, you must produce descriptive, original, and
                  understandable and SEO friendly content which are relatable to
                  audience, and this can be done by best SEO content writer
                  company in India Skywalk Technology.
                </li>
                <li>
                  <span> Content marketing services</span> provide companies and
                  marketers with the content, strategy, tools and evaluation
                  necessary to support marketing programmes. These may include
                  creating a strategy, developing marketing materials,
                  implementing content marketing campaigns, measuring campaign
                  results and making recommendations for the future of the
                  marketing strategy. The types of content may include blog
                  articles, guest posts, social media posts, videos and
                  animations, white papers, case studies, infographics and more
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* feature section  */}
      <section className={Styles.feature_section}>
        <div className={Styles.feature_wrapper}>
          <div className={Styles.feature_content}>
            <div className={Styles.left}>
              <img src={whychoose} alt="content development" />
            </div>
            <div className={Styles.right}>
              <h2>Why Rely on Us for Content Marketing?</h2>
              <p>
                Our scope and area of expertise in the design of content
                marketing strategies have already been covered in our large list
                of customer testimonials. In addition, we take all the necessary
                steps to ensure that your business receives the widest possible
                client base online.
              </p>
              <ul>
                <li>
                  We provide end-to-end content solutions, right from
                  copywriting to editing, management, and distribution.
                </li>

                <li>
                  As industry pioneers, we adhere to a tried-and-true technique
                  that has previously been applied to produce hundreds of
                  profitable pieces of content for a diverse clientele.
                </li>

                <li>
                  We believe in catering solutions that are tailor-made for the
                  client’s business requirements.
                </li>
                <li>
                  Our group includes skilled copywriters, editors, and marketers
                  who adhere to best practices to produce greatness.
                </li>
                <li>
                  Our focus is to make high-quality content affordable and
                  accessible to all.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe letter  */}
      <SeoAndForm />

      {/*fourth feature section starts */}
      <section className={Styles.our_features}>
        <div className={Styles.our_feature_wrapper}>
          <div className={Styles.our_feature_heading}>
            <h3>What Types of Marketing Content Does Skywalk Deliver?</h3>
            <p>
              Our writers and content marketers plan each blog post with your
              input and the help of our search engine optimization expertise,
              conducting keyword research to make sure that the topics, titles,
              keywords, and formatting appeal to your target audience, support
              your digital content marketing strategy, and advance your business
              objectives. Our goal is to produce informative and interesting
              material for readers while adhering to best standards for SEO
              content development. After the material has been written, revised,
              approved, and published, our strategists evaluate its
              effectiveness. With the help of these analytics, your content
              production team can maximise the benefits of its inbound marketing
              initiatives for your company and use this information to guide
              future blog articles and other forms of content.
            </p>
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
              <h3>Creation of Blog Content</h3>
              <p>
                Our writers and content marketers plan each blog post with your
                input and the help of our search engine optimization expertise,
                conducting keyword research to make sure that the topics,
                titles, keywords, and formatting appeal to your target audience,
                support your digital content marketing strategy, and advance
                your business objectives. Our goal is to produce informative and
                interesting material for readers while adhering to best
                standards for SEO content development
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
              <h3>White Papers & eBooks</h3>
              <p>
                White papers and eBooks from Skywalk are the foundation of a
                successful content marketing campaign. These content marketing
                assets for the middle and bottom of the funnel may be gated to
                gather contact information from potential clients. eBooks
                combine bite-sized, useful information with engaging text and
                attractive bespoke visuals to create a true combination of the
                infographic and white paper. They are fantastic at drawing in
                and keeping audience members' interest.
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
              <h3>Designing infographics </h3>
              <p>
                Infographics created by Skywalk turn data into compelling
                digital narrative. With the help of content writers, marketing
                strategists, and project managers, graphic designers construct
                an engaging, brand-focused story that simplifies complicated
                subjects into understandable visual information using 2D images,
                characters, drawings, and stylized iconography. The infographics
                from Skywalk are available in a range of sizes, and they work
                well when published in resource centers, utilized in marketing
                automation, and integrated in blog posts in their full form
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
              <h3>Video Content Production
</h3>
              <p>
              The in-house video gurus at Skywalk produce a wide range of material, including in-studio video blogs, how-to instructions, animated explainer films, and man-on-the-street interviews. An effective video may be a key component of any content marketing campaign. We hand-craft each video product in accordance with company goals, guidelines, and preferences to maximise marketing efforts in the shortest amount of time, whether it is used as bottom-of-funnel testimonials to close purchases or top-of-funnel testimonials to increase audience interest.

              </p>
            </div>
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
              <h3>Site Content & Case Studies
</h3>
              <p>
              Skywalk case studies demonstrate the advantages of its goods and services by succinctly stating their advantages while utilizing actual situations to demonstrate customer capabilities. Data-focused success stories demonstrate the potential of a brand via client feedback, staff interviews, and data analysis. Case studies are structured to increase visual appeal among middle-of-the-funnel prospects, similar to eBooks and white papers.

              </p>
            </div>
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
              <h3> Email Marketing Services

</h3>
              <p>
              Our content marketers produce newsletters that captivate readers and expand your email list using data-driven knowledge and marketing best practices. Additionally, utilizing email templates with personalized artwork and CTAs, writers create press releases and marketing emails to disseminate information about brand changes, events, and campaigns across distribution lists. From brand awareness to thought leadership to lead generation, newsletter and other email content is designed from the ground up to serve your digital marketing needs 



              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ContentMarketing;
