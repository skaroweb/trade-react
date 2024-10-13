import BrokerRating from "../components/BrokerRating";
import Tablepress from "../components/Tablepress";
import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <h1 className="homepageh1_title">
            Quantum Code Ai - The best platform.
          </h1>
          <p>
            A group of experts with market knowledge and expertise has been
            assembled by PlayBestOntario. We are able to provide our players a
            dependable and secure atmosphere in which to have fun thanks to our
            extensive knowledge and enthusiasm of the casino business. Our
            writers serve the Canadian participants in this market from their
            Ontario-based offices. We have the inside scoop on news and unbiased
            evaluations of each operator and what they have to offer if you live
            in Ontario and want to experience the greatest legal, licensed, and
            regulated casinos.
          </p>
        </div>
        <Tablepress provider="quantum" />

        <Tablepress provider="activtrades" />
        <Tablepress provider="ava" />
        <Tablepress provider="plus500" />
        <Tablepress provider="capital" />
        <p>
          If you’re looking to kickstart your investment journey, TradeSmart Pro
          is the platform for you. Renowned for its intuitive design and robust
          features, TradeSmart Pro makes online trading accessible for everyone.
          Getting started is a breeze. Simply visit the TradeSmart Pro website
          and follow the straightforward sign-up process to open your account in
          minutes. Once you’re set up, you’ll gain access to a diverse range of
          investment options, including equities, cryptocurrencies, and
          commodities. Curious about TradeSmart Pro’s reputation? Take a moment
          to explore the testimonials from our satisfied users around the globe.
          With a proven track record of reliability and a commitment to
          transparency, TradeSmart Pro has built a strong community of trusting
          investors. Are you ready to embark on your trading journey? Sign up
          with TradeSmart Pro today and join a growing number of savvy investors
          who are making informed decisions in the dynamic world of online
          trading!
        </p>
        <BrokerRating />
        <h2>Disclaimer</h2>
        <p>
          We strive to provide accurate reviews, but please note that prices and
          offers may fluctuate. This information should not be considered legal
          or professional advice.
        </p>

        <h2>Cautionary Statement</h2>
        <p>
          Investing carries risks, and previous performance does not ensure
          future success. We recommend seeking independent advice before making
          any investment decisions. It’s possible that we receive compensation
          from the companies featured in our reviews.
        </p>
      </div>
    </>
  );
};

export default Homepage;
