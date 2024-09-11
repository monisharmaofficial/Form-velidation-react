import { useState } from "react";

const BasicForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formIsValid = true;
    let glti = {};

    if (name === "") {
      glti.mona = "Please fill out your name.";
      formIsValid = false;
    } else if (name.length < 3) {
      glti.mona = "Name must be at least 3 characters.";
      formIsValid = false;
    }

    if (email === "") {
      glti.moni = "Please fill out your email.";
      formIsValid = false;
    } else if (!email.includes("@")) {
      glti.moni = "Email must contain '@'.";
      formIsValid = false;
    } else if (email.indexOf("@") <= 0) {
      glti.moni = "Invalid @ position it can't come first";
      formIsValid = false;
    } else if (
      email.charAt(email.length - 4) != "." &&
      email.charAt(email.length - 3) != "."
    ) {
      glti.moni = "Invalid . position use atleast 3 char after dot ";
      formIsValid = false;
    }

    if (password === "") {
      glti.amn = "Please fill out your password.";
      formIsValid = false;
    } else if (password.length < 6 || password.length > 10) {
      glti.amn = "Password should be 6-10 characters long.";
      formIsValid = false;
    }

    if (cpassword === "") {
      glti.amnu = "Please confirm your password.";
      formIsValid = false;
    } else if (cpassword !== password) {
      glti.amnu = "Passwords do not match.";
      formIsValid = false;
    }

    setErrors(glti);
    return formIsValid;
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <form onSubmit={submitForm}>
          <h1 className="text-2xl font-bold mb-6 text-center">
            Registration Form
          </h1>

          <div className="mb-4">
            <label htmlFor="username" className="block font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.mona && (
              <p className="text-red-500 text-sm mt-1">{errors.mona}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.moni && (
              <p className="text-red-500 text-sm mt-1">{errors.moni}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.amn && (
              <p className="text-red-500 text-sm mt-1">{errors.amn}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="password"
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.amnu && (
              <p className="text-red-500 text-sm mt-1">{errors.amnu}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BasicForm;
