import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, Link } from "react-router-dom"; // Import useLocation
import axios from "axios";

import "../Sidebar/index.css";
import PhoneInput from "react-phone-input-2";

function Sidebar3({ headingText, withoutsticky, provider_name }) {
  const location = useLocation(); // Get the current location
  // console.log(location);
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
  const handlePhoneChange = (value, country) => {
    setFormData((prevData) => ({
      ...prevData,
      phone: `+${value}`, // Store full phone number with plus sign
    }));

    setCountryData({
      callingCode: `+${country.dialCode}`, // Include '+' for the calling code
      countryName: country.name,
      countryCode: country.countryCode, // or country.cca2
    });
  };
  const apiUrl = process.env.REACT_APP_PUBLIC_URL;

  //console.log(apiUrl);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  console.log(provider_name);
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Concatenate the calling code with the phone number
    //const fullPhoneNumber = `${countryData.callingCode}${" "}${formData.phone}`;

    // Extract the last segment of the pathname
    const urlSegment = location.pathname.split("/").pop();

    const payload = {
      ...formData,
      // phone: fullPhoneNumber, // Send the concatenated phone number
      phonecc: countryData.callingCode,
      // countryName: countryData.countryName,
      // country_code: countryData.countryCode, // Add the country code to the payload
      //provider: urlSegment, // Use the last segment of the pathname
      provider: provider_name, // Use 'manualText' if urlSegment is 'iframe'
    };

    // console.log(payload);

    try {
      const token = process.env.REACT_APP_TOKEN; // Replace with your actual token
      const response = await axios.post(`${apiUrl}/api/users`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the Bearer token
        },
      });

      console.log("Success:", response.data);

      // Clear form data
      setFormData({
        Firstname: "",
        Lastname: "",
        Email: "",
        phone: "",
        promotions: false,
        terms: false,
      });
      if (urlSegment !== "iframe") {
        // Show success alert
        alert(
          "Congratulations! Your registration was successful! Our representative will contact you in an hour, please be aware and accept the call. Now, you will be redirected to the recommended broker."
        );
        // Redirect to a different URL after the alert is dismissed
        window.location.href =
          "https://academy-center.com/mtm15_thank-you-page-en/"; // Replace with the desired URL
      } else {
        toast.success("Your registration was successful.");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        console.error("Error:", error.response.data.message);
        toast.warn(error.response.data.message || "An error occurred.");
      } else {
        console.error("Error submitting form:", error.message);
        toast.error("An unexpected error occurred.");
      }
    }
  };

  // Inline style based on the withoutsticky prop
  const sidebarStyle = withoutsticky
    ? { position: "static", marginTop: "20px" }
    : {};

  return (
    <aside className="sidebar" style={sidebarStyle}>
      <div
        id="mc4wp_form_widget-28"
        className="widget widget_mc4wp_form_widget"
      >
        <div className="title">{headingText}</div>
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
            {/* <div className="country_code_phone">
              <input
                className="form__input--code"
                type="text"
                name="phonecc"
                placeholder="+1"
                value={countryData.callingCode}
                readOnly
              />
              <input
                className="form__input--phone"
                type="tel"
                name="phone"
                placeholder="Phone"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div> */}
            <p>
              <input aria-label="Suscribirme" type="submit" value="Start now" />
            </p>
            <p>
              <label>
                <input
                  className="checkbox_color"
                  aria-label="promotions"
                  name="promotions"
                  type="checkbox"
                  value="1"
                  checked={formData.promotions}
                  onChange={handleChange}
                />
                I would like to receive product updates, promotions, special
                offers, event details, news, and services announcements by
                E-mail and SMS.
              </label>
            </p>
            <p>
              <label>
                <input
                  className="checkbox_color"
                  aria-label="terms"
                  name="terms"
                  type="checkbox"
                  value="1"
                  checked={formData.terms}
                  onChange={handleChange}
                />
                I am over 18 & agree to the{" "}
                <Link to="/terms" className="asideterms">
                  Terms &amp; Conditions
                </Link>
              </label>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer autoClose={1000} />
    </aside>
  );
}

export default Sidebar3;
