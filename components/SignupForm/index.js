import { useState } from "react";
import { useSignupFormValidator } from "./hooks/useSignupFormValidator";
import Image from "next/image";
import clsx from "clsx";
import styles from "./SignupForm.module.css";
import axios from "axios";

export const SignupForm = ({ message, location }) => {
  const [form, updateForm] = useState({
    email: "",
  });

  const [submitButtonValue, setSubmitButtonValue] = useState("Subscribe");

  const { errors, validateForm, onBlurField } = useSignupFormValidator(form);

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

  const signUpToNewsletter = async (e) => {
    e.preventDefault();
    const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
    if (!isValid) return;

    const submitButton = e.target;

    submitButton.classList.remove("success");
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

    try {
      const subscribeResponse = await axios.post(
        "https://lukethewebdev.api.up.railway.app/addSubscriber",
        null,
        { params: { email: form.email, tags: tags } }
      );

      if (subscribeResponse.status === 200) {
        submitButton.classList.add("success");
        setSubmitButtonValue("Subscribed!");
      } else {
        setSubmitButtonValue("Try again");
      }
    } catch (e) {
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
        <p className={styles.text}>{message}</p>
        <div className={styles.formFieldsContainer}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Email address"
              name="email"
              className={clsx(
                styles.input,
                errors.email.dirty &&
                  errors.email.error &&
                  styles.formFieldError
              )}
              onChange={onChange}
              onBlur={onBlurField}
              value={form.email}
              noValidate
            />
            {errors.email.dirty && errors.email.error ? (
              <p className={styles.formFieldErrorMessage}>
                {errors.email.message}
              </p>
            ) : null}
          </div>
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
