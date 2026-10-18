import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import "../../../src/App.css";
 
const EmailPopup = ({
  isOpen,
  onClose,
}) => {
  const form = useRef();
  const [success, setSuccess] = useState("");

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_pwuptgt",
        "template_piqp3ww",
        form.current,
        "3PXkkXrPeIWptXxcZ"
      )
      .then(
        () => {
          setSuccess("Message sent successfully!");

          event.target.reset();

          setTimeout(() => {
            setSuccess("");
            onClose();
          }, 2000);
        },
        () => {
          setSuccess(
            "Oops! Something went wrong."
          );
        }
      );
  };

  return (
    <AnimatePresence>

      {isOpen && (
        <div className="modal-overlay">

          <motion.div
            className="modal-content"
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
          >

            <button
              type="button"
              className="close-btn"
              onClick={onClose}
              aria-label="Close contact form"
            >
              ×
            </button>

            <div className="section-kicker">
              GET IN TOUCH
            </div>

            <h3>
              Send me a message
            </h3>

            <form
              ref={form}
              onSubmit={sendEmail}
            >

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
              />

              <button
                type="submit"
                className="contact-primary-btn"
              >
                Send Message →
              </button>

            </form>

            {success && (
              <p className="success-msg">
                {success}
              </p>
            )}

          </motion.div>

        </div>
      )}

    </AnimatePresence>
  );
};

export default EmailPopup;