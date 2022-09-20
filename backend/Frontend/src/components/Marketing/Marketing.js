import React,{Fragment} from 'react'
import {NavLink} from "react-router-dom" 
import Styles from "./marketing.module.css"
const Marketing = () => {
return (
<Fragment>
    <div className={Styles.marketing_container}>
        <div className={Styles.marketing_section}>
            <div className={Styles.heading_cont}>
                <h2>Our key excellence in Digital marketing service</h2>
                <p>Our popular objective is to place our client’s business website to high on the growth curve. We analyze client business and channelize every possible effort and providing them a competitive edge over their contemporaries and reputation in digital marketing service gurgaon.Our digital marketing agency follows a systematic approach to ensure all our online marketing efforts deliver profitable results. Skywalk technologies internet marketing services today and let us help you boost your customer acquisition and retention rates.</p>
            </div>
            <div className={Styles.marketing_item_cont}>
                <div className={Styles.marketing_item}>
                    <h2>Trusted Insights</h2>
                    <p>Forward-thinking insights, verified right way research, robust metrics and data to help you.</p>
                </div>
                <div className={Styles.marketing_item}>
                    <h2>Strategic Advice</h2>
                    <p>Well guidance to help you focus on the issues and changes that truly matter.</p>
                </div>
                <div className={Styles.marketing_item}>
                    <h2>Practical tools</h2>
                    <p>Tools help your strategy changes into decisions and execute for measurable results.</p>
                </div>
                
               

            </div>
        </div>
    </div>
</Fragment>
)
}

export default Marketing