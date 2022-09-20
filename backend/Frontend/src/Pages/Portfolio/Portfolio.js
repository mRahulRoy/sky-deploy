import React, { Fragment } from 'react'
import Styles from "./portfolio.module.css"
import { a } from 'react-router-dom'
// image imports
import opener11 from "../../img/opener11.png"
import ekabRummy from "../../img/ek-ab-rummy.png"
import karniSena from "../../img/karnisena.png"
import smokeStack from "../../img/smokestacks.jpg"
import dantaherbs from "../../img/dantaherbs.jpg"
import sabPrakashan from "../../img/sbprakashan.jpg"
import mezux from "../../img/mezux.jpg"
import spectral from "../../img/spectral.jpg"
const Portfolio = ({title}) => {
    
    return (
        <Fragment>
            {/*hrefp page header starts here */}
            <section className={Styles.page_header_container}>
                <div className={Styles.page_header}>
                    <div className={Styles.main_heading}>
                      {title ? <h1>Case Study</h1> : <h1>Portfolio</h1>}
                    </div>
                </div>
            </section>

            {/* projects section */}
            

            {/* Project 1 */}
            {
                // Here we are checking if we are getting the title that means we want to render page for case study route and not to show the very first project . if there is no title coming that means just render the page for route portfolio and render all the projects.
                title ? "" : (
                    <section  className={Styles.projects_container}>
                <div className={Styles.main_project_wrapper}>
                    <div className={Styles.project_name}>
                        <h2>OPener11 FANTASY APP</h2>
                    </div>
                    <div className={Styles.projects_section}>
                        <div className={Styles.left_cont}>
                            <img src={opener11} alt="opener 11" />
                        </div>
                        <div className={Styles.right_cont}>
                            <p>
                                Founded by OPENER MEDIA PRIVATE LIMITED in 2021, Opener11 is an online Fantasy Game built with a mission href redefine the world of Fantasy Sports and introducing an unique way of playing and enjoying Fantasy Sports. Opener11 is a Fantasy gaming contest where players choose own team/s and challenge each other.. Opener11 is the Indiaâ€™s biggest Fantasy Sports platform with users playing Fantasy Cricket, Football, Kabaddi, Basketball, Hockey, Volleyball, Baseball and Ludo..
                            </p>
                            <a target="_blank"className={Styles.link} href="https://opener11.com" >www.opener11.com</a>
                        </div>
                    </div>
                </div>
            </section>
                )
            }

            {/* Project 2 */}
            <section className={Styles.projects_container}>
                <div className={Styles.main_project_wrapper}>
                    <div className={Styles.project_name}>
                        <h2>EKABRUMMY</h2>
                    </div>
                    <div className={Styles.projects_section}>
                        <div className={Styles.left_cont}>
                            <img src={ekabRummy} alt="opener 11" />
                        </div>
                        <div className={Styles.right_cont}>
                            <p>

                                It may come as a surprise href you, but playing rummy online at EK AB Rummyis a completely legal process as stated by the Supreme Court of India. Rummy qualifies as skill-based gaming for which Supreme Court of India had released the following judgement: “The expression ‘gaming’ in the two Acts has href be interpreted in the light of the law laid-down by this Court in the two 1957 cases, wherein it has been authoritatively held that a competition which substantially depends on skill is not gambling. Gaming is the act or practice of gambling on a game of chance. It is staking on chance where chance is the controlling fachrefr. ‘Gaming’ in the two Acts would, therefore, mean wagering or betting on games of chance. It would not include games of skill like horse racing”
                            </p>
                            <a target="_blank"className={Styles.link} href="https://ekabrummy.in" >www.ekabrummy.in</a>
                           
                        </div>
                    </div>
                </div>
            </section>


            {/* Project 3 */}
            <section className={Styles.projects_container}>
                <div className={Styles.main_project_wrapper}>
                    <div className={Styles.project_name}>
                        <h2>Karni Sena | India's Largest Social Organization</h2>
                    </div>
                    <div className={Styles.projects_section}>
                        <div className={Styles.left_cont}>
                            <img src={karniSena} alt="opener 11" />
                        </div>
                        <div className={Styles.right_cont}>
                            <p>
                            करणी सेना का प्रमुख उद्देश्य राष्ट्रवादी व्यक्तित्व का निर्माण करना है | करणी सेना सनातन समाज को संगठित करके भारत को उन्नति के शिखर पर ले जाना है, और देश को प्रगति के क्षेत्र में आगे बढ़ाने के कार्य में संलग्न है | देश में कोई आपदा या समस्या आ जाने पर संगठन, लोगों को आर्थिक और शारारिक रूप से मदद प्रदान करता है | करणी सेना का मुख्य उद्देश्य भारत को खुशहाल रखना , समृद्धशाली, सनातन संस्कृति के मूल्यों को बनाये रखने का होता है | यह ऐसा संगठन है, जिसने हमेशा समाज में वर्ग भेद, जाति भेद व ऊँच-नीच का भेदभाव को खत्म करने का प्रयास किया | इसके साथ ही इस संगठन में रक्षक समता, मण्डल समता, गण समता, दण्ड प्रदर्शन, योगासन, नियुद्ध व घोष का प्रदर्शन भी होता है | यह संगठन हमेशा देश में आने वाली सभी आपदाओं का सामना करने के लिए तैयार रहता है |
                            </p>
                            <a target="_blank"className={Styles.link} href="https://mykarnisena.com" >www.mykarnisena.com</a>
                        </div>
                    </div>
                </div>
            </section>


            {/* Project 4 */}
            <section className={Styles.projects_container}>
                <div className={Styles.main_project_wrapper}>
                    <div className={Styles.project_name}>
                        <h2>Website Design & Development for Smoke Stacks</h2>
                    </div>
                    <div className={Styles.projects_section}>
                        <div className={Styles.left_cont}>
                            <img src={smokeStack} alt="opener 11" />
                        </div>
                        <div className={Styles.right_cont}>
                            <p>
                            We are a family from Sydney’s Inner West who love creating and sharing delicious food. After a particularly stellar rack of ribs at a local smoke house we found ourselves driven href recreate the experience at home. We soon found that the search for the right smoker was a rabbit hole of over-priced, under performing smokers. It became apparent that – as the old adage goes – if you want it done right, do it yourself! We found a supplier who shared our passion and worked tirelessly hrefgether href create a range of high quality, reliable and well priced smokers and accessories.
                            </p>
                            <a target="_blank"className={Styles.link} href="https://smokestacks.com.au" >www.smokestacks.com.au</a>
                        </div>
                    </div>
                </div>
            </section>


            {/* Project 5 */}
            <section className={Styles.projects_container}>
                <div className={Styles.main_project_wrapper}>
                    <div className={Styles.project_name}>
                        <h2>Buy Tea Online | Best Online Tea Sellers, Tea Shop | Danta Herbs</h2>
                    </div>
                    <div className={Styles.projects_section}>
                        <div className={Styles.left_cont}>
                            <img src={dantaherbs} alt="dhanteras" />
                        </div>
                        <div className={Styles.right_cont}>
                            <p>
                            Get the taste of nature from the comfort of your home. Get the #PluckhrefCup Experience.
                            </p>
                            <a target="_blank"className={Styles.link} href="https://dantaherbs.in" >www.dantaherbs.in</a>
                        </div>
                    </div>
                </div>
            </section>


            {/* Project 6 */}
            <section className={Styles.projects_container}>
                <div className={Styles.main_project_wrapper}>
                    <div className={Styles.project_name}>
                        <h2>Just Halal | Eslamik Web Shop</h2>
                    </div>
                    <div className={Styles.projects_section}>
                        <div className={Styles.left_cont}>
                            <img src={smokeStack} alt="opener 11" />
                        </div>
                        <div className={Styles.right_cont}>
                            <p>
                               
We are a family from Sydney’s Inner West who love creating and sharing delicious food. After a particularly stellar rack of ribs at a local smoke house we found ourselves driven href recreate the experience at home. We soon found that the search for the right smoker was a rabbit hole of over-priced, under performing smokers. It became apparent that – as the old adage goes – if you want it done right, do it yourself! We found a supplier who shared our passion and worked tirelessly hrefgether href create a range of high quality, reliable and well priced smokers and accessories.
                            </p>
                            <a target="_blank"className={Styles.link} href="https://webshop.justhalal.dk" >webshop.justhalal.dk</a>
                        </div>
                    </div>
                </div>
            </section>



            {/* Project 7 */}
            <section className={Styles.projects_container}>
                <div className={Styles.main_project_wrapper}>
                    <div className={Styles.project_name}>
                        <h2>About Shiksha Bharati Prakashan</h2>
                    </div>
                    <div className={Styles.projects_section}>
                        <div className={Styles.left_cont}>
                            <img src={sabPrakashan} alt="opener 11" />
                        </div>
                        <div className={Styles.right_cont}>
                            <p>
                            At Shiksha Bharati Prakashan Pvt. Ltd., we are currently dealing with Textbooks and course books of grades 1st href 8th. We are associated with a larger group of M.S. Institute, which is having its root in various other educational fields as well. Each year, we are growing as a company.
                            </p>
                            <a target="_blank"className={Styles.link} href="https://sbprakashan.com" >www.sbprakashan.com</a>
                        </div>
                    </div>
                </div>
            </section>


            {/* Project 8 */}
            <section className={Styles.projects_container}>
                <div className={Styles.main_project_wrapper}>
                    <div className={Styles.project_name}>
                        <h2>Building Your Network With Mezux OFC Contrachrefr</h2>
                    </div>
                    <div className={Styles.projects_section}>
                        <div className={Styles.left_cont}>
                            <img src={mezux} alt="opener 11" />
                        </div>
                        <div className={Styles.right_cont}>
                            <p>
                            We are pleased href introduce ourselves as a professionally managed organization involved in the field of trenchless technology, horizontal directional drilling, underground cables laying, pipe bursting etc. for construction works of different heights. Promoted by well-versed & experienced Engineers who have worked in this field nationally, M/S Mezux hrefuch Technology. has proved it's technical strength and flexibility of adopting new challenges.
                            </p>
                            <a target="_blank"className={Styles.link} href="https://mezux.in" >www.mezux.in</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project 9 */}
            <section className={Styles.projects_container}>
                <div className={Styles.main_project_wrapper}>
                    <div className={Styles.project_name}>
                        <h2>Recruit Critical & Niche Roles for Emerging</h2>
                    </div>
                    <div className={Styles.projects_section}>
                        <div className={Styles.left_cont}>
                            <img src={spectral} alt="opener 11" />
                        </div>
                        <div className={Styles.right_cont}>
                            <p>
                            Spectral is a “Business Enabler” for “Client business Transformation” by providing Human Capital.
                            </p>
                            <a target="_blank"className={Styles.link} href="https://spectral.in" >www.spectral.in</a>
                        </div>
                    </div>
                </div>
            </section>



        </Fragment>
    )
}

export default Portfolio
