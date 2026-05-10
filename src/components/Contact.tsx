import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:gargrishabh7889@gmail.com"
                data-cursor="disable"
              >
                gargrishabh7889@gmail.com
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/rishabhgarg7889"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                linkedin.com/in/rishabhgarg7889
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.E. Electronics &amp; Computer Engineering, Thapar University —
              2019–2023
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Rishabh7889"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/rishabhgarg7889"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:gargrishabh7889@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
            <h4 style={{ marginTop: "20px" }}>Certifications</h4>
            <p>Introduction to Financial Markets</p>
            <p>Data Science — Internshala</p>
            <p>Introduction to Python</p>
            <p>McKinsey Forward Program</p>
            <p>Data Structures using C/C++</p>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Rishabh Garg</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
