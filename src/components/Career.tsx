import "./styles/Career.css";

const technicalSkills = [
  {
    title: "Programming Languages",
    skills: "Python, C++, JavaScript, SQL",
  },
  {
    title: "Machine Learning & AI",
    skills: "Model development, NLP, sentiment analysis, LLM integration",
  },
  {
    title: "Frontend",
    skills: "React.js, HTML, CSS",
  },
  {
    title: "Backend",
    skills: "Node.js, Express.js",
  },
  {
    title: "Databases",
    skills: "MongoDB, MySQL",
  },
  {
    title: "Frameworks/Tools",
    skills: "Streamlit, Git, REST APIs",
  },
  {
    title: "Core Concepts",
    skills:
      "Data Structures & Algorithms, OOP, DBMS, OS, Software Architecture",
  },
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Technical <span>Skills</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {technicalSkills.map((item, index) => (
            <div className="career-info-box" key={item.title}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.title}</h4>
                  <h5></h5>
                </div>
                <h3>{String(index + 1).padStart(2, "0")}</h3>
              </div>
              <p>{item.skills}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
