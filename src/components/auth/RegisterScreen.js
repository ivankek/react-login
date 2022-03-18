import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { removeError, setError } from "../../actions/ui";

export const RegisterScreen = () => {
  const dispatch = useDispatch();

  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange, reset] = useForm({
    name: "Ivan",
    email: "ivan.kek@hotmail.com",
    password: "edelp2022",
    password2: "edelp2022",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      if (name.trim().length === 0) {
        dispatch(setError("Name is required"));
        // return false;
      } else if (!validator.isEmail(email)) {
        dispatch(setError("Email is not valid"));
      } else if (password !== password2 && password.length < 5) {
        dispatch(
          setError(
            "Password should be at least 6 characters and match each other"
          )
        );
      } else {
        dispatch(removeError());
      }
    }

    reset();
  };

  const isFormValid = () => {
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}

        <input
          className="auth__input"
          autoComplete="off"
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleInputChange}
          name="name"
        />
        <input
          className="auth__input"
          autoComplete="off"
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
          name="email"
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
          name="password"
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm password"
          value={password2}
          onChange={handleInputChange}
          name="password2"
        />
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};