import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../Sidebar/index.css";
import "./index.css";
import PhoneInput from "react-phone-input-2";

function Sidebar3({ headingText, withoutsticky, provider_name }) {
  const location = useLocation(); // Get the current location

  const [countryData, setCountryData] = useState({
    callingCode: "",
    countryName: "",
    countryCode: "",
  });

  const [formData, setFormData] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    phone: "",
    promotions: false,
    terms: false,
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // New state to track form submission

  const handlePhoneChange = (value, country) => {
    setFormData((prevData) => ({
      ...prevData,
      phone: `+${value}`, // Store full phone number with plus sign
    }));

    setCountryData({
      callingCode: `+${country.dialCode}`, // Include '+' for the calling code
      countryName: country.name,
      countryCode: country.countryCode,
    });
  };

  const apiUrl = process.env.REACT_APP_PUBLIC_URL;

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      phonecc: countryData.callingCode,
      provider: provider_name,
    };

    try {
      // const token = process.env.REACT_APP_TOKEN;
      // const response = await axios.post(`${apiUrl}/api/users`, payload, {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${token}`, // Include the Bearer token
      //   },
      // });

      // console.log("Success:", response.data);

      // Hide form and show success message
      setIsFormSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error.message);
      alert(error.response?.data?.message || "An unexpected error occurred.");
    }
  };
  console.log(isFormSubmitted);

  // Inline style based on the withoutsticky prop
  const sidebarStyle = withoutsticky
    ? { position: "static", marginTop: "20px" }
    : {};

  return (
    <aside className="sidebar" style={sidebarStyle}>
      <div
        id="mc4wp_form_widget-28"
        className={`widget widget_mc4wp_form_widget ${
          isFormSubmitted ? "active" : ""
        }`}
      >
        {!isFormSubmitted ? (
          // Render the form if not submitted
          <>
            <div className="title">Open Free Account</div>
            <form
              id="mc4wp-form-1"
              className="mc4wp-form mc4wp-form-27048"
              onSubmit={handleSubmit}
            >
              <div className="mc4wp-form-fields">
                <p>
                  <input
                    aria-label="Nombre"
                    type="text"
                    name="Firstname"
                    placeholder="Firstname"
                    required
                    value={formData.Firstname}
                    onChange={handleChange}
                  />
                </p>
                <p>
                  <input
                    aria-label="Nombre"
                    type="text"
                    name="Lastname"
                    placeholder="Lastname"
                    required
                    value={formData.Lastname}
                    onChange={handleChange}
                  />
                </p>
                <p>
                  <input
                    aria-label="Email"
                    type="email"
                    name="Email"
                    placeholder="Email"
                    required
                    value={formData.Email}
                    onChange={handleChange}
                  />
                </p>
                <PhoneInput
                  className="country_code_phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                />
                <p>
                  <input
                    aria-label="Suscribirme"
                    type="submit"
                    value="Start now"
                  />
                </p>
                <p style={{ textAlign: "center" }}>
                  By clicking "START NOW" I am over 18 and agree to the Terms &
                  Conditions.
                </p>
              </div>
            </form>
          </>
        ) : (
          // Render the success message if form is submitted
          <div className="success-message" style={{ textAlign: "center" }}>
            <h2>Thank you!</h2>
            <p>
              Your registration is successful. A representative will contact you
              shortly to inform you of the next steps!
            </p>
          </div>
        )}
      </div>
    </aside>
  );
}

export default Sidebar3;
