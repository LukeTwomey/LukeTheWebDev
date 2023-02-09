import { useState } from "react";
import { useContactFormValidator } from "./hooks/useContactFormValidator";
import clsx from "clsx";
import axios from "axios";
import styles from "./ContactForm.module.css";

export const ContactForm = () => {
  const [form, updateForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitButtonValue, setSubmitButtonValue] = useState("Send");

  const { errors, validateForm, onBlurField } = useContactFormValidator(form);

  const onChange = (e) => {
    e.preventDefault();
    const field = e.target.name;
    const nextFormState = {
      ...form,
      [field]: e.target.value,
    };
    updateForm(nextFormState);
    if (errors[field].dirty)
      validateForm({
        form: nextFormState,
        errors,
        field,
      });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
    if (!isValid) return;

    e.preventDefault();
    setSubmitButtonValue("Sending...");
    const contactResponse = await axios.post("/api/contact", form);
    const submitButton = e.target;

    if (contactResponse.status === 200) {
      setSubmitButtonValue("Sent!");
      updateForm({
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
      <div className={styles.formField}>
        <label htmlFor="name" className={styles.label}>
          Name:{" "}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="What's your name?"
          className={clsx(
            styles.input,
            errors.name.dirty && errors.name.error && styles.formFieldError
          )}
          onChange={onChange}
          onBlur={onBlurField}
          value={form.name}
          noValidate
        />
        {errors.name.dirty && errors.name.error ? (
          <p className={styles.formFieldErrorMessage}>{errors.name.message}</p>
        ) : null}
      </div>

      <div className={styles.formField}>
        <label htmlFor="email" className={styles.label}>
          Email:{" "}
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="you@example.com"
          className={clsx(
            styles.input,
            errors.email.dirty && errors.email.error && styles.formFieldError
          )}
          onChange={onChange}
          onBlur={onBlurField}
          value={form.email}
          noValidate
        />
        {errors.email.dirty && errors.email.error ? (
          <p className={styles.formFieldErrorMessage}>{errors.email.message}</p>
        ) : null}
      </div>

      <div className={styles.formField}>
        <label htmlFor="message" className={styles.label}>
          Message:{" "}
        </label>
        <textarea
          id="message"
          name="message"
          rows="6"
          placeholder="Your message here"
          className={clsx(
            styles.textarea,
            errors.message.dirty &&
              errors.message.error &&
              styles.formFieldError
          )}
          onChange={onChange}
          onBlur={onBlurField}
          value={form.message}
          noValidate
        />
        {errors.message.dirty && errors.message.error ? (
          <p className={styles.formFieldErrorMessage}>
            {errors.message.message}
          </p>
        ) : null}
      </div>

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
