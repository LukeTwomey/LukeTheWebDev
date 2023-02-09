import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";
import styles from "../styles/contact.module.css";
import axios from "axios";

export const Contact = () => {
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
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="author" content="Luke Twomey" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Contact Me | Luke the Web Dev</title>
        <meta
          name="description"
          content="Have a great idea you'd like to discuss? Perhaps you'd like some help after reading one of my blog posts! Please do contact me, I would love to hear from you."
        ></meta>
      </Head>
      <main>
        <h1>Contact Me</h1>
        <Image
          src="/images/luke-twomey-contact.webp"
          alt="Luke Twomey"
          width="358"
          height="176"
          priority
          className={styles.image}
          itemProp="image"
        />
        <p>
          Do you have a great business idea you'd like to discuss? Perhaps you'd
          like some help after reading one of my{" "}
          <Link href={"/blog"}>blog posts</Link>! Please do contact me, I would
          love to hear from you.
        </p>

        <div className={styles.socials}>
          <Socials />
        </div>

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
      </main>
    </div>
  );
};

export default Contact;
