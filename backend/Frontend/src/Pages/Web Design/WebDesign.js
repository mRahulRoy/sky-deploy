import React, { Fragment } from "react";
import Styles from "./web_design.module.css";

import Industries_We_Work from "../../components/Industries We Work With/IndustriesWeWork";


// image imports
import web_design from "../../img/web-design.png"
import customWebDesign from "../../img/custom-web-designing.png"
import responsiveWebDesign from "../../img/responsive-web-designing.png"
import dynamicWebsiteDesign from "../../img/dynamic-website-design.png"


import contraction from "../../img/contraction.png"

import { RiNodeTree } from "react-icons/ri"
import { BsBezier, BsTruck } from "react-icons/bs"
import { BiLayer } from "react-icons/bi"


const WebDesign = () => {
    return (
        <Fragment>
            
            <section className={Styles.page_header_container}>
                <div className={Styles.page_header}>
                    <div className={Styles.main_heading}>
                        <h1>Responsive Web Design Service Company</h1>
                        <p className={Styles.lead}>
                            Skywalk Technology is a top web and mobile design and development company that offers scalable web designing solutions across the verticals. Take your website to the next level with our lateral thinking. Our web designers work hard to fit your business needs by integrating the latest technologies and provide you with the best responsive web design services.
                        </p>
                    </div>
                    {/* <div className={Styles.plane_div}></div> */}
                </div>
            </section>



            {/* feature section  */}
            <section className={Styles.feature_section}>
                <div className={Styles.feature_wrapper}>
                    <div className={Styles.feature_heading}>
                        <h2>Why Your Business Need A Website ?</h2>
                    </div>
                    <div className={Styles.feature_content}>
                        <div className={Styles.left}>
                            <img src={web_design} alt="web design image" />
                        </div>
                        <div className={Styles.right}>
                            <p>SkyWalk Technology is a highly trusted web design company based in India, the USA and UAE. We provide comprehensive website design services with a customer-centric approach. We have a team of highly dedicated responsive web designers offering scalable and robust services globally. <br />
                                We provide complete website designing solutions from PSD to a responsive web design. We don’t just design, but also make sure to put our designed websites ahead in the market. Not to forget, the websites developed by us meets all the quality stands of Google, are SEO friendly, comes with load speed optimization, and are all browser compatible.</p>

                            <strong className={Styles.our_services}>We cater to services like:</strong>
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


            {/* Industries we work with section */}
            <Industries_We_Work/>
           

            {/*Second feature section starts */}
            <section className={Styles.our_features}>
                <div className={Styles.our_feature_wrapper}>
                    <div className={Styles.our_feature_heading}>
                        <h3>SkyWalk Technology Offers Customizable Responsive Website</h3>
                        <p>Partnering with a responsive website design company like SkyWalk Technology offers you an immaculate website while ensuring the right site features, web tools, and the required content you need to grow your organization. Wherever you are on this planet, look no farther than SkyWalk Technology. We are a trusted responsive website design company that can get your site running and responsive. It's not just the website, we create a seamless user experience that keeps them coming back and that’s the reason why we are recognized among leading web design companies.</p>
                    </div>
                    <div className={Styles.our_feature_cards}>
                        <div data-aos="zoom-in" data-aos-delay="100" className={Styles.card}>
                            <div className={Styles.img}>
                                <img src={responsiveWebDesign} alt="" />
                            </div>
                            <h3>Responsive web Designing</h3>
                            <p>We provide the most adaptive responsive design solutions to our clients while making it viable on all devices.</p>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="100" className={Styles.card}>

                            <div style={{ backgroundColor: "#def4ed" }} className={Styles.img}>
                                <img src={customWebDesign} alt="" />
                            </div>
                            <h3>Custom Web Designing</h3>
                            <p>We put our heart out to design websites that suit your business needs with ease of access to your customers.</p>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="100" className={Styles.card}>

                            <div style={{ backgroundColor: "#fcdde1" }} className={Styles.img}>
                                <img src={dynamicWebsiteDesign} alt="" />
                            </div>
                            <h3>Dynamic Website Design</h3>
                            <p>With our dynamic web design services, you get full control of a fine-tuned, functionally rich, interactive website.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* work process section starts here*/}
            <section className={Styles.work_process_section}>
                <div className={Styles.work_process_container}>
                    <div className={Styles.content_wrapper}>
                        <div className={Styles.heading}>
                            <h3>Process</h3>
                            <h2>Why Choose SkyWalk Technology For <br /> Your Innovative Services</h2>
                            <p>We deliver multidimensional offerings besides our unmatched core <br /> principles, which will lead any company undertaking to its new heights.</p>
                        </div>
                        <div className={Styles.content_section}>
                            <div className={Styles.images_section}>
                                <img src={contraction} alt="contraction image" />
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
                                    <div className={Styles.line}></div>
                                    <div className={Styles.timeline_icon}>
                                        <BsTruck className={Styles.ic} />
                                    </div>



                                </div>
                                <div className={Styles.text_cont}>
                                    <div>
                                        <h2>Customized Options</h2>
                                        <p>We make sure to provide our valuable customers with loads of customized options that come with their features.</p>
                                    </div>
                                    <div>
                                        <h2>                                            Dynamic Marketing Strategies</h2>
                                        <p>We ensure to provide you with the most optimal marketing strategies that are scalable along with your valuable enterprise.</p>
                                    </div>
                                    <div>
                                        <h2>Powerful Code</h2>
                                        <p>Our codes are lightweight, yet they manage to be powerful enough to break the stereotypes of lightweight codes.</p>
                                    </div>
                                    <div>
                                        <h2>Bug-Free Applications</h2>
                                        <p>After releasing the app, we make sure to update it and keep a tab on the community built around it.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </Fragment>
    )
}

export default WebDesign;
