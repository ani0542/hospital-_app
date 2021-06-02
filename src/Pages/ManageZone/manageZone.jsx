import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../../components/common/header/header";
import KarTable from "../../components/common/table/table";
import SearchBox from "../../components/common/search/search";
import AddZoneModel from "../../components/model/add-zone-model/add-zone-model";

import "./manage-zone.css";

function ManageZone() {
  const tableHeader = [
    {
      key: "1",
      name: "SL no",
    },
    {
      key: "2",
      name: "District name",
    },
    {
      key: "3",
      name: "Action",
    },
    {
      key: "4",
      name: "",
    },
  ];
  const tableValue = [
    {
      sl_no: "1",
      center_name: "Center name 1",
      action: "manage_and_allocate",
      delete: true,
    },
    {
      sl_no: "2",
      center_name: "Center name 3",
      action: "manage_and_allocate",
      delete: true,
    },
    {
      sl_no: "3",
      center_name: "Center name 3",
      action: "manage_and_allocate",
      delete: true,
    },
  ];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <br />
            <Row className="kar-table-sec">
              <Col>
                <SearchBox placeholder="Search district name" />
                <KarTable tableHeader={tableHeader} tableValue={tableValue} />
                <Row className="kar-mt20">
                  <Col>
                    <Button className="kar-add-dis" onClick={handleShow}>Add new DIstrict</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <AddZoneModel show={show} handleClose={handleClose} />
      </Container>
    </>
  );
}

export default ManageZone;
