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
                href="mailto:pratyushrathore2005@gmail.com"
                data-cursor="disable"
              >
                pratyushrathore2005@gmail.com
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/pratyush-rathore-09807620a/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                linkedin.com/in/pratyush-rathore-09807620a/
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech Computer Science Engineering, Bennett University —
              2022–2026
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/pratyushh14"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/pratyush-rathore-09807620a/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:pratyushrathore2005@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
            <h4 style={{ marginTop: "20px" }}>Certifications</h4>
            <p>Object-Oriented Data Structures in C++</p>
            <p>Introduction to Modern Database Systems — Saylor</p>
            <p>AWS Academy Graduate — AWS Academy Cloud Foundations</p>
            <p>Foundations of User Experience (UX) Design</p>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Pratyush Rathore</span>
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
