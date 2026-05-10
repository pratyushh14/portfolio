import { FaGraduationCap, FaCertificate } from "react-icons/fa6";
import "./styles/EducationCerts.css";

const certifications = [
  "Introduction to Financial Markets",
  "Data Science — Internshala",
  "Introduction to Python",
  "McKinsey Forward Program",
  "Data Structures using C/C++",
];

const skills = [
  "IT Business Analysis",
  "Analytical Skills",
  "Communication",
  "Product Management",
  "Python",
  "SQL",
  "EDA",
  "Stakeholder Management",
];

const EducationCerts = () => {
  return (
    <div className="edu-section section-container" id="education">
      <div className="edu-container">
        <h2>
          Education <span>&</span>
          <br /> Credentials
        </h2>

        <div className="edu-grid">
          <div className="edu-card edu-card-edu">
            <div className="edu-icon">
              <FaGraduationCap />
            </div>
            <h3>Education</h3>
            <div className="edu-item">
              <h4>Thapar University</h4>
              <h5>2019 — 2023</h5>
              <p>
                Bachelor of Engineering — Electronics and Computer Engineering
              </p>
            </div>
          </div>

          <div className="edu-card edu-card-cert">
            <div className="edu-icon">
              <FaCertificate />
            </div>
            <h3>Certifications</h3>
            <ul className="edu-cert-list">
              {certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </div>

          <div className="edu-card edu-card-skills">
            <h3>Top Skills</h3>
            <div className="edu-skill-flex">
              {skills.map((skill) => (
                <span className="edu-skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCerts;
