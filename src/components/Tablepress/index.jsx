import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useHistory
import "./index.css";

const Tablepress = ({ provider }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); // Initialize useHistory

  // Dummy data
  const dummyData = [
    {
      provider: "quantum",
      rank: 1,
      bookie: "Quantum",
      logo: "img/Quantum_Ai.jpg",
      commission: "0% commissions",
      depositInfo: "Real-time deposit by PayPal, credit card etc.",
      minDeposit: "Min. deposit 100$",
      platforms: ["Windows", "Mac", "Android", "iOS"],
      supportIcons: [
        "windows",
        "apple",
        "linux",
        "android",
        "chrome",
        "firefox",
      ],
      visitors: "6844",
      rating: "9.9",
      editorRating: 4.8,
      bonus: "Min. deposit 100$",
      link: "provider/quantum",
      backgroundColor: "#00042b",
    },
    {
      provider: "activtrades",
      rank: 2,
      bookie: "Activ Trades",
      logo: "img/Active.jpg",
      commission: "Copy other dealers or let yourself be copied",
      depositInfo: "Invest from 0.99$ in shares",
      minDeposit: "Min. deposit 100$",
      platforms: ["Windows", "Mac", "Android", "iOS"],
      supportIcons: [
        "windows",
        "apple",
        "linux",
        "android",
        "chrome",
        "firefox",
      ],
      visitors: "1234",
      rating: "8.9",
      editorRating: 4.0,
      bonus: "Min. deposit 100$",
      link: "provider/activtrades",
      backgroundColor: "#f5f5f5",
    },
    {
      provider: "ava",
      rank: 3,
      bookie: "Ava",
      logo: "img/Ava.jpg",
      commission: "Copy other dealers or let yourself be copied",
      depositInfo: "Invest from 0.99$ in shares",
      minDeposit: "Min. deposit 100$",
      platforms: ["Windows", "Mac", "Android", "iOS"],
      supportIcons: [
        "windows",
        "apple",
        "linux",
        "android",
        "chrome",
        "firefox",
      ],
      visitors: "1234",
      rating: "8.9",
      editorRating: 4.0,
      bonus: "Min. deposit 100$",
      link: "provider/ava",
      backgroundColor: "#f5f5f5",
    },
    {
      provider: "plus500",
      rank: 4,
      bookie: "Plus500",
      logo: "img/Plus500.jpg",
      commission: "Advanced trading platform",
      depositInfo: "Competitive fees",
      minDeposit: "Min. deposit 100$",
      platforms: ["Windows", "Mac", "Android", "iOS"],
      supportIcons: [
        "windows",
        "apple",
        "linux",
        "android",
        "chrome",
        "firefox",
      ],
      visitors: "1234",
      rating: "9.9",
      editorRating: 4.0,
      bonus: "Min. deposit 100$",
      link: "provider/plus500",
      backgroundColor: "#f5f5f5",
    },
    {
      provider: "capital",
      rank: 5,
      bookie: "Capital",
      logo: "img/Capital.jpg",
      commission: "Copy other dealers or let yourself be copied",
      depositInfo: "Invest from 0.99$ in shares",
      minDeposit: "Min. deposit 100$",
      platforms: ["Windows", "Mac", "Android", "iOS"],
      supportIcons: [
        "windows",
        "apple",
        "linux",
        "android",
        "chrome",
        "firefox",
      ],
      visitors: "1234",
      rating: "8.9",
      editorRating: 4.0,
      bonus: "Min. deposit 100$",
      link: "provider/capital",
      backgroundColor: "#fff",
    },
  ];

  useEffect(() => {
    // Filter data based on the provider
    const filteredData = dummyData.filter((item) => item.provider === provider);
    setData(filteredData);
  }, [provider]);

  const handleVisit = (link) => {
    navigate(`/${link}`); // Navigate to the dynamic route
  };

  return (
    <div className="ratingMain">
      <ol id="ratings_home">
        {data.map((item, index) => (
          <li
            key={index}
            className="box mb d-flex flex-column flex-lg-row"
            data-tags="app,bizum,caballos,esports,fisicas,paypal,streaming"
            aria-expanded="true"
          >
            <div className="broker__num _top"> {item.rank} </div>
            <span
              data-lnk={btoa(item.link)} // Encode the link
              className="bookmarker-image"
            >
              <div
                className="bookie squared"
                data-bookie={item.bookie.toLowerCase()}
              >
                <img
                  loading="lazy"
                  draggable="false"
                  width="96px"
                  height="23px"
                  alt={item.bookie}
                  src={item.logo}
                  style={{ backgroundColor: item.backgroundColor }}
                />
              </div>
            </span>
            <div className="padding d-flex desc" style={{ flexBasis: "50%" }}>
              <div className="w-100">
                <ul className="broker__list">
                  <li>{item.commission}</li>
                  <li>{item.depositInfo}</li>
                  <li>{item.minDeposit}</li>
                  <li>For: {item.platforms.join(", ")}</li>
                </ul>
                <div className="broker__support">
                  {item.supportIcons.map((icon, idx) => (
                    <i
                      key={idx}
                      className={`fa fa-${icon}`}
                      aria-hidden="true"
                    ></i>
                  ))}
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center grade rating-container">
              <div
                className="rating-info"
                style={{
                  height: "50%",
                  width: "100%",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: "grey",
                    fontWeight: 500,
                    marginBottom: "5px",
                  }}
                >
                  Valoración
                </span>
                <div>
                  <span className="rating-text">{item.rating}</span>/10
                </div>
                <div
                  className="star-rating-container tts:left"
                  aria-label="Calificación del editor"
                >
                  <div
                    className="star-rating"
                    aria-label={`La calificación del editor para ${item.bookie} es de ${item.editorRating}.`}
                  >
                    <span
                      style={{ width: `${item.editorRating * 20}%` }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="d-flex align-items-center flex-column justify-content-center padding details"
              style={{
                flexGrow: 1,
                flexBasis: "30%",
                borderTopRightRadius: "var(--br)",
                borderBottomRightRadius: "var(--br)",
              }}
            >
              <span className="fw-bold text-center">{item.bonus}</span>
              <button role="button" onClick={() => handleVisit(item.link)}>
                Open Your Free Account
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lock"
                  stroke="currentColor"
                  fill="currentColor"
                  width="16"
                  height="16"
                  viewBox="0 0 17 23"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.4333333,1.5 C15.8633862,1.5 17.8333333,3.4699471 17.8333333,5.9 L17.8333333,8.83333333 C19.4,8.83333333 20.5,9.32582011 20.5,9.93333333 L20.5,19.1 C20.5,21.5300529 18.5300529,23.5 16.1,23.5 L8.9,23.5 C6.4699471,23.5 4.5,21.5300529 4.5,19.1 L4.5,9.93333333 C4.5,9.32582011 4.99248678,8.83333333 5.6,8.83333333 L7.16666667,8.83333333 L7.16666667,5.9 C7.16666667,3.4699471 9.13661377,1.5 11.5666667,1.5 L13.4333333,1.5 Z M12.5288136,13.809437 C11.6149825,13.809437 11.1847548,14.6415245 11.1847548,15.1250244 C11.1847548,15.4473577 11.3432404,15.7896813 11.6602116,16.1519953 L11.0503539,18.4945536 L14.0072733,18.4945536 L13.3012434,16.2940019 C13.636962,15.9751573 13.8048214,15.5854982 13.8048214,15.1250244 C13.8048214,14.4343139 13.4426447,13.809437 12.5288136,13.809437 Z M13.4333333,2.16666667 L11.5666667,2.16666667 C9.5048036,2.16666667 7.83333333,3.83813693 7.83333333,5.9 L7.83333333,8.83333333 L17.1666667,8.83333333 L17.1666667,5.9 C17.1666667,3.83813693 15.4951964,2.16666667 13.4333333,2.16666667 Z"
                    transform="translate(-4 -1)"
                  ></path>
                </svg>
              </button>{" "}
              <div className="broker-users">
                <i className="fa fa-users" aria-hidden="true"></i>
                <span>{item.visitors} visited this page today</span>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Tablepress;
