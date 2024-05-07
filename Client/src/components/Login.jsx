import React, { useState, useRef, useEffect } from "react";
import "../assets/css/Login.css";
import mn from "../assets/Logo/mn.png";
import { validationCheck } from "../utils/Validation.jsx";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

const Login = () => {
  const [isValidationError, setIsValidationError] = useState(null);
  const email = useRef();
  const password = useRef();

  const handelSubmit = () => {
    let message = validationCheck(email.current.value, password.current.value);
    setIsValidationError(message);
  };


  return (
    <div className="login">
      <div className="login-container">
        <div className="login-container_left">
          <div className="login-container_left_logo">
            <img src={mn} alt="MnNumero" />
          </div>
          <p className="login-container_left_pera">
            simplyfing your content need with aI
          </p>
        </div>
        <div className="login-container_left">
          {isValidationError != null ? (
            <span className="Message">
              <p>Login Unsussfull</p>
              <p>Please Check {isValidationError}.</p>
            </span>
          ) : (
            <span className="Message">
              <p>&nbsp;</p>
              <p>&nbsp;</p>
            </span>
          )}

          <form action="" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="User Id" className="" ref={email} />
            <input type="password" placeholder="Password" ref={password} />
            <button onClick={handelSubmit}>Login</button>
          </form>
        </div>
      </div>

      <div className="login-footer">
        <p>MetricsNumero INC</p>
        <p>Tearms | Policy </p>
        <div className="login-footer_social">
          <p>
            <a href="https://twitter.com/MetricsNumero" class="twitter">
              <XIcon
                color="secondary"
                fontSize="large"
                sx={{ "&:hover": { color: "black" } }}
              />
            </a>
          </p>
          <p>
            <a
              href="https://www.facebook.com/profile.php?id=100092733019863"
              class="facebook"
              //   target="__blanck"
            >
              <FacebookIcon
                color="secondary"
                fontSize="large"
                sx={{ "&:hover": { color: "black" } }}
              />
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/company/metricsnumero"
              class="linkedin"
            >
              <LinkedInIcon
                color="secondary"
                fontSize="large"
                sx={{ "&:hover": { color: "black" } }}
              />
            </a>
          </p>
        </div>
      </div>
      <p
        style={{
          display: "flex",
          alignItems: "center",
          paddingTop: "20px",
          justifyContent: "center",
        }}
      >
        © Copyright MetricsNumero. All Rights Reserved.
      </p>
    </div>
  );
};

export default Login;
