import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../../components/common/header/header";
import KarTable from "../../components/common/table/table";
import Filter from "../../components/common/filter/filter";
import "./vaccine-center-detail.css";

function VaccineCenterDetail() {
  const tableHeader = [
    {
      key: "1",
      name: "SL no",
    },
    {
      key: "2",
      name: "Date",
    },
    {
      key: "3",
      name: "Vaccine name",
    },
    {
      key: "4",
      name: "Start time",
    },
    {
      key: "5",
      name: "End time",
    },
    {
      key: "6",
      name: "Vaccine count",
    },
    {
      key: "7",
      name: "Actions",
    },
  ];
  const tableValue = [
    {
      sl_no: "1",
      date: "27 May 2021",
      vaccine_name: "Covishield",
      start_time: "09 : 30 AM",
      end_time: "04 : 00 PM",
      vaccine_count: 20,
      action: "edit_delete",
    },
    {
      sl_no: "2",
      date: "27 May 2021",
      vaccine_name: "Covishield",
      start_time: "09 : 30 AM",
      end_time: "04 : 00 PM",
      vaccine_count: 20,
      action: "edit_delete",
    },
    {
      sl_no: "3",
      date: "27 May 2021",
      vaccine_name: "Covishield",
      start_time: "09 : 30 AM",
      end_time: "04 : 00 PM",
      vaccine_count: 20,
      action: "edit_delete",
    },
  ];
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <p className="kar-mt20">
              Vaccine center — <b>Center details</b>
            </p>
            <h1 className="kar-mt20">Center name 1</h1>
            <Row className="kar-table-sec">
              <Col>
                <Filter />
                <br />
                <KarTable tableHeader={tableHeader} tableValue={tableValue} />
                <Row className="kar-mt20">
                  <Col>
                    <Button className="kar-add-rec">Add new Record</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default VaccineCenterDetail;
