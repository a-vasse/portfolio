import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact</h2>
      <span className="section-subtitle">Reach out to me!</span>

      <div className="contact-container container grid">
        <div className="contact-content">
          <h3 className="contact-title">Talk to me</h3>

          <div className="contact-info">
            <div className="contact-card">
              <i className="icon"></i>
              <h3 className="contact-card-title">Email</h3>
              <span className="contact-card-data">user@gmail.com</span>
              <a href="mailto:examplemail@gmail.com.com" className="contact-button">
                Write Me <i className="icon"></i>
              </a>
            </div>

            <div className="contact-card">
              <i className="icon"></i>
              <h3 className="contact-card-title"></h3>
              <span className="contact-card-data"></span>
              <a href="" className="contact-button">
                Write Me <i className="icon contact-button-icon"></i>
              </a>
            </div>
          </div>

          <div className="contact-info">
            <div className="contact-card">
              <i className="icon"></i>
              <h3 className="contact-card-title">What's App</h3>
              <span className="contact-card-data">Numbers</span>
              <a href="_target" className="contact-button">
                Write Me <i className="icon"></i>
              </a>
            </div>

            <div className="contact-card">
              <i className="icon"></i>
              <h3 className="contact-card-title"></h3>
              <span className="contact-card-data"></span>
              <a href="www.blank.com" className="contact-button">
                Write Me <i className="icon contact-button-icon"></i>
              </a>
            </div>
          </div>

          <div className="contact-info">
            <div className="contact-card">
              <i className="icon"></i>
              <h3 className="contact-card-title">Messenger</h3>
              <span className="contact-card-data">Another Ting</span>
              <a href="" className="contact-button">
                Write Me <i className="icon"></i>
              </a>
            </div>

            <div className="contact-card">
              <i className="icon"></i>
              <h3 className="contact-card-title"></h3>
              <span className="contact-card-data"></span>
              <a href="" className="contact-button">
                Write Me <i className="icon contact-button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-content">
          <h3 className="contact-title">Write me your project</h3>

          <form className="contact-form">
            <div className="contact-form-div">
              <label className="contact-form-tag">Name</label>
              <input type="text" name="name" className="container-form-input" placeholder="e.g. Alex"/>
            </div>

            <div className="contact-form-div">
              <label className="contact-form-tag">Mail</label>
              <input type="email" name="email" className="container-form-input" placeholder="e.g. alex@email.com"/>
            </div>

            <div className="contact-form-div">
              <label className="contact-form-tag">Message</label>
              <textarea name="message" cols="30" rows="10"
              ClassName="contact-form-input" placeholder="Enter your message here!"></textarea>
            </div>
            <button className="button button--flex">Send Message<i className="fa-regular fa-comments"></i></button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
