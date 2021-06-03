import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Table, Spinner } from "react-bootstrap";
import swal from "sweetalert";
import deleteIcon from "../../../assets/icon/delete.svg";
import editIcon from "../../../assets/icon/edit.svg";
import "./table.css";

function KarTable({
  tableHeader,
  tableValue,
  tableFor,
  deleteFun,
  isLoading,
  editClick,
  zoneId,
}) {
  const tableDataRender = (key, value, row) => {
    switch (key) {
      case "action":
        return actionRender(value, row);

      case "delete":
        return value ? (
          <img
            src={deleteIcon}
            alt="icon"
            className="kar-mt7 kar-cursor-pointer"
            onClick={() => deleteClick(row.sl_no)}
          />
        ) : (
          ""
        );

      default:
        return <p>{value}</p>;
    }
  };

  const actionRender = (type, row) => {
    switch (type) {
      case "manage_and_allocate":
        return (
          <p>
            <Link
              to={`/vaccine-center?zoneId=${row.sl_no}`}
              className="kar-table-link kar-mr20"
            >
              Manage vaccine centers
            </Link>
            <Link
              to={`/manage-quota/${row.sl_no}`}
              className="kar-table-link kar-mr20"
            >
              Allocate vaccine quota
            </Link>
          </p>
        );
      case "check_online_slots":
        return (
          <p>
            <Link
              to={`/vaccine-center/${zoneId}/detail/${row.sl_no}`}
              className="kar-table-link"
            >
              Check online slots
            </Link>
          </p>
        );
      case "edit_delete":
        return (
          <>
            <img
              src={editIcon}
              alt="icon"
              className="kar-mt7 kar-mr10 kar-cursor-pointer"
              onClick={() => editClick(row)}
            />
            <img
              src={deleteIcon}
              alt="icon"
              className="kar-mt7 kar-cursor-pointer"
              onClick={() => deleteClick(row.sl_no)}
            />
          </>
        );
      default:
        return "-";
    }
  };

  const deleteClick = (id) => {
    if (tableFor === "manage-zone") {
      swal({
        title: "Are you sure?",
        text: "Are you sure that you want to delete this zone?",
        icon: "warning",
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          deleteFun(id);
        }
      });
    } else if (tableFor === "vaccine-center") {
      swal({
        title: "Are you sure?",
        text: "Are you sure that you want to delete this Vaccine center?",
        icon: "warning",
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          deleteFun(id);
        }
      });
    } else if (tableFor === "vaccine-center-detail") {
      swal({
        title: "Are you sure?",
        text: "Are you sure that you want to delete this Vaccine session?",
        icon: "warning",
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          deleteFun(id);
        }
      });
    }
  };
  return (
    <>
      <Row>
        <Col>
          {isLoading ? (
            <div className="kar-text-a-c">
              <Spinner
                animation="border"
                role="status"
                className="kar-m60"
              ></Spinner>
            </div>
          ) : (
            <Table className="kar-table">
              <thead>
                <tr>
                  {tableHeader.map((o) => (
                    <th>{o.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableValue.length ? (
                  tableValue.map((o) => (
                    <tr>
                      {Object.keys(o).map((item, i) => (
                        <td>{tableDataRender(item, o[item], o)}</td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={tableHeader.length}
                      className="kar-text-a-c kar-p20"
                    >
                      No Data
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          )}
        </Col>
      </Row>
    </>
  );
}

export default KarTable;
