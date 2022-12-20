import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact</h2>
      <span className="section-subtitle">Reach out to me!</span>

      <div className="contact-container container grid">
        <div className="contact-content">
          <h3 className="contact-title">Send a message below</h3>

          <form className="contact-form">
            <div className="contact-form-div">
              <label className="contact-form-tag">Name</label>
              <input type="text" name="name" className="contact-form-input" placeholder="e.g. Alex"/>
            </div>

            <div className="contact-form-div">
              <label className="contact-form-tag">Mail</label>
              <input type="email" name="email" className="contact-form-input" placeholder="e.g. alex@email.com"/>
            </div>

            <div className="contact-form-div contact-form-area">
              <label className="contact-form-tag">Message</label>
              <textarea name="message" cols="30" rows="10"
              className="contact-form-input" placeholder="Enter your message here!"></textarea>
            </div>
            <div className="send-div">
            <button className="button button--flex">Send<i className="fa-regular fa-envelope"></i></button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
