import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Table } from "react-bootstrap";
import deleteIcon from "../../../assets/icon/delete.svg";
import editIcon from "../../../assets/icon/edit.svg";
import "./table.css";

function KarTable({ tableHeader, tableValue }) {
  const tableDataRender = (key, value) => {
    switch (key) {
      case "action":
        return actionRender(value);

      case "delete":
        return value ? (
          <img src={deleteIcon} alt="icon" className="kar-mt7 kar-cursor-pointer" />
        ) : (
          ""
        );

      default:
        return <p>{value}</p>;
    }
  };

  const actionRender = (type) => {
    switch (type) {
      case "manage_and_allocate":
        return (
          <p>
            <Link to="/vaccine-center" className="kar-table-link kar-mr20">
              Manage vaccine centers
            </Link>
            <Link to="/vaccine-center" className="kar-table-link kar-mr20">
              Allocate vaccine quota
            </Link>
          </p>
        );
      case "check_online_slots":
        return (
          <p>
            <Link to="/vaccine-center" className="kar-table-link">
              Check online slots
            </Link>
          </p>
        );
      case "edit_delete":
        return (
          <>
            <img src={editIcon} alt="icon" className="kar-mt7 kar-mr10 kar-cursor-pointer" />
            <img src={deleteIcon} alt="icon" className="kar-mt7 kar-cursor-pointer" />
          </>
        );
      default:
        return "-";
    }
  };
  return (
    <>
      <Row>
        <Col>
          <Table className="kar-table">
            <thead>
              <tr>
                {tableHeader.map((o) => (
                  <th>{o.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableValue.map((o) => (
                <tr>
                  {Object.keys(o).map((item, i) => (
                    <td>{tableDataRender(item, o[item])}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}

export default KarTable;
