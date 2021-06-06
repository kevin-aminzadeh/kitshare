import React, { useState } from 'react';

import API from '../../../utils/API';
import { useAuth } from '../../../utils/authContext';

function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const { setCurrentUser } = useAuth();

  const handleInputChange = (e) => {
    const { target } = e;
    const { value } = target;
    const { name } = target;

    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { status: responseStatus } = await API.login(credentials);
    if (responseStatus === 200) {
      const { user } = await API.checkSession();
      setCurrentUser(user);
    }
  };

  return (
    <div className="container d-flex h-100">
      <div className="container align-self-center">
        <div className="row">
          <div className="col col-lg-8 mx-auto bg-white shadow-sm">
            <div className="row mt-5">
              <div className="col mx-auto">
                <h1 className="display-6 text-center">Welcome back.</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 px-0 mx-auto pt-1">
                <h2 className="lead text-center">
                  Enter your email address and password to continue.
                </h2>
              </div>
            </div>
            <div className="row mt-4 px-5">
              <form id="loginForm" onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control border-top-0 border-start-0 border-end-0 border-bottom"
                    id="email-input"
                    name="email"
                    placeholder="name@example.com"
                    value={credentials.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control border-top-0 border-start-0 border-end-0 border-bottom"
                    id="password-input"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="text-center mt-5">
                  <button type="submit" className="btn btn-dark w-50 py-3 rounded-pill">
                    Continue
                  </button>
                </div>
              </form>
            </div>
            <div className="row mt-5 mb-5">
              <div className="col text-center">
                <p className="subheading">
                  Don&apos;t have an account?
                  <a href="/register" className="text-decoration-none fw-bold link-success">
                    Create one
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
