import React from "react";

const ContactUs = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <div className="footer-card">
        <h3>General Enquiries</h3>
        <p>panchalsg5@gmail.com</p>
        <h3>Call Us</h3>
        <p>+91-8600406951</p>
        <h3>Timing</h3>
        <p>Mon to Fri : 09:30 am to 05:30 pm</p>
        <p>Sat & Sun : Closed 12:00 am to 12:00 am </p>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d60317.68519943728!2d77.25265341214494!3d19.114001772217712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3bd1d66bb9d31721%3A0x43892c180155daf1!2sNanded%2C%20Maharashtra!3m2!1d19.138251399999998!2d77.3209555!4m5!1s0x3bce29f6fffffffd%3A0xf705e1b2a364d350!2sMatoshri%20Pratishthan%20Group%20of%20Institutions%2C%20Post%2C%20Vishnupuri%2C%20Nanded%2C%20Maharashtra!3m2!1d19.089468999999998!2d77.2543895!5e0!3m2!1sen!2sin!4v1672663118232!5m2!1sen!2sin"
          width="600"
          height="450"
          title="cllg-map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
