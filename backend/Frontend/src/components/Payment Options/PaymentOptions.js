import React, { Fragment } from 'react'
import Styles from "./payment_options.module.css"

import driveIcon from "../../img/integations/google-drive.png"
import googleIcon from "../../img/integations/2.png"
import snapIcon from "../../img/integations/3.png"
import diamondIcon from "../../img/integations/4.png"
import figmaIcon from "../../img/integations/5.png"
import spotifyIcon from "../../img/integations/6.png"
import zeplinIcon from "../../img/integations/7.png"
import dribbleBallIcon from "../../img/integations/8.png"
import slackIcon from "../../img/integations/9.png"
import lineIcon from "../../img/integations/10.png"
import googleAnalyticIcon from "../../img/integations/11.png"
import vscodeIcon from "../../img/integations/12.png"
import { NavLink } from 'react-router-dom'

const PaymentOptions = () => {
    return (
        <Fragment>
            <div className={Styles.payment_wrapper}>
                <div className={Styles.inner_payment_section}>
                    <div className={Styles.box1}>
                        <div className={`${Styles.payment_item} ${Styles.left}`}>
                            <img src={driveIcon} alt="google icon" />
                        </div>
                        <div className={`${Styles.payment_item} ${Styles.right}`}>
                            <img src={googleIcon} alt="google icon" />
                        </div>
                        <div className={`${Styles.payment_item}  ${Styles.left}`}>
                            <img src={snapIcon} alt="google icon" />
                        </div>
                        <div className={`${Styles.payment_item} ${Styles.right}`}>
                            <img src={diamondIcon} alt="google icon" />
                        </div>
                        <div className={`${Styles.payment_item} ${Styles.left}`}>
                            <img src={figmaIcon} alt="google icon" />
                        </div>
                        <div className={`${Styles.payment_item} ${Styles.right}`}>
                            <img src={spotifyIcon} alt="google icon" />
                        </div>
                    </div>
                    <div className={Styles.box2}>
                        <h3>Payment Gateway that offers Best Success Rates</h3>
                        <h2>100+ Payment Options for Your Customers</h2>
                        <p>Your Transactions are Secure with Us</p>
                        <NavLink to="/contact-us" className={Styles.button}>Start Integrating Payment Gateway Now!</NavLink>
                    </div>
                    <div className={Styles.box3}>
                        <div className={`${Styles.payment_item} ${Styles.left}`}>
                            <img src={zeplinIcon} alt="google icon" />
                        </div>
                        <div className={`${Styles.payment_item} ${Styles.right}`}>
                            <img src={dribbleBallIcon} alt="google icon" />
                        </div>
                        <div className={`${Styles.payment_item} ${Styles.left}`}>
                            <img src={slackIcon} alt="google icon" />
                        </div>
                        <div className={`${Styles.payment_item} ${Styles.right}`}>
                            <img src={lineIcon} alt="google icon" />
                        </div>
                        <div className={`${Styles.payment_item} ${Styles.left}`}>
                            <img src={googleAnalyticIcon} alt="google icon" />
                        </div>
                        <div className={`${Styles.payment_item} ${Styles.right}`}>
                            <img src={vscodeIcon} alt="google icon" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default PaymentOptions