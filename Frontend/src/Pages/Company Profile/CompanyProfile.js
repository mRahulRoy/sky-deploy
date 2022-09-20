import React, { Fragment } from "react";
import Styles from "./company_profile.module.css";
import { Link, NavLink } from "react-router-dom";
import ReactStars from "react-stars";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import aboutImg1 from "../../img/about-img-1.jpg";
import aboutImg2 from "../../img/about-img-2.jpg";
import aboutImg3 from "../../img/about-img-3.jpg";
import award1 from "../../img/awards-01.png";
import award2 from "../../img/awards-02.png";
import shapewave from "../../img/shape/dot-dot-wave-shape.png";
import colorCircle from "../../img/color-shape/feature-3.png";
import featureimg3 from "../../img/feature-img3.jpg";
import dottedSquare from "../../img/testimonial/quotes-dot.png";
// import shape from "../../img/color_shape/image_2.png"

// icons import
import { RiNodeTree } from "react-icons/ri";
import { FaFingerprint } from "react-icons/fa";
import { RiSettings5Fill } from "react-icons/ri";
import { AiFillCheckSquare, AiFillStar } from "react-icons/ai";

// icons
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsPlayCircle } from "react-icons/bs";

// testimonial users icons
import user1 from "../../img/testimonial/1.jpg";
import user2 from "../../img/testimonial/2.jpg";
import user3 from "../../img/testimonial/3.jpg";
import user4 from "../../img/testimonial/4.jpg";
import user5 from "../../img/testimonial/5.jpg";
import user6 from "../../img/testimonial/6.jpg";
import user7 from "../../img/testimonial/1.jpg";
import user8 from "../../img/testimonial/2.jpg";

// office images
import officeImage1 from "../../img/office-img-1.jpg";
import officeImage2 from "../../img/office-img-2.jpg";
import officeImage3 from "../../img/office-img-3.jpg";
import officeImage5 from "../../img/office-img-5.jpg";

