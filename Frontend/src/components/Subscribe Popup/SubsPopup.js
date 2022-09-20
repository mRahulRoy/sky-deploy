import React, { Fragment, useEffect, useRef, useState } from "react";
import Styles from "./subspopup.module.css";
import man from "../../img/letter1.jpg";
import { AiFillCloseCircle } from "react-icons/ai";
import { useAlert } from "react-alert";
import {axiosInstance} from "../../utils.js"

const SubsPopup = () => {
  const parent = useRef(null);
  const alert = useAlert();



  // Here we are generating the current Date and time so that we can keep track on users joining Date.
  const date = new Date();
	const current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
	const current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
	const date_time = current_date+" "+current_time;




  // using Hooks to store Users's data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Handling form submission Here
  function toggler() {

    parent.current.style.display = "none";
    window.sessionStorage.setItem("show", "false");
  }

  async function submitForm(event) {
    event.preventDefault();
    const userData = {
      name,
      email,
      phone,
      sentOn : date_time,
    };

    if (!name || !email || !phone) {
      alert.error("Please Fill All Fields or close the popup");
      return;
    } else {
      try {
        const config = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        };

        const data = await axios.post(
          process.env.REACT_APP_FIREBASE_DB_URL,
          JSON.stringify(userData)
        );
      } catch (error) {
        // for devlopment
        // console.log("Error Message : ", error.message);
      }

      // console.log(data);
      
     try {
      const res = await axiosInstance.post("/confirmSubscription",userData);
      console.log(res)
      alert.success("Subscription Done Succesfully");
     } catch (error) {
        // console.log(error.message)
     }
      

      // Emptying the inputs after succesfull Submission.
      setName("");
      setEmail("");
      setPhone("");
    }

    //Hiding the popup again after the user fills the  popup form.
    toggler();
  }
  // This Function closes the Subscribe Popup and sets the "show" to false so it doesnot popup again and again on each refresh.
 
  useEffect(() => {
    const timer = setTimeout(() => {
      // Showing the popup after 6 seconds
      if (sessionStorage.getItem("show") === null) {
        parent.current.style.display = "block";
      }
    }, 7000);
  }, []);

  return (
    <Fragment>
      <div className={Styles.boxing} ref={parent}>
        <div className={Styles.main_wrapper}>
          <div className={Styles.close_btn}>
            <AiFillCloseCircle id={Styles.close} onClick={() => toggler()} />
          </div>
          <div className={Styles.left}>
            <h2>Subscribe News Letter</h2>
            <p>Never Miss Any Update</p>
            <form method="POST">
              <input
                required
                type="text"
                placeholder="Your Name"
                name="name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <input
                required
                type="email"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <input
                required
                style={{}}
                type="number"
                placeholder="Phone "
                name="phone"
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
              />
              <button type="sumbit" onClick={submitForm}>
                Submit
              </button>
            </form>
          </div>
          <div className={Styles.right}>
            <img src={man} alt="image" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SubsPopup;
