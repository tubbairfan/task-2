import { Link } from "react-router-dom";
import "./Servicebox.css";
const Servicebox = ({ sectionTitle, services }) => {
  return (
    <div className="service-section">
      <h1 className="service-heading">{sectionTitle}</h1>
      <div className="service-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.title} className="service-img" />
            <h2 className="service-title">{service.title}</h2>
            <div className="service-footer">
              <span className="read-more">Read More</span>
              <button className="service-btn"> <Link to="/Service Details ">+</Link></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Servicebox;