const CompanyProfile = () => {
  return (
    <Fragment>
    
      {/* about page section starts */}
      <div className={Styles.about_page_section}>
        <div className={Styles.main_wrapper}>
          <div className={Styles.about_page_container}>
            <div className={Styles.about_page_content}>
              <div className={Styles.cont1}>
                <h2>About us</h2>
                <p>We live and breathe digital. The Internet is our home.</p>
                <div className={Styles.btns}>
                  <button className="">View Portfolio</button>
                  <button className="">Meet our team</button>
                </div>
              </div>

              <div className={Styles.cont2}>
                <img src={aboutImg1} alt="about image" />
              </div>
            </div>
            <div className={Styles.image}>
              <img src={aboutImg2} alt="about image" />
              <img src={aboutImg3} alt="about image" />
            </div>
          </div>
        </div>
        <div className={Styles.vacant}>
          <div className={Styles.temp_image}>
            <img src={aboutImg2} alt="about image" />
            <img src={aboutImg3} alt="about image" />
          </div>
        </div>
      </div>

      {/* our story section starts */}
      <section
        style={{ backgroundImage: `url(${shapewave}) ` }}
        className={Styles.our_story_wrapper}
      >
        <div className={Styles.story_wrapper_main}>
          <div className={Styles.story_content}>
            <div
              className={Styles.numbers}
              style={{ backgroundImage: `url(${colorCircle})` }}
            >
              <div
                className={Styles.number_box}
                style={{ backgroundColor: "#010e2b", color: "#5cc9a7" }}
              >
                <h2>550K</h2>
                <p style={{ color: "#fff" }}>Active Users</p>
              </div>
              <div
                className={Styles.number_box}
                style={{ backgroundColor: "#fff", color: "#175cff" }}
              >
                <h2>250+</h2>
                <p style={{ color: "black" }}>Team Members</p>
              </div>
              <div
                className={Styles.number_box}
                style={{ backgroundColor: "#fff" }}
              >
                <h2 style={{ color: "#0b163f" }}>$20M+</h2>
                <p>Revenue Per/Year</p>
              </div>
              <div
                className={Styles.number_box}
                style={{ backgroundColor: "#010e2b" }}
              >
                <h2 style={{ color: "#ffb116" }}>8 Years</h2>
                <p style={{ color: "#fff" }}>In Business</p>
              </div>
              <div
                className={Styles.number_box}
                style={{ backgroundColor: "#010e2b" }}
              >
                <h2 style={{ color: "#f25767" }}>425+</h2>
                <p style={{ color: "#fff" }}>Clients Worldwide</p>
              </div>
              <div
                className={Styles.number_box}
                style={{ backgroundColor: "#fff", color: "black" }}
              >
                <h2 style={{ color: "#175cff" }}>855+</h2>
                <p>Projects Completed</p>
              </div>
            </div>
            <div className={Styles.story_cont}>
              <h3>About Skywalk</h3>
              <h2>Why Choose Skywalk For Digital Marketing Solution</h2>
              <p>
                A full-service digital marketing firm is Skywalk. Since 2019, we
                have offered a variety of services to customers across different
                sectors. For a number of online marketing strategies, such as
                search engine optimization (SEO), pay-per-click (PPC)
                advertisements, copywriting, conversion rate optimization (CRO),
                and more, we provide consultancy and management solutions as
                part of our digital marketing services. Additionally, we provide
                professional web design and development services for both B2B
                and eCommerce businesses. Make sure the digital marketing agency
                you choose is one you can trust before partnering with them.
              </p>
              <div className={Styles.our_awards}>
                <h2>Our Awards</h2>
                <div className={Styles.award_images}>
                  <img src={award1} alt="award picture" />
                  <img src={award2} alt="award picture" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we work Section */}

      <section className={Styles.how_we_work_section}>
        <div className={Styles.work_container}>
          <div className={Styles.work_content_wrapper}>
            <h2>How We Work</h2>
            <ul className={Styles.lists_cont}>
              <li>
                <span style={{ backgroundColor: "#0d6efd" }}>
                  <RiNodeTree className={Styles.icon} />
                </span>
                Analyses business
              </li>
              <li>
                <span style={{ backgroundColor: "#ff000096" }}>
                  <FaFingerprint className={Styles.icon} />
                </span>
                Understand competitor and market
              </li>
              <li>
                <span style={{ backgroundColor: "rgb(1, 14, 43)" }}>
                  <RiSettings5Fill
                    className={`${Styles.icon} ${Styles.gear}`}
                  />
                </span>
                You Talk, We Listen
              </li>
              <li>
                <span style={{ backgroundColor: "rgb(1, 14, 43)" }}>
                  <RiSettings5Fill
                    className={`${Styles.icon} ${Styles.gear}`}
                  />
                </span>
                Study on your requirement
              </li>
              <li>
                <span style={{ backgroundColor: "rgb(1, 14, 43)" }}>
                  <RiSettings5Fill
                    className={`${Styles.icon} ${Styles.gear}`}
                  />
                </span>
                Plan a strategy
              </li>
              <li>
                <span style={{ backgroundColor: "rgb(1, 14, 43)" }}>
                  <RiSettings5Fill
                    className={`${Styles.icon} ${Styles.gear}`}
                  />
                </span>
                Deliver you result
              </li>
            </ul>
          </div>

          <div className={Styles.work_img_section}>
            <img src={featureimg3} alt="featured image" />
            <div className={Styles.reach_us}>
              <div className={`${Styles.phone} ${Styles.box}`}>
                <span>
                  <AiFillCheckSquare className={Styles.icon} />
                </span>
                <h6>
                  Call Us : <a href="tel:91-990-578-2584">91-990-578-2584</a>
                </h6>
              </div>
              <div className={` ${Styles.email} ${Styles.box}`}>
                <span>
                  <AiFillCheckSquare className={Styles.icon} />
                </span>
                <a
                  href="mailto:support@skywalktech.in"
                  className={`${Styles.btn} ${Styles.btn_primary} ${Styles.mt_auto}`}
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonial section */}
      <section className={Styles.testimonial_section}>
        <div className={Styles.testimonial_wrapper}>
          <div className={Styles.testimonial_heading}>
            <h3>Testimonial</h3>
            <h2>What They Say About Us</h2>
            <p>Our Clients’ Appreciation Speaks Volume Of Our Success.</p>
          </div>

          <div className={Styles.testimonial_content_wrapper}>
            {/* Testimonial 1 */}

            <Swiper
              // install Swiper modules
              className={Styles.swiper}
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: false, hide: true }}
              // onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log("slide change")}
              breakpoints={{
                140: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            >
              <SwiperSlide>
                <div className={Styles.testimonial}>
                  <div className={Styles.void}></div>
                  <div className={Styles.about_user}>
                    <img src={user1} alt="user picture" />
                    <img
                      src={dottedSquare}
                      alt="dotted square"
                      style={{
                        width: "70px",
                        zIndex: "1",
                        left: "15px",
                        top: "16px",
                        borderRadius: "0%",
                        boxShadow: "none",
                      }}
                    />
                    <h2>Oberoi R.</h2>
                    <h3>Embarrassed by the First Version.</h3>
                    <ReactStars
                      value={5}
                      count={5}
                      size={20}
                      edit={false}
                      half={true}
                      color2={"#ffd700"}
                    />
                    <h6>
                      Getting my app developed was quite demanding for me
                      because converting my idea to convert into a live project
                      was really a task. In such a challenging environment,
                      SkyWalk Technology guided me to find the best
                      possibilities to launch my first application and go live.
                    </h6>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.testimonial}>
                  <div className={Styles.void}></div>
                  <div className={Styles.about_user}>
                    <img src={user2} alt="user picture" />
                    <img
                      src={dottedSquare}
                      alt="dotted square"
                      style={{
                        width: "70px",
                        zIndex: "1",
                        left: "15px",
                        top: "16px",
                        borderRadius: "0%",
                        boxShadow: "none",
                      }}
                    />
                    <h2>Oberoi R.</h2>
                    <h3>Embarrassed by the First Version.</h3>
                    <ReactStars
                      value={5}
                      count={5}
                      size={20}
                      edit={false}
                      half={true}
                      color2={"#ffd700"}
                    />
                    <h6>
                      Getting my app developed was quite demanding for me
                      because converting my idea to convert into a live project
                      was really a task. In such a challenging environment,
                      SkyWalk Technology guided me to find the best
                      possibilities to launch my first application and go live.
                    </h6>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.testimonial}>
                  <div className={Styles.void}></div>
                  <div className={Styles.about_user}>
                    <img src={user3} alt="user picture" />
                    <img
                      src={dottedSquare}
                      alt="dotted square"
                      style={{
                        width: "70px",
                        zIndex: "1",
                        left: "15px",
                        top: "16px",
                        borderRadius: "0%",
                        boxShadow: "none",
                      }}
                    />
                    <h2>Oberoi R.</h2>
                    <h3>Embarrassed by the First Version.</h3>
                    <ReactStars
                      value={5}
                      count={5}
                      size={20}
                      edit={false}
                      half={true}
                      color2={"#ffd700"}
                    />
                    <h6>
                      Getting my app developed was quite demanding for me
                      because converting my idea to convert into a live project
                      was really a task. In such a challenging environment,
                      SkyWalk Technology guided me to find the best
                      possibilities to launch my first application and go live.
                    </h6>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.testimonial}>
                  <div className={Styles.void}></div>
                  <div className={Styles.about_user}>
                    <img src={user4} alt="user picture" />
                    <img
                      src={dottedSquare}
                      alt="dotted square"
                      style={{
                        width: "70px",
                        zIndex: "1",
                        left: "15px",
                        top: "16px",
                        borderRadius: "0%",
                        boxShadow: "none",
                      }}
                    />
                    <h2>Oberoi R.</h2>
                    <h3>Embarrassed by the First Version.</h3>
                    <ReactStars
                      value={5}
                      count={5}
                      size={20}
                      edit={false}
                      half={true}
                      color2={"#ffd700"}
                    />
                    <h6>
                      Getting my app developed was quite demanding for me
                      because converting my idea to convert into a live project
                      was really a task. In such a challenging environment,
                      SkyWalk Technology guided me to find the best
                      possibilities to launch my first application and go live.
                    </h6>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.testimonial}>
                  <div className={Styles.void}></div>
                  <div className={Styles.about_user}>
                    <img src={user5} alt="user picture" />
                    <img
                      src={dottedSquare}
                      alt="dotted square"
                      style={{
                        width: "70px",
                        zIndex: "1",
                        left: "15px",
                        top: "16px",
                        borderRadius: "0%",
                        boxShadow: "none",
                      }}
                    />
                    <h2>Oberoi R.</h2>
                    <h3>Embarrassed by the First Version.</h3>
                    <ReactStars
                      value={5}
                      count={5}
                      size={20}
                      edit={false}
                      half={true}
                      color2={"#ffd700"}
                    />
                    <h6>
                      Getting my app developed was quite demanding for me
                      because converting my idea to convert into a live project
                      was really a task. In such a challenging environment,
                      SkyWalk Technology guided me to find the best
                      possibilities to launch my first application and go live.
                    </h6>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.testimonial}>
                  <div className={Styles.void}></div>
                  <div className={Styles.about_user}>
                    <img src={user6} alt="user picture" />
                    <img
                      src={dottedSquare}
                      alt="dotted square"
                      style={{
                        width: "70px",
                        zIndex: "1",
                        left: "15px",
                        top: "16px",
                        borderRadius: "0%",
                        boxShadow: "none",
                      }}
                    />
                    <h2>Oberoi R.</h2>
                    <h3>Embarrassed by the First Version.</h3>
                    <ReactStars
                      value={5}
                      count={5}
                      size={20}
                      edit={false}
                      half={true}
                      color2={"#ffd700"}
                    />
                    <h6>
                      Getting my app developed was quite demanding for me
                      because converting my idea to convert into a live project
                      was really a task. In such a challenging environment,
                      SkyWalk Technology guided me to find the best
                      possibilities to launch my first application and go live.
                    </h6>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.testimonial}>
                  <div className={Styles.void}></div>
                  <div className={Styles.about_user}>
                    <img src={user7} alt="user picture" />
                    <img
                      src={dottedSquare}
                      alt="dotted square"
                      style={{
                        width: "70px",
                        zIndex: "1",
                        left: "15px",
                        top: "16px",
                        borderRadius: "0%",
                        boxShadow: "none",
                      }}
                    />
                    <h2>Oberoi R.</h2>
                    <h3>Embarrassed by the First Version.</h3>
                    <ReactStars
                      value={5}
                      count={5}
                      size={20}
                      edit={false}
                      half={true}
                      color2={"#ffd700"}
                    />
                    <h6>
                      Getting my app developed was quite demanding for me
                      because converting my idea to convert into a live project
                      was really a task. In such a challenging environment,
                      SkyWalk Technology guided me to find the best
                      possibilities to launch my first application and go live.
                    </h6>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.testimonial}>
                  <div className={Styles.void}></div>
                  <div className={Styles.about_user}>
                    <img src={user8} alt="user picture" />
                    <img
                      src={dottedSquare}
                      alt="dotted square"
                      style={{
                        width: "70px",
                        zIndex: "1",
                        left: "15px",
                        top: "16px",
                        borderRadius: "0%",
                        boxShadow: "none",
                      }}
                    />
                    <h2>Oberoi R.</h2>
                    <h3>Embarrassed by the First Version.</h3>
                    <ReactStars
                      value={5}
                      count={5}
                      size={20}
                      edit={false}
                      half={true}
                      color2={"#ffd700"}
                    />
                    <h6>
                      Getting my app developed was quite demanding for me
                      because converting my idea to convert into a live project
                      was really a task. In such a challenging environment,
                      SkyWalk Technology guided me to find the best
                      possibilities to launch my first application and go live.
                    </h6>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* our office section */}
      <section className={Styles.our_office_section}>
        <div className={Styles.our_office}>
          <div className={Styles.our_office_heading}>
            <h3>Our Office</h3>
            <h2>Visit Our Work Places</h2>
          </div>
          <div className={Styles.office}>
            <figure className={Styles.snip0015}>
              <img src={officeImage1} />
              <figcaption>
                <h2>Gurugram, India</h2>
                <p>B_850, Spaze IT Park, Sec_49, Gurugram, Haryana, Indi</p>
              </figcaption>
            </figure>

            <figure className={Styles.snip0015}>
              <img src={officeImage2} alt="sample39" />
              <figcaption>
                <h2>Up, India</h2>
                <p>Sec_63, Noida Utter Pradesh India</p>
              </figcaption>
            </figure>

            <figure className={Styles.snip0015}>
              <img src={officeImage3} />
              <figcaption>
                <h2>Philippines</h2>
                <p>Philippines</p>
              </figcaption>
            </figure>
            <figure className={Styles.snip0015}>
              <img src={officeImage5} />
              <figcaption>
                <h2>Coming Soon</h2>
                <p>starting soon</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* trial section */}
      <section className={Styles.trial_section}>
        <div className={Styles.subscription_wrapper}>
          <div className={Styles.start_trial_text}>
            <h3>Let's Try! Get Free Support</h3>
            <h2>Start Your 14 Day Free Trial</h2>
            <p>
              We can help you to create your dream website for better business
              revenue.
            </p>
          </div>

          <div className={Styles.subscribe_cont}>
            <NavLink className={Styles.link} to="/contact-us">Contact with us</NavLink>
            <div className={Styles.playbox}>
              <span>
                <BsPlayCircle style={{ color: "white" }} />
              </span>
              <p> watch Demo</p>
            </div>
          </div>

          <div className={Styles.subscribe_feature_list}>
            <ul>
              <li>
                <AiOutlineCheckCircle
                  style={{
                    color: "white",
                    marginRight: "10px",
                    fontSize: "1.5rem",
                  }}
                />
                Free 14_day trial
              </li>
              <li>
                <AiOutlineCheckCircle
                  style={{
                    color: "white",
                    marginRight: "10px",
                    fontSize: "1.5rem",
                  }}
                />
                No credit card required
              </li>
              <li>
                <AiOutlineCheckCircle
                  style={{
                    color: "white",
                    marginRight: "10px",
                    fontSize: "1.5rem",
                  }}
                />
                Support 24/7
              </li>
              <li>
                <AiOutlineCheckCircle
                  style={{
                    color: "white",
                    marginRight: "10px",
                    fontSize: "1.5rem",
                  }}
                />
                Cancel anytime
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default CompanyProfile;
