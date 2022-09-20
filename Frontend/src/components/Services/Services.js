import React,{Fragment} from 'react'
import {NavLink} from "react-router-dom" 
import Styles from "./services.module.css"
import gameIcon from "../../img/game_icon.png"
import uiUXIcon from "../../img/UI_UX_ICON.png"
import mobileDevIcon from "../../img/mobile_app_dev.png"
import webDevIcon from "../../img/web_development_ICON.png"
import softDevIcon from "../../img/software_development_ICON.png"
import paymentIcon from "../../img/PaymentGateway_ICON.png"





const Services = () => {
return (
<Fragment>
    <div className={Styles.services_container}>
        <div className={Styles.service_section}>
            <div className={Styles.heading_cont}>
                <h2>Services We Provide</h2>
                <p>Digital Marketing Services in gurgaon.</p>
            </div>
            <div className={Styles.service_item_cont}>
                <div className={Styles.service_item}>
                     <img src={uiUXIcon} alt="" style={{width:"70px"}}/>
                    <h2>UI/UX Design service</h2>
                    <p>Powered by your imagination and chain of ideas, we shape the outcome with our competent in_house team of <NavLink to="/" className={Styles.link}>UI/UX designers</NavLink>  service .</p>
                </div>
                <div className={Styles.service_item}>
                     <img src={mobileDevIcon} alt="" style={{width:"70px"}}/>

                    <h2>Mobile App Development</h2>
                    <p>We build powerful, process_based mobile applications to solve everyday business problems. we offer user_centric <NavLink to="" className={Styles.link} >web service</NavLink> & mobility services .</p>
                </div>
                <div className={Styles.service_item}>
                     <img src={softDevIcon} alt="" style={{width:"70px"}}/>

                    <h2>Web App Development</h2>
                    <p>We are dedicated to craft elegant web design service that is more than static websites and rightly fits into your brand. If you are all set to create a website, reach us today.</p>
                </div>
                <div className={Styles.service_item}>
                     <img src={webDevIcon} alt="" style={{width:"70px"}}/>

                    <h2>Game App Development</h2>
                    <p>Create, launch and operate your app operations with us because we are the leader of <NavLink to="" className={Styles.link}>mobile game</NavLink> development companies in India, USA, and UAE.</p>
                </div>
                <div className={Styles.service_item}>
                     <img src={gameIcon} alt="" style={{width:"70px"}}/>

                    <h2>Software Development</h2>
                    <p>We build powerful, process_based Software to solve everyday business problems. we offer user_centric web & Software services.</p>
                </div>
                <div className={Styles.service_item}>
                     <img src={paymentIcon} alt="" style={{width:"70px"}}/>

                    <h2>Payment Gateway</h2>
                    <p>We have dedicated team to provide <NavLink to="" className={Styles.link}>gateway solution</NavLink> payment to any Company with payment gateway Integration & 24 x 7 support.</p>
                </div>
               

            </div>
        </div>
    </div>
</Fragment>
)
}

export default Services