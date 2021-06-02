import React, { useEffect } from "react";
import governmebticon from "../../../assets/govlogo.png";
import cowinicon from "../../../assets/cowiniconsmall.png";
import circleicon from "../../../assets/circleicon.png";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchAccessControl } from "../../../redux/action/user/user";
import "./header.css";

function Header({ access, fetchAccessControl }) {
  useEffect(() => {
    fetchAccessControl();
  }, []);
  console.log(access, "access");
  return (
    <>
      <div className="home">
        <div className="wrapper">
          <nav className="nav-area">
            <ul>
              <li>
                <span>
                  <img
                    src={governmebticon}
                    alt="error"
                    width="60px"
                    height="60px"
                  />
                </span>
              </li>
              <li>
                <span>
                  <img
                    src={cowinicon}
                    alt="error"
                    height="60px"
                    width="238px"
                  />
                </span>
              </li>
            </ul>
            <div className="rightside">
              <nav className="nav-area nav-area-link">
                <ul>
                  {access && access.manage_cvcs ? (
                    <li>
                      <NavLink
                        to="/vaccine-center"
                        className="kar-hyper-link"
                        activeClassName="kar-hyper-link-selected"
                      >
                        Vaccine center
                      </NavLink>
                    </li>
                  ) : (
                    ""
                  )}
                  {access && access.manage_quota ? (
                    <li>
                      <NavLink
                        to="/manage-quota/1"
                        className="kar-hyper-link"
                        activeClassName="kar-hyper-link-selected"
                      >
                        Allocate Quota
                      </NavLink>
                    </li>
                  ) : (
                    ""
                  )}
                  {access && access.manage_zones ? (
                    <li>
                      <NavLink
                        to="/manage-zone"
                        className="kar-hyper-link"
                        activeClassName="kar-hyper-link-selected"
                      >
                        Manage Zone
                      </NavLink>
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </nav>
              <img
                src={circleicon}
                alt="error"
                width="50px"
                height="50px"
                className="kar-mt5"
              />
              <Dropdown className="kra-header-dropdown">
                <Dropdown.Toggle>Hospital</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = ({ userAccess: { access } }) => {
  return { access: access };
};
const mapDispatchToProps = (dispatch) => ({
  fetchAccessControl: () => dispatch(fetchAccessControl()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
