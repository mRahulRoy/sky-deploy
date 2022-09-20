import React, { Fragment } from 'react'
import Styles from "./whyskywalk.module.css"

import img1 from "../../img/Digital-marketing-team.jpg"
import img2 from "../../img/Digital-Marketing.jpg"
import { RiNodeTree } from "react-icons/ri"
import { BsBezier, BsTruck } from "react-icons/bs"
import { BiLayer } from "react-icons/bi"


const WhySkyWalk = () => {
    return (
        <Fragment>
            <div className={Styles.why_us_container}>
                <div className={Styles.content_wrapper}>
                    <div className={Styles.heading}>
                        <h3>Hire us</h3>
                        <h2>Why work with Skywalk <br /> Technologies?</h2>
                    </div>
                    <div className={Styles.content_section}>
                        <div className={Styles.images_section}>
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                        </div>
                        <div className={Styles.text_content_cont}>
                            <div className={Styles.tree_structure}>
                                <div className={Styles.timeline_icon}>
                                    <RiNodeTree className={Styles.ic}  />
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
                                <div className={Styles.line}></div>
                                <div className={Styles.timeline_icon}>
                                    <BsTruck className={Styles.ic} />
                                </div>

                            </div>
                            <div className={Styles.text_cont}>
                                <div>
                                    <h2>Outstanding Development Service</h2>
                                    <p>Our Digital services are tailor made suiting your all business growth requirements</p>
                                </div>
                                <div>
                                    <h2>Top Quality</h2>
                                    <p>Our focus is on quality of the work we delivered, rather than numbers of point we work</p>
                                </div>
                                <div>
                                    <h2>Product Prototyping</h2>
                                    <p>Interactively whiteboard transparent testing procedures before bricks_and_clicks initiatives administrate competencies.</p>
                                </div>
                                <div>
                                    <h2>Highly Efficient</h2>
                                    <p>Fulfill your requirement for business growth also efficient at the same time.</p>
                                </div>
                                <div>
                                    <h2>Great Support</h2>
                                    <p> great support by our support is critical to the success of a business s to help expand it to unexplored heights</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default WhySkyWalk