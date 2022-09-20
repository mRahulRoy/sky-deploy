import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import { FaFacebookF,FaQuora } from "react-icons/fa"
import { AiOutlineInstagram,AiFillYoutube } from "react-icons/ai"
import {SiTelegram} from "react-icons/si"
import {IoLogoWhatsapp} from "react-icons/io"
import {AiFillLinkedin} from "react-icons/ai"

import Styles from "./footer.module.css"
import skywalktech from "../../img/skywalk_footer_logo.png";

function Footer() {


    
    return (
        <Fragment>
            <div className={Styles.footer_wrapper}>
                <div className={Styles.content_container}>
                    <div className={  `${Styles.box1}  ${Styles.box} ` }>
                        <img src={skywalktech} alt="skywalk logo" />
                        <p>In this digital era, when everything has turned digitally, marketing has not remained untouched. Being digitally sound means you are all set to achieve your goal 3X faster than those who still follow the traditional method of marketing strategy and implement the old sales technique for business growth and brand marketing.</p>
                    </div>
                    <div className={Styles.links_cont}>
                    <div className={ ` ${Styles.box2}  ${Styles.box}  ${Styles.pages_wrapper}`}>
                        <h2>Primary Pages</h2>
                        <ul>
                            <NavLink className={Styles.link} to="/"><li>Home</li></NavLink>
                            <NavLink className={Styles.link} to="/companyprofile"><li>About Us</li></NavLink>
                            <NavLink className={Styles.link} to="/services"><li>Services</li></NavLink>
                            <NavLink className={Styles.link} to="/career"><li>Career</li></NavLink>
                            <NavLink className={Styles.link} to="/casestudy"><li>Case study</li></NavLink>
                            <NavLink className={Styles.link} to="/portfolio"><li>Portfolio</li></NavLink>
                           
                        </ul>
                    </div>
                    <div className={ `${Styles.box3} ${Styles.box} ${Styles.others_wrapper}`}>
                        <h2>Others</h2>
                       <NavLink className={Styles.link} to="/under-maintainence"> <p>Affiliate Marketing Software</p></NavLink>
                       <NavLink className={Styles.link} to="/under-maintainence"> <p>Live Chat Software</p></NavLink>
                       <NavLink className={Styles.link} to="/under-maintainence"> <p>Fantasy App Development</p></NavLink>
                       <NavLink className={Styles.link} to="/under-maintainence"> <p>Mobile Game development</p></NavLink>
                       
                       
                       
                    </div>
                    </div>
                </div>
                <div className={Styles.copyright}>
                <p>
                    © 2021-2022 Skywalk Technology Rights Reserved. Designed By SkyWalk Technology</p>
                <div className={Styles.socials}>
                    <a rel="noreferrer" href="https://www.facebook.com/profile.php?id=100082821207774" target="_blank" className={Styles.link}>  <span><FaFacebookF className={Styles.icon} /></span></a>
                    <a rel="noreferrer" href="https://www.instagram.com/skywalk_technologies_pvt_td/" target="_blank" className={Styles.link}> <span><AiOutlineInstagram className={Styles.icon} /></span></a>
                    <NavLink to="/under-maintainence" className={Styles.link}><span><AiFillYoutube className={Styles.icon} /></span></NavLink>
                    <NavLink to="/under-maintainence" className={Styles.link}> <span><FaQuora className={Styles.icon} /></span></NavLink>
                    <NavLink to="/under-maintainence" className={Styles.link}> <span><SiTelegram className={Styles.icon} /></span></NavLink>
                    <NavLink to="/under-maintainence" className={Styles.link}> <span><IoLogoWhatsapp className={Styles.icon} /></span></NavLink>
                    <NavLink to="/under-maintainence" className={Styles.link}> <span><AiFillLinkedin className={Styles.icon} /></span></NavLink>
                   
                      
                   
                </div>
            </div>
            </div>
           
        </Fragment>
    )
}

export default Footer;