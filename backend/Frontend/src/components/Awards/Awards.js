import React, { Fragment } from 'react'
import Styles from "./awards.module.css"
import mobile from "../../img/integations/Digital-Marketing-Agency.png"
import web from "../../img/integations/Online-Advertising.png"
import promotion from "../../img/integations/Online-Promotions.png"
import digital_market from "../../img/integations/Digital-Marketing-Services.png"
import flags from "../../img/integations/Digital-team-in-gurgaon.png"
import bussiness_grow from "../../img/integations/Want-to-grow-business.png"
const Awards = () => {
  return (
    <Fragment>
        <div className={Styles.award_container}>
            <div className={Styles.award_section}>
                    <div className={Styles.main_heading}>
                        <h2>A SNEAK PEEK AT OUR DATA AND</h2>
                        <h2>AWARDS IN DIGITAL MARKETING</h2>
                    </div>

                    <div className={Styles.award_item_cont}>
                        <div className={Styles.award_item}>
                            <img   src={mobile} alt="mobile App" />
                            <h6>450+</h6>
                            <p>Mobile Apps Developed</p>
                        </div>
                        <div className={Styles.award_item}>
                            <img   src={web} />
                            <h6>300+</h6>
                            <p>Websites Developed</p>
                        </div>
                        <div className={Styles.award_item}>
                            <img   src={promotion} />
                            <h6>30+</h6>
                            <p>Web Apps Developed</p>
                        </div>
                        <div className={Styles.award_item}>
                            <img   src={digital_market} />
                            <h6>800+</h6>
                            <p>Satisfied Clients All Country</p>
                        </div>
                        <div className={Styles.award_item}>
                            <img   src={flags} />
                            <h6>15+</h6>
                            <p>Countries Served </p>
                        </div>
                        <div className={Styles.award_item}>
                            <img   src={bussiness_grow} />
                            <h6>5+</h6>
                            <p>Years of Experience</p>
                        </div>
                    </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Awards