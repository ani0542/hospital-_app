import React from "react";
import governmebticon from "../../../assets/govlogo.png";
import cowinicon from "../../../assets/cowiniconsmall.png";
import circleicon from "../../../assets/circleicon.png";
import { Link } from "react-router-dom";
import "./header.css";
import { Form } from "semantic-ui-react";
function Header() {
  const selectOption = [
    { key: "Bangalore", value: "Bangalore", text: "Bangalore" },
    { key: "Hyderabad", value: "Hyderabad", text: "Hyderabad" },
    { key: "Pune", value: "Pune", text: "Pune" },
  ];
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
                  <li>
                    <Link to="/vaccine-center" className="kar-hyper-link">
                      Vaccine center
                    </Link>
                  </li>
                  <li>
                    <Link to="/vaccine-center" className="kar-hyper-link">
                      Allocate Quota
                    </Link>
                  </li>
                  <li>
                    <Link to="/manage-zone" className="kar-hyper-link">
                      Manage Zone
                    </Link>
                  </li>
                </ul>
              </nav>
              <img
                src={circleicon}
                alt="error"
                width="50px"
                height="50px"
                className="kar-mt5"
              />
              <Form.Select
                placeholder="Select Hospitals"
                options={selectOption}
                className="header-select-box"
              />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
