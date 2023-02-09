export const nameValidator = (name) => {
  if (!name) {
    return "Name is required";
  } else if (name.length < 2) {
    return "Name must have a minimum 2 characters";
  }
  return "";
};

export const emailValidator = (email) => {
  if (!email) {
    return "Email is required";
  } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
    return "Incorrect email format";
  }
  return "";
};

export const messageValidator = (message) => {
  if (!message) {
    return "Message is required";
  } else if (message.length < 3) {
    return "Message must have a minimum 3 characters";
  }
  return "";
};
