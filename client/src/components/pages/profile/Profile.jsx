import React from 'react';
import { Link } from 'react-router-dom';
import API from '../../../utils/API';
import { useMdMediaQuery } from '../../../utils/mediaQueryHooks';
import AvatarImage from '../../core/avatarImage/AvatarImage';
import BottomNav from '../../core/bottomNav/BottomNav';
import TopNav from '../../core/topNav/TopNav';

function Profile() {
  return (
    <>
      {useMdMediaQuery() && <TopNav />}
      <div id="profile" className="container px-4 my-4 pb-5 flex-fill">
        <div className="row h-100">
          <div className="col d-flex flex-column">
            <div className="row align-items-center mb-4">
              <div className="col">
                <h1>Hi User</h1>
                <Link to="/users/show/1" className="text-decoration-none link-primary">
                  Show profile
                </Link>
              </div>
              <div className="col-4 text-end">
                <AvatarImage />
              </div>
            </div>
            <div className="row flex-fill">
              <ul className="nav flex-column flex-fill justify-content-between pe-0">
                <div className="main-nav">
                  <li className="nav-item">
                    <Link className="nav-link link-dark" to="account-settings/personal-info">
                      <span className="me-2">
                        <i className="far fa-id-card" />
                      </span>
                      Personal Info
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link link-dark" to="account-settings/personal-info">
                      <span className="me-2">
                        <i className="fas fa-cog" />
                      </span>
                      Account
                    </Link>
                  </li>

                  <li className="nav-item">
                    <hr className="dropdown-divider mt-4 mb-2" />
                  </li>
                  <li>
                    <h6 className="dropdown-header">Lending</h6>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link link-dark" to="account-settings/personal-info">
                      <span className="me-2">
                        <i className="fas fa-hand-holding-usd" />
                      </span>
                      Lend your gear
                    </Link>
                  </li>
                  <li className="nav-item">
                    <hr className="dropdown-divider mt-4 mb-2" />
                  </li>
                  <li>
                    <h6 className="dropdown-header">Support</h6>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link link-dark" to="account-settings/personal-info">
                      <span className="me-2">
                        <i className="far fa-question-circle" />
                      </span>
                      How KitShare Works
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link link-dark" to="account-settings/personal-info">
                      <span className="me-2">
                        <i className="far fa-question-circle" />
                      </span>
                      Get Help
                    </Link>
                  </li>
                </div>

                <div className="bottom-nav my-5">
                  <li className="nav-item justify-self-end">
                    <button
                      type="button"
                      className="btn btn-outline-dark w-100 py-3 fw-bolder"
                      onClick={API.logout}
                    >
                      Log out
                    </button>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {!useMdMediaQuery() && <BottomNav />}
    </>
  );
}

export default Profile;
