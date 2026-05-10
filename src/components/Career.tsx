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
                <h4>Assistant Manager</h4>
                <h5>Plaksha University · Mohali</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Driving institutional initiatives at Plaksha University, an
              education-focused role at the intersection of academia, technology,
              and operations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Product Manager</h4>
                <h5>ExperGo Technologies · Gurugram</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Led initiatives that improved operational efficiency, drove cost
              savings, and unlocked revenue growth by leveraging data insights
              for decision-making. Partnered with product, marketing, and
              operations to translate business requirements into data-driven
              solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Analyst</h4>
                <h5>York Agrotech · Remote</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              Managed day-to-day operations including inventory management,
              supply chain coordination, and production planning. Designed
              strategies that reduced waste by 10–20% and enhanced supplier
              coordination to improve product quality while optimizing costs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst</h4>
                <h5>Collegedunia · Remote</h5>
              </div>
              <h3>2023–24</h3>
            </div>
            <p>
              Built Python pipelines for web scraping (BeautifulSoup, Selenium)
              and OCR (EasyOCR) to streamline data collection from diverse
              sources. Conducted Exploratory Data Analysis using statistical
              techniques and visualization to surface insights that powered
              downstream model development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Propelld · Bengaluru</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Built a back-end template that streamlined development cycles for
              the team. Integrated and optimized the FOIR calculation API used
              for loan applicant assessment and built CRUD APIs across MongoDB
              and MySQL. Implemented NGINX log rotation via a Bash script to
              manage log accumulation on EC2.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
