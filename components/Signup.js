import { useState } from "react";
import Image from "next/image";
import styles from "./Signup.module.css";
import axios from "axios";

export const Signup = ({ message, location }) => {
  const [emailAddress, setEmailAddress] = useState("");

  const handleInputChange = (event) => {
    setEmailAddress(event.target.value);
  };

  const signUpToNewsletter = async (e) => {
    e.preventDefault();

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
      case "homePost":
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
      submitButton.value = "Success!";
    } else {
      submitButton.value = "Try later";
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
      <p>{message}</p>
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
        value="Subscribe"
        className="signupSubmit"
        onClick={signUpToNewsletter}
      />
    </form>
  );
};

export default Signup;
