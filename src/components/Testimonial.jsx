import { useState } from "react";
import "./Testimonial.css";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";
const testimonials = [
  {
    text: "Mollit anim laborum.Dvcu is aute iruxvfg dhjkololhr in re voluptate velit esscillum lore eu quife nrulla parihatur. Exchgcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut.",
    name: "Jessya Inn",
    role: "Co Founder",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tenetur, culpa aliquam pariatur natus molestiae odit soluta repellendus corporis.",
    name: "Michael Stark",
    role: "CEO",
  },
  {
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Amelia Rose",
    role: "Managing Director",
  },
];
const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const nextSlide = () => {
    setIndex((index + 1) % testimonials.length);
  };
  const prevSlide = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };
  return (
    <div className="testimonial-section">
      <h1 className="bg-title">FEEDBACK</h1>
      <h2 className="main-title">TESTIMONIAL</h2>
      <div className="content-box">
        <FaQuoteLeft className="quote-icon" />
        <p className="testimonial-text">{testimonials[index].text}</p>
        <div className="person-info">
          <span className="bar"></span>
          <div>
            <h4>{testimonials[index].name}</h4>
            <p>{testimonials[index].role}</p>
          </div>
        </div>
        <div className="arrow-controls">
          <button onClick={prevSlide}><FaArrowLeft /></button>
          <button onClick={nextSlide}><FaArrowRight /></button>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
