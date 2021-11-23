import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import Phone from "../../img/icons/phone.png";
import Address from "../../img/icons/address.png";
import Email from "../../img/icons/email.png";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRefs = useRef();
  const [emailDone, setEmailDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_52khcbm",
        "template_db6ny1d",
        formRefs.current,
        "user_wSBq3jREnWMVembEAHQD3"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="phone-icon" className="c-icon" />{" "}
              +8801727861767
            </div>
            <div className="c-info-item">
              <img src={Email} alt="Email-icon" className="c-icon" />{" "}
              +md.tamimhossen1767@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="Address-icon" className="c-icon" />{" "}
              Chuadanga, Dhaka Bangladesh
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's is your story?</b> Let's get in touch. Always available
            for freelancing if the right project comes along me.
          </p>
          <form ref={formRefs} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_Email" />
            <textarea
              style={{backgroundColor: darkMode && "#333"}} 
              name="message"
              id=""
              cols=""
              rows="5"
              placeholder="Message"
            ></textarea>
            <button>Submit</button>
          </form>
          {
            emailDone && <p style={{color: 'green'}}>Thank you</p>
          }
        </div>
      </div>
    </div>
  );
};

export default Contact;
