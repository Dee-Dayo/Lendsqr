import React, { useState } from "react";
import style from './login.module.scss';
import logo from '../../../assets/logo.svg';
import image from '../../../assets/login.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://api.json-generator.com/templates/g2P52PnYaa3h/data",
        { email, password },
        {
          headers: {
            Authorization: "Bearer c2w9cbpypi426epl9e9core9vnngxwhcuf506246",
          },
        }
      );

      if (response.status === 200) {
        console.log("Login successful:", response.data);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className={style.container}>
      <div>
        <img src={logo} alt="Logo" />
        <div className={style.loginPic}>
          <img src={image} alt="Log in" />
        </div>
      </div>

      <div className={style.welcome}>
        <h1>Welcome!</h1>
        <p>Enter details to login</p>
        <div className={style.inputContainer}>
          <input
            type="email"
            placeholder="Email"
            className={style.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={style.inputContainer}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className={style.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className={style.toggleIcon}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        <h5>FORGOT PASSWORD?</h5>
        <button className={style.btn} onClick={handleLogin}>
          Log in
        </button>
      </div>
    </div>
  );
};

export default Login;