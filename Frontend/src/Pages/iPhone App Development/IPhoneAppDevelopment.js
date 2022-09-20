import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Styles from "./iphone_app_dev.module.css";
import Industries_We_Work from "../../components/Industries We Work With/IndustriesWeWork";
// Image Imports
import { RiNodeTree } from "react-icons/ri"
import iPhone from "../../img/i-phone.png";
import mobile from "../../img/getafixapp.png"
import swift from "../../img/swift.png"
import object from "../../img/object.png"
import xCode from "../../img/x-code.png"




const IPhoneAppDevelopment = () => {
    return (
        <Fragment>
     
            {/*top page header starts here */}
            <section className={Styles.page_header_container}>
                <div className={Styles.page_header}>
                    <div className={Styles.main_heading}>
                        <h1>Professional Digital Marketing Service Provider</h1>

                        <p className={Styles.lead}>
                        SkyWalk Technology is a top digital marketing company that offers scalable marketing solutions across verticals. SkyWalk Technology is a leading digital marketing agency that focuses on promoting businesses online to capture the attention of their potential customers. With the help of SEO, PPC, social media marketing, and other internet marketing services, we aim to increase conversions, traffic to the website, or both.
                        </p>
                    </div>

                </div>
            </section>




            {/* feature section  */}
            <section className={Styles.iphone_feature_section}>
                <div className={Styles.iphone_feature_wrapper}>
                    <div className={Styles.iphone_feature_heading}>

                        <h2>IPhone App Development Service Provider</h2>
                    </div>
                    <div className={Styles.iphone_feature_content}>
                        <div className={Styles.left}>
                            <img src={iPhone} alt="web design image" />
                        </div>
                        <div className={Styles.right} >
                            <p>
                                SkyWalk Technology is a highly trusted iPhone application development company that provides comprehensive mobile app development services with a customer-centric approach. We have a team of highly dedicated iPhone app developers offering scalable and robust iPhone app development services globally.
                                <br />
                                Our iPhone application development strategy is built around a mixture of approaches that allows your business to cover all requirements while optimizing the time and cost of delivering an app. We provide a complete iPhone app development game plan from design, development, testing to launch. We don’t just develop, but also make our developed apps stay ahead in the market. We ensure that our apps meet all quality stands while adopting modern tools and technologies.
                            </p>

                            <strong style={{ color: "#071c4d" }} className={Styles.our_services}>Notable iOS app development services Include:
                            </strong>
                            <ul>
                                <li>Custom Application</li>
                                <li>Native Application</li>
                                <li>Apple Wearables</li>
                                <li>Patching and Updates</li>
                                <li>iPhone App UI/UX Designing</li>
                                <li>iPhone App Testing/Portability</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            {/* iphone testimonial section starts here */}
            <section className={Styles.iphone_testimonial_section}>
                <div className={Styles.iphone_testimonial_wrapper}>
                    <div className={Styles.iphone_testimonial_heading}>
                        <h3>Testimonial</h3>
                        <h2>SkyWalk Technology Approach for iPhone Application Development</h2>
                        <p>Our iPhone application development strategy is built around a mixture of approaches that allow a business to cover all your requirements while optimizing the time and cost of delivering an app. Here are the two key approaches our Android app developers deploy during the app development process.</p>
                    </div>
                    <div className={Styles.integrations_wrapper}>
                        <div className={Styles.integration}>
                            <div className={Styles.tool_stack}>

                                <NavLink className={Styles.link} to="#">
                                    <span> <img src={swift} alt="swift logo" /></span>
                                    <span> <img src={object} alt="object image" /></span>
                                    <span> <img src={xCode} alt="swift logo" /></span>
                                </NavLink>

                            </div>
                            <div className={Styles.content}>
                                <NavLink to="#">
                                <h2>Native Iphone App Development</h2>
                                </NavLink>
                                <p>Native iOS apps are specific to the iOS platform using the development tools and language that iOS supports. For e.g., Xcode, Swift, and Objective-C. Native apps look and perform the best due to adequate access to the device’s hardware and Android-specific features.
                                </p>
                            </div>
                        </div>
                        <div className={Styles.integration}>
                            <div className={Styles.tool_stack}>

                                <NavLink className={Styles.link} to="#">
                                    <span> <img src={swift} alt="swift logo" /></span>
                                    <span> <img src={object} alt="object image" /></span>
                                    <span> <img src={xCode} alt="swift logo" /></span>
                                </NavLink>

                            </div>
                            <div className={Styles.content}>
                                <NavLink to="#">
                                <h2>Hybrid Iphone App Development</h2>
                                </NavLink>
                                <p>Hybrid Android apps are developed using standard web technologies like HTML5, CSS, JavaScript and React Native. The final code is wrapped in a native container and shipped as a regular app. The hybrid approach is often called “Write Once Run Anywhere,” as the same code can serve multiple platforms along with iOS.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

          {/* industries we work with */}
        <Industries_We_Work/>
          

        {/* Best iphone apps by skywalk */}
        <div className={Styles.apps_container}>
                <div className={Styles.apps_content_wrapper}>
                    <div className={Styles.heading}>
                        <h2>Some of the Best iPhone Apps Developed by SkyWalk Technology’s iOS App Developers</h2>
                        <p>Explore Our Developed Apps Here</p>
                    </div>
                    <div className={Styles.apps_content_cont}>
                        <div className={Styles.left_cont}>
                            <img src={mobile} alt="mobile" />
                        </div>
                        <div className={Styles.right_cont}>
                            <div className={Styles.tree_icon_cont}>
                                <span><RiNodeTree  className={Styles.icon}/></span>
                            </div>
                            <div className={Styles.marketing_content}>
                                <h2>GETAFIX | ON-DEMAND DELIVERY APP</h2>
                                <p>
                                GetAFix is an on-demand iPhone App developed by SkyWalk that allows its users to book and schedule services on the basis of ratings, price and previous job done. One can also track the progress of the service request over the live notifications and status management by the provider. GETAFIX provides services like gardening, electrical work, building & construction, metal works, etc. Just book or schedule the kind of service you need, and the provider will be at your doorstep.
                                 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default IPhoneAppDevelopment;