import React, { Fragment } from "react";
import Styles from "./career.module.css";
import { BsChatSquareFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";



import phoneIcon from "../../img/phone_icon.svg";
import chatIcon from "../../img/chat_icon.svg";
import emailIcon from "../../img/email_icon.svg";
// icons import
import { MdWork, MdLocationOn } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { IoIosWallet } from "react-icons/io";
import { IoIosCall } from "react-icons/io";


const career = () => {
  return (
    <Fragment>
      {/*top page header starts here */}
      <section className={Styles.page_header_container}>
        <div className={Styles.page_header}>
          <div className={Styles.main_heading}>
            <h1>Career</h1>
          </div>
        </div>
      </section>

      {/* contact options section */}
      <section className={Styles.contact_options_section}>
        <div className={Styles.main_wrapper}>
          <div className={Styles.options}>
            <div className={Styles.option}>
            <img src={chatIcon} alt="" />
              <h3>Chat with us</h3>
              <p>
                We've got live Social Experts waiting to help you monday to
                saturday from 9am to 6pm EST.
              </p>
              <NavLink className={Styles.link} to="#">
                Chat with us
              </NavLink>
            </div>
            <div className={Styles.option}>
            <img src={emailIcon} alt="" />

              <h3>Email Us</h3>
              <p>
                Simple drop us an email at sales@skywalktech.in and you'll
                receive a reply within 24 hours
              </p>
              <a href="mailto:support@skywalktech.in">Email us</a>
            </div>
            <div className={Styles.option}>
            <img src={phoneIcon} alt="" />
              <h3>Give us a call</h3>
              <p>
                Give us a ring.Our Experts are standing by monday to Saturday
                from 9am to 6pm EST.
              </p>
              <a href="tel: 0124-4041949">0124-4041949</a>
            </div>
          </div>
        </div>
      </section>

      {/* our Jobs section */}
      <section className={Styles.job_section}>
        <div className={Styles.job_content_wrapper}>
          <div className={Styles.job_content}>
            <h3>Our Jobs</h3>
            <h2>Current Available Positions at Quiety</h2>

            {/* card1 */}
            <div className={Styles.career_cards}>
              <div className={Styles.card}>
                <div className={Styles.work}>
                  <div className={Styles.left}>
                    <span>
                      <MdWork className={Styles.icon} />
                    </span>
                    <h2>Remote - Full Time </h2>
                  </div>
                  <div className={Styles.right}>
                    <span>Developer</span>
                  </div>
                </div>
                <div className={Styles.role}>
                  <h2>Jr Frontend Developer</h2>
                </div>
                <div className={Styles.address}>
                  <span>
                    <AiFillHome className={Styles.icon} /> Skywalk Technlogy
                  </span>

                  <span>
                    <MdLocationOn className={Styles.icon} /> Gurugram India
                  </span>
                  <span>
                    <IoIosWallet className={Styles.icon} /> $35k-$45k
                  </span>
                </div>
               <NavLink to="/contact-us" className={Styles.button}> Apply Now </NavLink>
              </div>
              {/* card 2 */}
              <div className={Styles.card}>
                <div className={Styles.work}>
                  <div className={Styles.left}>
                    <span>
                      <MdWork className={Styles.icon} />
                    </span>
                    <h2>Remote - Full Time </h2>
                  </div>
                  <div className={Styles.right}>
                    <span>Designer</span>
                  </div>
                </div>
                <div className={Styles.role}>
                  <h2>UI/UX and Product Designer</h2>
                </div>
                <div className={Styles.address}>
                  <span>
                    <AiFillHome className={Styles.icon} /> Skywalk Technlogy
                  </span>

                  <span>
                    <MdLocationOn className={Styles.icon} /> San Fransisco
                  </span>
                  <span>
                    <IoIosWallet className={Styles.icon} /> $35k-$45k
                  </span>
                </div>
                <NavLink to="/contact-us" className={Styles.button}> Apply Now </NavLink>
              </div>

              {/* card 3 */}
              <div className={Styles.card}>
                <div className={Styles.work}>
                  <div className={Styles.left}>
                    <span>
                      <MdWork className={Styles.icon} />
                    </span>
                    <h2>Remote - Full Time </h2>
                  </div>
                  <div className={Styles.right}>
                    <span>Developer</span>
                  </div>
                </div>
                <div className={Styles.role}>
                  <h2>Senior Office Manager</h2>
                </div>
                <div className={Styles.address}>
                  <span>
                    <AiFillHome className={Styles.icon} /> Skywalk Technlogy
                  </span>

                  <span>
                    <MdLocationOn className={Styles.icon} /> Gurugram India
                  </span>
                  <span>
                    <IoIosWallet className={Styles.icon} /> $35k-$45k
                  </span>
                </div>
               <NavLink to="/contact-us" className={Styles.button}> Apply Now </NavLink>
              </div>
              {/* card 4 */}
              <div className={Styles.card}>
                <div className={Styles.work}>
                  <div className={Styles.left}>
                    <span>
                      <MdWork className={Styles.icon} />
                    </span>
                    <h2>Remote - Full Time </h2>
                  </div>
                  <div className={Styles.right}>
                    <span>Developer</span>
                  </div>
                </div>
                <div className={Styles.role}>
                  <h2>Senior Backend Developer</h2>
                </div>
                <div className={Styles.address}>
                  <span>
                    <AiFillHome className={Styles.icon} /> Skywalk Technlogy
                  </span>

                  <span>
                    <MdLocationOn className={Styles.icon} /> Gurugram India
                  </span>
                  <span>
                    <IoIosWallet className={Styles.icon} /> $55k-$62k
                  </span>
                </div>
               <NavLink to="/contact-us" className={Styles.button}> Apply Now </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default career;
