import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../../utils/authContext';

function TopNavContentDesktop() {
  const { currentUser } = useAuth();
  return (
    <>
      <div className="col">
        <NavLink to="/" className="navbar-brand text-primary fw-bold fs-4">
          Kitshare
        </NavLink>
      </div>
      <div className="col">
        <form className="d-flex mx-auto w-100">
          <input
            className="form-control rounded-pill text-center text-xl-start"
            type="search"
            placeholder="Start your search"
            aria-label="Search"
          />
        </form>
      </div>
      <div className="col">
        <div className="d-flex justify-content-end " id="navbarSupportedContent">
          {currentUser.id ? (
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-capitalize"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hi, {currentUser.firstName}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/login" className="nav-link text-dark">
                  Sign up
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default TopNavContentDesktop;
