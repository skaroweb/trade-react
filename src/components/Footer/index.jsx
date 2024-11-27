import TradeImage from "../TradeImage";
import "./index.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <TradeImage />
      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-info">
                <Link to="/" className="logo d-flex align-items-center">
                  <img src="/quantumai.png" alt="" />
                </Link>
                <p>
                  At Apex Trading Solutions, we are dedicated to empowering
                  investors through comprehensive research and expert advisory
                  services. Specializing in the Indian Equity, Forex, and
                  Commodity markets, our team of experienced analysts provides
                  actionable insights and strategies tailored to your financial
                  goals.
                </p>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="fa fa-chevron-right"></i>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>
                    <Link to="/safety">Safety</Link>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>
                    <Link to="/guides">Guides</Link>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>
                    <Link to="/contacts">Contact Us</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                <h4>Legal</h4>
                <ul>
                  <li>
                    <i className="fa fa-chevron-right"></i>
                    <Link to="/terms">Terms of service</Link>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>
                    <Link to="/disclaimer">Disclaimer</Link>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>
                    <Link to="/privacy">Privacy policy</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-6 footer-links">
                <h4>Social</h4>
                <div className="social-links mt-3">
                  <div className="twitter">
                    <i className="fa fa-twitter"></i>
                  </div>
                  <div className="facebook">
                    <i className="fa fa-facebook"></i>
                  </div>
                  <div className="instagram">
                    <i className="fa fa-instagram"></i>
                  </div>
                  <div className="linkedin">
                    <i className="fa fa-linkedin"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            © Copyright{" "}
            <strong>
              <span>Trade</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
