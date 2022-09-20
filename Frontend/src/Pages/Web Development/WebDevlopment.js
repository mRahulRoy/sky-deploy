import React, { Fragment } from "react";

import Styles from "./web_development.module.css"



// image imports
import web_design_service from "../../img/website development service.svg"
import realEstate from "../../img/real-estate.png"
import tourTravels from "../../img/tour-travels.png";
import education from "../../img/education.png";
import transport from "../../img/transport.png";
import events from "../../img/events.png";
import eCommerce from "../../img/ecommmerce.png";
import game from "../../img/game.png";
import healthcare from "../../img/healthcare.png";
import finance from "../../img/finance.png";
import restaurant from "../../img/restaurant.png";
import onDemand from "../../img/on-demand.png";
import grocery from "../../img/grocery.png";
import jewelry from "../../img/jewelry.png";
import automobile from "../../img/automobile.png";
import fitnessCenter from "../../img/fitness-center.png";
import blob from "../../img/shape/blob.png"

import factorsWebDev from "../../img/factors_webd_evelopment.png"

import contentManagementSystem from "../../img/content-management-system.png"
import socialMedia from "../../img/social_media.png"
import webApplication from "../../img/web-application.png"
import mobileApplication from "../../img/mobile-application.png"
import mobileOptimizedApp from "../../img/mobile-optimized-website.png"
import docManagmentSystem from "../../img/document-management-system.png"






