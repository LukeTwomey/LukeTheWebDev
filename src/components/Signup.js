import React, { useState } from "react";
import signup from "../images/signup.svg";
import { addSubscriber } from "../api";
import "./Signup.css";

export const Signup = ({ message }) => {
  const [emailAddress, setEmailAddress] = useState("");

  const handleInputChange = (event) => {
    setEmailAddress(event.target.value);
  };

  const signUpToNewsletter = (e) => {
    e.preventDefault();
    addSubscriber(emailAddress).then((response) => {
      const submitButton = document.getElementById("submit");

      if (response.status === 200) {
        submitButton.classList.add("success");
        submitButton.value = "Success!";
      } else {
        submitButton.value = "Try later";
      }
    });
  };

  return (
    <form className="signup">
      <img src={signup} alt="Newsletter icon" className="filter-dark-blue" />
      <p>{message}</p>
      <input
        type="text"
        placeholder="Email address"
        name="email"
        className="email"
        onChange={handleInputChange}
        value={emailAddress}
      />
      <input
        id="submit"
        type="submit"
        value="Subscribe"
        className="submit"
        onClick={signUpToNewsletter}
      />
    </form>
  );
};
