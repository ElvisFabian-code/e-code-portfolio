import React, { useState, useEffect } from 'react'
import Pyramid from "../../ui/Pyramid"
import { contactInfo } from "../../data"
import SocialHandles from "../../ui/SocialHandles"
import { BsFillSendFill } from "react-icons/bs"
import "./Contact.css"

const Contact = () => {
  // PASTE YOUR COPIED FORMSPREE URL HERE
  const FORMSPREE_URL = "https://formspree.io/f/mqejneql";

  const [status, setStatus] = useState("");

  // Auto-clear status notifications after 4 seconds
  useEffect(() => {
    if (status === "SUCCESS" || status === "ERROR") {
      const timer = setTimeout(() => {
        setStatus("");
      }, 4000); // 4000ms = 4 seconds

      return () => clearTimeout(timer); // Clean up the timer if the component unmounts
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus("Sending...");

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact">
      <div className="section__wrapper">
        <div className="pyramid__container">
          <Pyramid/>
        </div>
        <div className="contact__group">
          <div>
            <h3 className="title">
              Let's talk on your <span className="shine">great project</span> together
            </h3>
            <div className="flex contact__options">
              {contactInfo.map((contact, index) => (
                <article className="flex option" key={index}>
                  <div className="contact__icon">
                    <img src={contact.icon} alt="" />
                  </div>
                  <div className="flex contact__content">
                    <div>
                      <h3 className="name">{contact.name}</h3>
                      <p className="text__muted line__clamp__1 value">{contact.value}</p>
                    </div>
                    <a href={contact.link} className="flex__center btn">
                      <span className="btn__shine text">Message</span>
                      <div className="flex__center icon" style={{ background: contact.color }}>
                        {contact.btnIcon}
                      </div>
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <SocialHandles/>
          </div>

          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your full name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows={7} placeholder="Your Message" required></textarea>
            
            <button 
              type="submit" 
              className="btn flex__center submit__btn" 
              disabled={status === "Sending..."}
            >
              <div className="icon"><BsFillSendFill/></div>
              <span>{status === "Sending..." ? "Sending..." : "Send Now"}</span>
            </button>

            {/* Render toast alerts conditionally based on state */}
            {status === "SUCCESS" && (
              <p className="status__msg success">
                <span>✓</span> Message sent successfully!
              </p>
            )}

            {status === "ERROR" && (
              <p className="status__msg error">
                <span>⚠️</span> Network glitch. Please don't resend, check connection!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact