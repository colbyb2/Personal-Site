import "./Contact.css";
import Information from "../../information";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  return (
    <div className="container">
      <ContactForm form={form} />
    </div>
  );
}

const ContactForm = ({ form }) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendMessage = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        Information.serviceID, //Private keys
        Information.templateID,
        form.current,
        Information.publicKey
      )
      .then(
        (result) => {
          setError(false);
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <form ref={form} className="contact-form">
      <h2 className="contact-header">Contact Me</h2>
      <div className="contact-inputs">
        <div className="info-container">
          <input
            name="name"
            type="text"
            className="input input-name"
            placeholder="Name"
          />
          <input
            name="email"
            type="text"
            className="input input-email"
            placeholder="Email"
          />
        </div>
        <input
          name="subject"
          type="text"
          className="input input-subject"
          placeholder="Subject"
        />
        <textarea
          name="message"
          type="text"
          className="input-message"
          placeholder="Message"
        />
        <button className="send-button" onClick={sendMessage}>
          Send
        </button>
        {error ? <div className="error-message">Failed to send</div> : null}
        {success ? <div className="success-message">Sent!</div> : null}
      </div>
    </form>
  );
};

export default Contact;
