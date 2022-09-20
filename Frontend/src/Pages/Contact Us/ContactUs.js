import React, { Fragment, useState } from "react";
import Styles from "./contact_us.module.css";
// icons imports

import officeImage1 from "../../img/office-img-1.jpg";
import officeImage2 from "../../img/office-img-2.jpg";
import officeImage3 from "../../img/office-img-3.jpg";
import officeImage5 from "../../img/office-img-5.jpg";
import contactUs from "../../img/contact_us _vector_img.svg";

import phoneIcon from "../../img/phone_icon.svg";
import chatIcon from "../../img/chat_icon.svg";
import emailIcon from "../../img/email_icon.svg";

import {axiosInstance} from "../../utils.js"

import { useAlert } from "react-alert";


import { NavLink } from "react-router-dom";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const alert = useAlert();
   async function sendMail() {

    const userData = {
      name,
      lastName,
      email,
      phone,
      message,
    };

    if (!name || !email || !lastName || !phone || !message) {
      alert.error("Please Fill All Fields");
      return;
    } else {
      const data = await axiosInstance.post(`/ask`, userData);

      alert.success("Succes");

      setName("");
      setEmail("");
      setLastName("");
      setMessage("");
      setPhone("");
    }
  }
  return (
    <Fragment>
      {/*top page header starts here */}
      <section className={Styles.page_header_container}>
        <div className={Styles.page_header}>
          <div className={Styles.main_heading}>
            <h1>Contact us</h1>
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

      {/* our office section */}
      <section className={Styles.our_office_section}>
        <div className={Styles.our_office}>
          <div className={Styles.our_office_heading}>
            <h3>Our Office</h3>
            <h2>Visit Our Work Places</h2>
          </div>
          <div className={Styles.office}>
            <figure className={Styles.snip0015}>
              <img src={officeImage1} />
              <figcaption>
                <h2>Gurugram, India</h2>
                <p>B_850, Spaze IT Park, Sec_49, Gurugram, Haryana, Indi</p>
              </figcaption>
            </figure>

            <figure className={Styles.snip0015}>
              <img src={officeImage2} alt="sample39" />
              <figcaption>
                <h2>Up, India</h2>
                <p>Sec_63, Noida Utter Pradesh India</p>
              </figcaption>
            </figure>

            <figure className={Styles.snip0015}>
              <img src={officeImage3} />
              <figcaption>
                <h2>Philippines</h2>
                <p>Philippines</p>
              </figcaption>
            </figure>
            <figure className={Styles.snip0015}>
              <img src={officeImage5} />
              <figcaption>
                <h2>Coming Soon</h2>
                <p>starting soon</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* contact form */}
      <section className={Styles.contact_section}>
        <div className={Styles.contact_wrapper}>
          <div className={Styles.main_content}>
            <div className={Styles.seo_cont}>
              <h2>Send Your Querries To Us</h2>

              <img src={contactUs} />
            </div>

            <div className={Styles.contact_form_cont}>
              <div className={Styles.form}>
                <h2>Get In Touch With Us</h2>

                <div className={Styles.inputs_cont}>
                  <div className={Styles.input}>
                    {/* field for name */}
                    <input
                      value={name}
                      type="text"
                      placeholder="Name"
                      required="true"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className={Styles.input}>
                    {/* field for email */}
                    <input
                      value={email}
                      type="email"
                      required="true"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className={Styles.input}>
                    <input
                      value={lastName}
                      type="text"
                      placeholder="Last Name"
                      required="true"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className={Styles.input}>
                    <input
                      value={phone}
                      type="number"
                      placeholder="Phone"
                      required="true"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className={Styles.input_textarea}>
                    <textarea
                      value={message}
                      placeholder="leave your doubts here."
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                </div>

                <div className={Styles.form_button}>
                  <button onClick={sendMail}>Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={Styles.vacant}></div> */}
      </section>
    </Fragment>
  );
};

export default ContactUs;
