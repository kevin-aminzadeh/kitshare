import React, { useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import API from '../../../../utils/API';
import { useAuth } from '../../../../utils/authContext';
import Dropdown from '../../../dropdown/Dropdown';

function TopNavContentDesktop() {
  const { currentUser, setCurrentUser } = useAuth();
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const history = useHistory();

  const handleLogout = async () => {
    await API.logout();

    setCurrentUser({});
    history.goBack();
  };

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
                <button
                  className="nav-link btn btn-link dropdown-toggle text-capitalize"
                  id="navbarDropdown"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={() => setDropDownOpen(true)}
                >
                  Hi, {currentUser.firstName}
                </button>
                <Dropdown isOpen={dropDownOpen}>
                  <li>
                    <Link className="dropdown-item" to="/account-settings">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button type="button" className="dropdown-item" onClick={() => handleLogout()}>
                      Logout
                    </button>
                  </li>
                </Dropdown>
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