const WebDevlopment = () => {


    return (
        <Fragment>
             
            {/*top page header starts here */}
            <section className={Styles.page_header_container}>
                <div className={Styles.page_header}>
                    <div className={Styles.main_heading}>
                        <h1>Top Website Development Company</h1>
                        <p className={Styles.lead}>
                            SkyWalk Technology is a top web and mobile design and development company that offers scalable web development solutions across the verticals. SkyWalk is the top web development company offering expandable website development services across verticals
                        </p>
                    </div>

                </div>
            </section>


            {/* feature section  */}
            <section className={Styles.web_feature_section}>
                <div className={Styles.web_feature_wrapper}>
                    <div className={Styles.web_feature_heading}>
                        <h2>Best Web Development Services</h2>
                    </div>
                    <div className={Styles.web_feature_content}>
                        <div className={Styles.left}>
                            <img src={web_design_service} alt="web design image" />
                        </div>
                        <div className={Styles.right}>
                            <p>SkyWalk Technology is an established web development company that provides far-reaching web development services with customer pivotal access. We have a team of highly purposeful web developers offering adaptable and vital web services globally. Our web developers are skillful in providing custom, built and highly expandable websites.
                                Our team of web developers has more than 5+ years of experience and expertise in straight-up domains. They are accomplished with the latest technologies and tools to deliver absolute website development services. Our web development team is formative and forward-looking when you think of present-day technologies and trends. We provide complete web development results from design, development, testing to launch.</p>

                        </div>
                    </div>
                </div>
            </section>


            {/* industries we work with */}

            <section style={{ backgroundImage: `url(${blob})` }} className={Styles.industries_work_section}>
                <div className={Styles.industry_work_wrapper}>
                    <div className={Styles.industry_heading}>
                        <h3>Industries We work with</h3>
                        <p>Regardless of whether you need an app for banking & finance, healthcare, online food delivery, or gaming domain, we always keep up with you by delivering the best mobile application services and by adjoining your dreams with reality.</p>
                    </div>
                    <div className={Styles.deals_with_cont}>
                        <div data-aos="zoom-in" data-aos-delay="100" className={Styles.field}>
                            <img src={realEstate} alt="Real estate" />
                            <h6>Real Estate</h6>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="100" className={Styles.field}>
                            <img src={tourTravels} alt="Real estate" />
                            <h6>Tour & Travels</h6>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="100" className={Styles.field}>
                            <img src={transport} alt="Real estate" />
                            <h6>Transport</h6>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="100" className={Styles.field}>
                            <img src={events} alt="Real estate" />
                            <h6>Events</h6>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="100" className={Styles.field}>
                            <img src={eCommerce} alt="Real estate" />
                            <h6>Ecommerce</h6>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="100" className={Styles.field}>
                            <img src={game} alt="Real estate" />
                            <h6>Game</h6>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="100" className={Styles.field}>
                            <img src={healthcare} alt="Real estate" />
                            <h6>Health Care</h6>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="100" className={Styles.field}>
                            <img src={finance} alt="Real estate" />
                            <h6>Finance</h6>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="100" className={Styles.field}>
                            <img src={restaurant} alt="Real estate" />
                            <h6>Restraunt</h6>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="100" className={Styles.field}>
                            <img src={onDemand} alt="Real estate" />
                            <h6>On-Demand</h6>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="100" className={Styles.field}>
                            <img src={grocery} alt="Real estate" />
                            <h6>Grocery</h6>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="100" className={Styles.field}>
                            <img src={jewelry} alt="Real estate" />
                            <h6>Jwelery</h6>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="100" className={Styles.field}>
                            <img src={education} alt="Real estate" />
                            <h6>Education</h6>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="100" className={Styles.field}>
                            <img src={automobile} alt="Real estate" />
                            <h6>Automobile</h6>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="100" className={Styles.field}>
                            <img src={fitnessCenter} alt="Real estate" />
                            <h6>Fitness Center</h6>
                        </div>
                    </div>
                </div>
            </section>

            {/*Second feature section starts */}
            <section className={Styles.our_features}>
                <div className={Styles.our_feature_wrapper}>
                    <div className={Styles.our_feature_heading}>
                        <h3>Web Development Service Provider</h3>
                        <p>We specialize in developing reliable and creative web development solutions that are completely scalable, catering to both simple and complex website requirements. With our minimizing cost, we provide a range of online solutions. Our website development process include:</p>
                        <ul>
                            <li><span>Technical Assessment:</span> Here we formulate the situation, goals, and requirements as per the idea.</li>
                            <li><span>Planning: </span>Creating a tech strategy is crucial, as we work on it.</li>
                            <li><span>Information Architecture + Design + Content:</span>We make sure everything falls into its place.</li>

                            <li><span>Coding:</span> Get ready to get impeccable front and back-end coding.</li>
                            <li><span>QA:</span>Testing is vital and so does our teams run tests over 100 checkpoints to be assured.</li>
                            <li><span>CMS Training + Launch: </span>You learn how to operate and we hand over the keys with love.</li>

                        </ul>
                    </div>
                    <div className={Styles.our_feature_cards}>
                        <div data-aos="zoom-in" data-aos-delay="100" className={Styles.card}>
                            <div className={Styles.img}>
                                <img src={contentManagementSystem} alt="" />
                            </div>
                            <h3>Responsive web Designing</h3>
                            <p>We provide the most adaptive responsive design solutions to our clients while making it viable on all devices.</p>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="100" className={Styles.card}>

                            <div className={Styles.img}>
                                <img src={socialMedia} alt="" />
                            </div>
                            <h3>Custom Web Designing</h3>
                            <p>We put our heart out to design websites that suit your business needs with ease of access to your customers.</p>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="100" className={Styles.card}>

                            <div className={Styles.img}>
                                <img src={webApplication} alt="" />
                            </div>
                            <h3>Dynamic Website Design</h3>
                            <p>With our dynamic web design services, you get full control of a fine-tuned, functionally rich, interactive website.</p>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="100" className={Styles.card}>

                            <div className={Styles.img}>
                                <img src={mobileApplication} alt="" />
                            </div>
                            <h3>Dynamic Website Design</h3>
                            <p>With our dynamic web design services, you get full control of a fine-tuned, functionally rich, interactive website.</p>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="100" className={Styles.card}>

                            <div className={Styles.img}>
                                <img src={mobileOptimizedApp} alt="" />
                            </div>
                            <h3>Dynamic Website Design</h3>
                            <p>With our dynamic web design services, you get full control of a fine-tuned, functionally rich, interactive website.</p>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="100" className={Styles.card}>

                            <div className={Styles.img}>
                                <img src={docManagmentSystem} alt="" />
                            </div>
                            <h3>Dynamic Website Design</h3>
                            <p>With our dynamic web design services, you get full control of a fine-tuned, functionally rich, interactive website.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Third feature section starts froom here */}
            {/* feature section  */}
            <section className={Styles.web_feature_section}>
                <div className={Styles.web_feature_wrapper}>
                    <div className={Styles.web_feature_heading}>

                        <h2>Why Go For Web Development?</h2>
                    </div>
                    <div className={Styles.web_feature_content}>
                        <div className={Styles.left}>
                            <img src={factorsWebDev} alt="web design image" />
                        </div>
                        <div className={Styles.right} >
                            <p>In the world of technological transformation, the significance of the digital world needs no confession. We all know that a website is of great importance to the businesses and it can rightly drive surged conversions rates and better sales.
                                <br/> 
                                In short, an efficiently curated website can help your business to raise product awareness, manage communication between you and possible clients, help in selling the products and services, generate leads for the company, and more importantly boost the reputation of your company.

                                The factors of Web development include:
                                Cost-effective
                                Increasing credibility
                                Enhanced marketing
                                Better customer service
                                Easy Maintenance
                                Cross-Platform Capabilities
                                With our passionate team of web developers, we promise to deliver you exceptional web development services.
                                web development agency gurgaon.</p>

                            <strong style={{ color: "#071c4d" }} className={Styles.our_services}>We cater to services like:</strong>
                            <ul>
                                <li>Custom Web Design</li>
                                <li>UX/UI Design</li>
                                <li>Mobile App Design</li>
                                <li>e-Commerce Website Design</li>
                                <li>Wordpress Website Design</li>
                                <li>Website Speed Optimization</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>



        </Fragment>
    )
}

export default WebDevlopment;