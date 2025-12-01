import { Link } from "react-router-dom";
import "./Card.css";
const Card = ({ image, heading, linkTo, pageName }) => {
  return (
    <div className="card">
      <img src={image} alt={heading} className="card-img" />
      <div className="card-overlay">
  <h2 className="card-heading">{heading}</h2>
  <div className="breadcrumb">
    <Link to={linkTo} className="crumb-link">Home</Link>
    <span className="crumb-slash">/</span>
    <span className="page-name">{pageName}</span>
  </div>
</div>
    </div>
  );
};
export default Card;
