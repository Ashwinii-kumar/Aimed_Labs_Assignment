import React from "react";

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
            <div>
              <label htmlFor="password">Password</label>
              <br></br>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
              />
            </div>
            <div className="form-field">
              <div>
                <label>
                  <input type="checkbox" />
                  <p>Remember Me</p>
                </label>
              </div>

              <button type="button">Change Password</button>
            </div>
            <div>
              <label>
                <input type="checkbox" />
                Agree To{" "}
                <span>
                  <a href="#">Terms & Conditions</a>
                </span>
              </label>
            </div>

            <button type="submit">Login</button>
          </div>
        </form>
      </div>
      <span style={{ marginTop: "1rem" }}>
        Don't have an account?{" "}
        <a style={{ textDecoration: "underline" }} href="#">
          Register Here
        </a>
      </span>
    </div>
  );
};

export default LoginForm;
