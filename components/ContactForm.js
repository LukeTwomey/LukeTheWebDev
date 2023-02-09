import { useState } from "react";
import styles from "./ContactForm.module.css";

export const ContactForm = () => {
  const [formDetails, updateFormDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitButtonValue, setSubmitButtonValue] = useState("Send");

  const onChange = (e) => {
    e.preventDefault();
    updateFormDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitButtonValue("Sending...");
    const contactResponse = await axios.post("/api/contact", formDetails);
    const submitButton = e.target;

    if (contactResponse.status === 200) {
      setSubmitButtonValue("Sent!");
      updateFormDetails({
        name: "",
        email: "",
        message: "",
      });
      submitButton.classList.add("success");
    } else {
      submitButton.value = "Try again";
    }
  };

  return (
    <form className={styles.form}>
      <label htmlFor="name" className={styles.label}>
        Name:{" "}
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="What's your name?"
        className={styles.input}
        onChange={onChange}
        value={formDetails.name}
      />
      <label htmlFor="email" className={styles.label}>
        Email:{" "}
      </label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="you@example.com"
        className={styles.input}
        onChange={onChange}
        value={formDetails.email}
      />
      <label htmlFor="message" className={styles.label}>
        Message:{" "}
      </label>
      <textarea
        id="message"
        name="message"
        rows="6"
        placeholder="Your message here"
        className={styles.textarea}
        onChange={onChange}
        value={formDetails.message}
      />
      <input
        type="submit"
        id="submit"
        name="submit"
        value={submitButtonValue}
        className="contactSubmit"
        onClick={onSubmit}
      />
    </form>
  );
};

export default ContactForm;
