import React from 'react';

const Contact = () => {
  return (<>
    <section className="form-section" data-aos="fade-down-left">
      <h5 className="form-subtitle">Connect With Us</h5>
      <h2 className="form-title">Submit Your Request Form</h2>

      <div className="form-container">
        <form>
          <div className="form-row">
            <input type="text" placeholder="Enter Your Full Name" />
            <input type="text" placeholder="How Can I Help You?" />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Enter Your Email" />
            <textarea rows="2" placeholder="Additional Message"></textarea>
          </div>
          <div className="form-row">
            <input type="text" placeholder="Mobile Number" />
          </div>
          <button type="submit" className="submit-btn">Send Message Now</button>
        </form>
      </div>
    </section>
  </>

  );
};

export default Contact;
