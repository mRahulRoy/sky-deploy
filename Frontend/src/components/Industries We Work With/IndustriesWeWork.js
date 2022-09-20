import React,{Fragment} from "react";
import Styles from "./industries_we_work.module.css"
// image imports
import web_design from "../../img/webdevelopmentcompany.png"
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
import { RiNodeTree } from "react-icons/ri"
import iPhone from "../../img/i-phone.png";
import mobile from "../../img/getafixapp.png"

import swift from "../../img/swift.png"
import object from "../../img/object.png"
import xCode from "../../img/x-code.png"
const Industries_We_Work = ()=>{
    return (
        <Fragment>
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

        </Fragment>
    )
}

export default Industries_We_Work;