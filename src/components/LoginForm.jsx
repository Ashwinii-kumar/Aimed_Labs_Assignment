import React from "react";
import {BiHide} from 'react-icons/bi';

const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="form-container">
        <h1>Login</h1>
        <form>
          <div className="elements">
            <div>
              <label htmlFor="id">Login ID</label>
              <br></br>
              <input
                type="text"
                name="id"
                id="id"
                placeholder="Enter Login ID"
              />
            </div>
            <div style={{position:"relative"}}>
              <label htmlFor="password">Password</label>
              <br></br>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
              />
              <BiHide  style={{position:"absolute",top:"30px",right:"15px"}}/>
            </div>
            <div className="form-field">
              <div style={{display:"flex",alignItems:"center"}}>
                <label>
                  <input type="checkbox" />
                  <p>Remember Me</p>
                </label>
              </div>

              <button type="button">Change Password</button>
            </div>
            <div style={{display:"flex",alignItems:"center"}}>
              <label>
                <input type="checkbox" />
                Agree To{" "}
                <span>
                  <a href="#">Terms & Conditions</a>
                </span>
              </label>
            </div>

            <button type="submit">Login</button><br />
            <p style={{textAlign:"center",marginTop:"2.2rem"}} >
        Don't have an account?{" "}
        <a style={{ textDecoration: "underline" }} href="#">
          Register Here
        </a>
      </p>
          </div>

        </form>
      </div>
    
    </div>
  );
};

export default LoginForm;
