import Card from "../components/Card";
import img1 from "../assets/images/img-1.jpg";
import { AboutContext } from "../Index";
import Testimonial from "../components/Testimonial";
import { useContext } from "react";
const About = () => {
  const { heading, description, buttonText, image, team } =
    useContext(AboutContext);
  return (
    <div>
      <Card
        image={img1}
        heading="ABOUT US"
        linkTo="/"
        pageName="Product"
      />
      <div className="about-card">
        {}
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
      <Testimonial />
    </div>
  );
};
export default About;
