import { FaGraduationCap, FaCertificate } from "react-icons/fa6";
import "./styles/EducationCerts.css";

const certifications = [
  "Object-Oriented Data Structures in C++",
  " Introduction to Modern Database Systems-Saylor",
  "AWS Academy Graduate - AWS Academy Cloud Foundations",
  "Foundations of User Experience (UX) Design",
];

const skills = [
  "React.js",
  "Node.js",
  "Python",
  "C++",
  "JavaScript",
  "MongoDB",
  "PostgreSQL",
  "Machine Learning",
  "REST APIs",
  "Socket.IO",
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
              <h4>Bennett University</h4>
              <h5>2022 — 2026</h5>
              <p>
                Bachelor of Technology — Computer Science and
                Engineering
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
