import React, { useState, useRef } from 'react';

import emailjs from '@emailjs/browser';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setIsFormSubmitted(true);
    emailjs.sendForm('service_wqkho1j', 'template_5etvdv2', form.current, '7MX-u2uZxMrirz1oP')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <h2 className="head-text">🙋‍♂️ Chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:alexbeardev@gmail.com" className="p-text">alexbeardev@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+34645073025" className="p-text">+34 645073025</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <form ref={form} onSubmit={sendEmail}>
            <div className="app__flex">
              <input className="p-text" type="text" placeholder="Your Name" name="user_name" />
            </div>
            <div className="app__flex">
              <input className="p-text" type="email" placeholder="Your Email" name="user_email" />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                name="message"
              />
            </div>
            <input type="submit" className="p-text" value="Send Message" id="submit" />
          </form>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg',
);
