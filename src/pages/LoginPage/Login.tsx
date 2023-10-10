import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/img/sign-in-img.png";
const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const [password, setPassword] = useState<String>("");
  const [username, setUsername] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit = () => {
    // send the username and password service to any endpoint to verify and then if it's successful
    navigate("/dashboard");
  };
  return (
    <div className="login-page">
      <div className="login-page__left">
        <img src={image} alt="" />
      </div>

      <div className="login-page__right">
        <div className="info">
          <h2>Welcome!</h2>
          <p>Enter details to login.</p>
        </div>

        <form onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e: any) => setUsername(e.target.value)}
          />
          <div className="password">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e: any) => setPassword(e.target.value)}
            />
            <p className="show" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "HIDE" : "SHOW"}
            </p>
          </div>
          <a href="javascript:void(0)" className="forgot">
            Forgot PASSWORD?
          </a>
          <input type="submit" value="LOG IN " />
        </form>
      </div>
    </div>
  );
};

export default Login;
