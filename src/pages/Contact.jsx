import Card from "../components/Card"
import img1 from "../assets/images/img-1.jpg"
import "./Contact.css"
const Contact = () => {
  return (
    <div>
       <Card
        image={img1}
        heading="CONTACT"
        linkTo="/"
        pageName="contact"
      />
    <div className="contact-wrapper">
      <h2 className="contact-title">Get in Touch</h2>
      <div className="contact-container">
        {}
        <form className="contact-form">
          <textarea placeholder="Enter Message" />
          <div className="form-row">
            <input type="text" placeholder="Enter your name" />
            <input type="email" placeholder="Email" />
          </div>
          <input type="text" placeholder="Enter Subject" />
          <button className="send-btn">SEND</button>
        </form>
        {}
        <div className="contact-info">
          <div className="info-box">
            <i className="fas fa-home"></i>
            <div>
              <h4>Buttonwood, California.</h4>
              <p>Rosemead, CA 91770</p>
            </div>
          </div>
          <div className="info-box">
            <i className="fas fa-phone"></i>
            <div>
              <h4>+1 253 565 2365</h4>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="info-box">
            <i className="fas fa-envelope"></i>
            <div>
              <h4>support@colorlib.com</h4>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
export default Contact
