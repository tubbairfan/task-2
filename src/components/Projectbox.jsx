import "./Projectbox.css";
import { Link } from "react-router-dom";
const Projectbox = ({ projects }) => {
  return (
    <div className="project-section">
      <h2 className="project-heading">OUR PROJECTS</h2>
      <div className="project-grid">
        {projects.map((item, index) => (
          <div className="project-card" key={index}>
            <img src={item.img} alt={item.title} className="project-img" />
            <div className="project-info">
              <h3 className="project-title">{item.title}</h3>
              <button className="project-btn"><Link to="/Project Details ">+</Link></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projectbox;
