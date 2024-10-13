import "./index.css";
function BrokerRating() {
  return (
    <>
      <div className="manage-hosting-wrap">
        <div className="container-fluid container-lg">
          <div className="row manage-hosting-content">
            <div className="col-12">
              <h2 className="sect-heading">
                Introduction to Our{" "}
                <span className="highlighted">Broker Rating System</span>
              </h2>
            </div>
            <div className="col-12 col-md-6 box2">
              <img
                className=" box-img"
                src="img/ComplianceandSecurity.jpg"
                loading="lazy"
                alt="24/7 Worry-Free Fully Managed Support"
                width="500"
                height="320"
              />{" "}
              <div className="box-heading">
                Ensuring Compliance and Security
              </div>
              <div className="box-description">
                Unlock the full power of our Cloud VPS solutions, supported by
                expert tech assistance via instant live chat or rapid-response
                tickets (15-minute reply time).
              </div>
            </div>
            <div className="col-12 col-md-6 box2">
              <img
                className=" box-img"
                src="/img/account-types-and-costs.jpg"
                loading="lazy"
                alt="Free, Effortless &amp; Guaranteed Migration"
                width="500"
                height="320"
              />{" "}
              <div className="box-heading">Account Types and Pricing</div>
              <div className="box-description">
                Our hosting specialists will seamlessly migrate all your
                websites to the new server at a time that works for you,
                completely free of charge. Enjoy a hassle-free migration with
                zero downtime.
              </div>
            </div>
            <div className="col-12 col-md-6 box2">
              <img
                className=" box-img"
                src="img/customer-support-and-education.jpg"
                loading="lazy"
                alt="Best Value with Flexible Resources"
                width="500"
                height="320"
              />{" "}
              <div className="box-heading">
                Customer Support and Flexibility
              </div>
              <div className="box-description">
                Optimize your costs by only paying for the resources you use.
                Our scalable solutions allow you to adjust CPU, RAM, and storage
                based on your project's needs, with the flexibility to easily
                upgrade as your requirements grow.
              </div>
            </div>
            <div className="col-12 col-md-6 box2">
              <img
                className=" box-img"
                src="img/conclusion-making-an-informed-choice.jpg"
                loading="lazy"
                alt="Easy Website Management"
                width="500"
                height="320"
              />{" "}
              <div className="box-heading">
                Conclusion: Making an Informed Decision
              </div>
              <div className="box-description">
                Elevate your website hosting experience with SPanel, included
                with your managed VPS service. For those who prefer, cPanel is
                also available as an additional option.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default BrokerRating;
