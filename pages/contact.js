import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/contact.module.css";

export const Contact = () => {
  const [formDetails, updateFormDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    e.preventDefault();
    updateFormDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formDetails);
  };

  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="author" content="Luke Twomey" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Contact</title>
        <meta
          name="description"
          content="Contact page description here..."
        ></meta>
      </Head>
      <main>
        <h1>Contact</h1>
        <p>
          Please don't hesitate to get in touch, I look forward to hearing from
          you!
        </p>
        <form>
          <label htmlFor="name" className={styles.label}>
            Name:{" "}
          </label>
          <input
            type="text"
            id="name"
            name="name"
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
            rows="10"
            className={styles.textarea}
            onChange={onChange}
            value={formDetails.message}
          />
          <input
            type="submit"
            id="submit"
            name="submit"
            value="Submit"
            className={styles.submit}
            onClick={onSubmit}
          />
        </form>
      </main>
    </div>
  );
};

export default Contact;
