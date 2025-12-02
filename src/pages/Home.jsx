import Servicebox from "../components/Servicebox";
import "./Home.css"
import Projectbox from "../components/Projectbox";
import { AboutContext } from "../Index";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Testimonial from "../components/Testimonial";
import Build1 from "../assets/images/construction.jpg"
import Service1 from "../assets/images/services1.png";
import Service2 from "../assets/images/services2.png";
import Service3 from "../assets/images/services3.png";
import Project1 from "../assets/images/project1.png.webp"
import Project2 from "../assets/images/project2.png.webp"
import Project3 from "../assets/images/project3.png.webp"
import Project4 from "../assets/images/project4.png.webp"
import Project5 from "../assets/images/project5.png.webp"
import Project6 from "../assets/images/project6.png.webp"
const ProjectPageData = [
  { img: Project1, title: "Floride Chemicals Factory" },
  { img: Project2, title: "Floride Chemicals Factory" },
  { img: Project3, title: "Floride Chemicals Factory" },
  { img: Project4, title: "Floride Chemicals Factory" },
  { img: Project5, title: "Floride Chemicals Factory" },
  { img: Project6, title: "Floride Chemicals Factory" },
];
const servicesData = [
  { img: Service1, title: "Engineering Techniques & Implementation" },
  { img: Service2, title: "Building Construction & Design" },
  { img: Service3, title: "Maintenance & Site Inspection" },
];
const Home = () => {
   const { heading, description, buttonText, image, team } =
    useContext(AboutContext);
  return (
    <div>
    <div className="hero-container">
     <img src={Build1} className="hero-image" alt="Background" />
  <div className="hero-overlay">
    <h1>HAND CARWASH AND DETAILING SERVICE</h1>
    <h2><span className="line1">ADVANCED</span>
          <span className="line2">CONSTRUCTION</span></h2>
    <h3>  <Link to="/services" className="service-link">OUR SERVICES</Link></h3>
  </div>  
  </div>
<div>
      <Servicebox 
        sectionTitle="OUR SERVICES"
        services={servicesData}
      />
   </div>
<div>
</div>
 <div className="about-card">
        <div className="about-text">
          <h1>{heading}</h1>
          <p>{description}</p>
          <button>{buttonText}</button>
        </div>
        {}
        {image && (
          <div className="about-image">
            <img src={image} alt={heading} />
          </div>
        )}
        </div>
        <div>
          <Projectbox projects={ProjectPageData}/>
        </div>
    <div className="about-card">
        {}
        {team.length > 0 && (
          <div className="about-team">
            <h2>OUR TEAM</h2>
            <div className="team-container">
              {team.map((member, index) => (
                <div className="team-member" key={index}>
                  <img src={member.img} alt={member.name} />
                  <h3>{member.role}</h3>
                  <h4>{member.name}</h4>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
  <Testimonial/>
   </div>
  )
}
export default Home;
