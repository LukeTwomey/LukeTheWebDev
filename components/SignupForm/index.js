import { useState } from "react";
import Image from "next/image";
import styles from "./SignupForm.module.css";
import axios from "axios";

export const SignupForm = ({ message, location }) => {
  const [emailAddress, setEmailAddress] = useState("");
  const [submitButtonValue, setSubmitButtonValue] = useState("Subscribe");

  const handleInputChange = (event) => {
    setEmailAddress(event.target.value);
  };

  const signUpToNewsletter = async (e) => {
    e.preventDefault();
    setSubmitButtonValue("Sending...");

    let tags = [];
    switch (location) {
      case "middleOfPost":
        tags.push(3601975);
        break;
      case "endOfPost":
        tags.push(3617774);
        break;
      case "aboutPage":
        3626894;
        tags.push(3626182);
        break;
      case "homePage":
        tags.push(3626894);
        break;
      default:
        tags.push(3601975);
    }

    const subscribeResponse = await axios.post(
      "https://lukethewebdev.api.up.railway.app/addSubscriber",
      null,
      { params: { email: emailAddress, tags: tags } }
    );

    const submitButton = e.target;

    if (subscribeResponse.status === 200) {
      submitButton.classList.add("success");
      setSubmitButtonValue("Subscribed!");
    } else {
      setSubmitButtonValue("Try again");
    }
  };

  return (
    <form className={styles.signup}>
      <Image
        src="/images/signup.svg"
        alt="Newsletter icon"
        width="50"
        height="50"
        className={styles.filterDarkBlue}
      />
      <div className={styles.right}>
        <p>{message}</p>
        <div className={styles.formFieldsContainer}>
          <input
            type="text"
            placeholder="Email address"
            name="email"
            className={styles.email}
            onChange={handleInputChange}
            value={emailAddress}
          />
          <input
            id="submit"
            type="submit"
            value={submitButtonValue}
            className="signupSubmit"
            onClick={signUpToNewsletter}
          />
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
