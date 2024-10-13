import { Helmet } from "react-helmet";
import "./Contacts.css";
function Contacts() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Trading Review Site</title>
        <meta
          name="description"
          content="Reach out to our team for inquiries, support, or feedback. We’re here to assist you with all your trading review needs."
        />
      </Helmet>
      <h1>Contact Us</h1>
      <div className="contactForm_mains">
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </p>

            <div className="info">
              <div className="information">
                <i className="fa fa-map-marker"></i>
                <p>92 Cherry Drive Uniondale, NY 11553</p>
              </div>
              <div className="information">
                <i className="fa fa-envelope"></i>
                <p>lorem@ipsum.com</p>
              </div>
              <div className="information">
                <i className="fa fa-phone"></i>
                <p>123-456-789</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form autoComplete="off">
              <h1 className="title">Contact us</h1>
              <div className="input-container">
                <input type="text" name="name" className="input" />
                <label htmlFor="">Name</label>
                <span>Username</span>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" />
                <label htmlFor="">Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input" />
                <label htmlFor="">Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input"></textarea>
                <label htmlFor="">Message</label>
                <span>Message</span>
              </div>
              <input type="button" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contacts;
