import React, { Fragment, useState, useRef } from "react";
import {axiosInstance} from "../../utils.js"

import { useAlert } from "react-alert";
import Styles from "./seo_and_form.module.css";
import countries from "../../data/countries";
import { budget } from "../../data/countries";

const SeoAndForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyWebSite, setCompanyWebsite] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [budgetLimit, setBudgetLimit] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");


  const alert = useAlert();
  async function sendMail(event) {
    event.preventDefault()

    const userData = {
      name,
      companyWebSite,
      email,
      workEmail,
      budgetLimit,
      country,
      message,
    };

    if (
      !name ||
      !email ||
      !companyWebSite ||
      !workEmail ||
      !budgetLimit ||
      !country ||
      !message
    ) {
      alert.error("Please Fill All Fields");
      return;
    } else {
      const data = await axiosInstance.post(`/contact`, userData);

      alert.success("Email Sent Succesfully");

      setName("");
      setEmail("");
      setCompanyWebsite("");
      setMessage("");
      setWorkEmail("");
      setBudgetLimit("Budget")
      setCountry("country")
    }
  }

  return (
    <Fragment>
      {/* Seo and Form Section */}
      <section className={Styles.subscribe_letter_section}>
        <div className={Styles.subscribe_letter_wrapper}>
          <div className={Styles.main_content}>
            <div className={Styles.seo_cont}>
              <h2>Design And Development All Under One Roof!</h2>
              <p style={{ fontWeight: "bolder" }}>
                All reasons why Skywalk is a wise option.
              </p>
              <p>
                We first understand our client's expectations and ensure to meet
                their objectives
              </p>
              <hr />
              <p>
                We're loyal and do maintain transparency throughout the process
              </p>
              <hr />
              <p>
                We're specialized in offering quality services with uniqueness
                and on-time delivery
              </p>
              <hr />
              <p>
                We work with 100% commitment towards our clients' satisfaction
              </p>
              <hr />
              <p>We always consider our clients to be our main priority</p>
              <hr />
              <p>
                We don't slide from showing our utmost professional empathy to
                our clients
              </p>
              <hr />
            </div>

            <div className={Styles.subscribe_form_cont}>
              <div className={Styles.form}>
                <h2>
                  Fill out the form and we'll be in touch as soon as possible.
                </h2>

                <form className={Styles.inputs_cont} onSubmit={sendMail}>
                  <div className={Styles.main_inputs_box}>
                    <div className={Styles.input}>
                      <input
                        value={name}
                        type="text"
                        placeholder="Name"
                        required
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className={Styles.input}>
                      <input
                        value={email}
                        type="email"
                        required
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className={Styles.input}>
                      <input
                        value={companyWebSite}
                        type="text"
                        placeholder="Company website"
                        required
                        onChange={(e) => setCompanyWebsite(e.target.value)}
                      />
                    </div>
                    <div className={Styles.input}>
                      <input
                        value={workEmail}
                        type="email"
                        placeholder="Work email"
                        required
                        onChange={(e) => setWorkEmail(e.target.value)}
                      />
                    </div>
                    <div className={Styles.input}>
                      <select
                        value={budgetLimit}
                        onChange={(e) => setBudgetLimit(e.target.value)}
                        name=""
                        id=""
                        placeholder="Budget"
                      >
                        <option value="Budget" disabled={false} >
                          Budget
                        </option>
                        {budget.map((budget, index) => (
                          <option value={budget} key={index}>
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className={Styles.input}>
                      <select
                        value={country}
                        name=""
                        id=""
                        placeholder="Country"
                        onChange={(e) => setCountry(e.target.value)}
                      >
                        <option
                          className={Styles.opt}
                          value="Country"
                          disabled={false}
                        
                        >
                          Country
                        </option>
                        {countries.map((country, index) => (
                          <option key={index} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className={Styles.input_textarea}>
                      <textarea
                        value={message}
                        placeholder="Tell us about your project, needs and budget"
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                  </div>

                  <div className={Styles.form_button}>
                    <button type="submit" >
                      Get Started
                    </button>
                  </div>



                </form>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.vacant}></div>
      </section>
    </Fragment>
  );
};

export default SeoAndForm;
