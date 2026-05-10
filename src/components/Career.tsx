import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Intern</h4>
                <h5>Ciena · Gurugram</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built a high-performance C++ parser to extract and serialize
              protocol data into structured JSON, integrated into production
              network management infrastructure with 100% functional accuracy
              across 15+ test scenarios.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Intern</h4>
                <h5>Centre for Development of Telematics (C-DOT) · New Delhi</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Designed a MERN-based Task Manager with role-based auth, RESTful
              CRUD APIs, and real-time sync. Reduced API response time by 25%
              through optimized backend architecture and modular
              Node.js/Express.js services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;