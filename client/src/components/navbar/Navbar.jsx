import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand navbar-light bg-white shadow-sm py-3 py-xl-3 py-xxl-4 sticky-top">
        <div className="container">
          <div className="row w-100 justify-content-center">
            <div className="col d-none d-xl-block">
              <NavLink to="/" className="navbar-brand text-primary fw-bold fs-4">
                Kitshare
              </NavLink>
            </div>
            <div className="col w-100">
              <form className="d-flex mx-auto mx-auto w-100">
                <input
                  className="form-control rounded-pill text-center text-xl-start"
                  type="search"
                  placeholder="Start your search"
                  aria-label="Search"
                />
              </form>
            </div>
            <div className="col d-none d-xl-block">
              <div className="d-flex justify-content-end " id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Hi, User
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
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Tab Navigator */}
      <nav
        className="navbar fixed-bottom navbar-light bg-white border-top d-xl-none"
        role="navigation"
      >
        <div className="container">
          <ul className="navbar-nav d-flex flex-row justify-content-around w-100">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">
                <div className="row d-flex flex-column justify-content-center align-items-center">
                  <i className="fas fa-search fa-lg text-center mb-1" />
                  <div className="fs-6">
                    <small>Explore</small>
                  </div>
                </div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/bookings" className="nav-link">
                <div className="row d-flex flex-column justify-content-center align-items-center">
                  <i className="fas fa-receipt fa-lg text-center mb-1" />
                  <div className="fs-6">
                    <small>Bookings</small>
                  </div>
                </div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/inbox" className="nav-link">
                <div className="row d-flex flex-column justify-content-center align-items-center">
                  <i className="fas fa-inbox fa-lg text-center mb-1" />
                  <div className="fs-6">
                    <small>Inbox</small>
                  </div>
                </div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/profile" className="nav-link">
                <div className="row d-flex flex-column justify-content-center align-items-center">
                  <i className="far fa-user fa-lg text-center mb-1" />
                  <div className="fs-6">
                    <small>Profile</small>
                  </div>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
